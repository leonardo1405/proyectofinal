import logging

from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User, Group
from django.contrib.sites import requests
from django.core.exceptions import ValidationError
import re
from rest_framework import status, serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def enviar_lista_usuarios(data, url_destino, token):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {token}'
    }
    try:
        response = requests.post(url_destino, json=data, headers=headers)
        if response.status_code == 200:
            logger.info(f"Datos enviados con éxito a {url_destino}. Respuesta: {response.text}")
            return True
        else:
            logger.error(
                f"Error al enviar datos a {url_destino}. Código de estado: {response.status_code}, Respuesta: {response.text}")
            return False
    except Exception as e:
        logger.exception(f"Excepción al enviar datos a {url_destino}: {e}")
        return False


class ListUsersView(APIView):
    permission_classes = [IsAuthenticated]

    @staticmethod
    def post(request):
        try:
            # Obtener el token de la cabecera Authorization
            token = request.headers.get('Authorization').split(' ')[1]
            refineria_driver_group = Group.objects.get(name='refineria-driver')
            users = User.objects.filter(groups=refineria_driver_group)
            serializer = UserSerializer(users, many=True)
            url_destino = "http://127.0.0.1:8000/api/recibir-usuario/"
            # Pasar el token como argumento a enviar_lista_usuarios_a_api_externa
            if enviar_lista_usuarios(serializer.data, url_destino, token):
                logger.info("ListUsersView: Datos enviados con éxito.")
                return Response({'message': 'Datos enviados con éxito a la API destino Acceso'},
                                status=status.HTTP_200_OK)
            else:
                logger.error("ListUsersView: Error al enviar datos a la API destino.")
                return Response({'error': 'Error al enviar datos a la API destino'},
                                status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Group.DoesNotExist:
            logger.error("ListUsersView: Grupo 'refineria-chofer' no encontrado.")
            return Response({'error': 'Grupo no encontrado'}, status=status.HTTP_404_NOT_FOUND)


def validate_email_format(email):
    # Expresión regular para validar el formato del correo electrónico
    regex = r'^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$'

    if not re.match(regex, email):
        raise ValidationError('El formato del correo electrónico es inválido')


class CreateUserView(APIView):
    @staticmethod
    def post(request):
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        print("Received data:", request.data)
        print("First name:", first_name)
        print("Last name:", last_name)
        print("Username:", username)
        print("Email:", email)
        print("Password:", password)

        if not all([first_name, last_name, username, email, password]):
            return Response({'error': 'Todoss los campos son requeridos'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            validate_email_format(email)
        except ValidationError:
            return Response({'error': 'El formato del correo electrónico es inválido'},
                            status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username, email, password)
        user.first_name = first_name
        user.last_name = last_name
        user.save()

        return Response({'message': 'Usuario creado con éxito'}, status=status.HTTP_201_CREATED)


class EmailOrUsernameModelBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = User.objects.get(email=username)
        except User.DoesNotExist:
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                return None
        if user.check_password(password):
            return user


class UserSerializer(serializers.ModelSerializer):
    groups = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'groups']
