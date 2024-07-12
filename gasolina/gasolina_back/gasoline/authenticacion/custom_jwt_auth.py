import logging
from django.contrib.auth.models import AnonymousUser
from rest_framework import authentication, exceptions
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken
from gasoline.authenticacion import CustomAuthUser

# Configuración del logger
logger = logging.getLogger(__name__)


class CustomJWTAuth(authentication.BaseAuthentication):
    jwt_auth = JWTAuthentication()

    def authenticate(self, request):
        token_str = request.headers.get('Authorization', '')[7:]
        if not token_str:
            logger.warning("No token provided in the Authorization header.")
            return AnonymousUser(), None
        try:
            token = self.jwt_auth.get_validated_token(token_str)
            logger.info("Token validated successfully.")
        except InvalidToken:
            logger.error("Invalid token provided.")
            raise exceptions.AuthenticationFailed('Invalid Token')

        self.check_groups(token)
        custom_user = self.get_custom_user(token)
        logger.info(f"User {custom_user.username} authenticated successfully with groups: {custom_user.groups}")
        return custom_user, None

    @staticmethod
    def check_groups(token):
        groups = token.get('groups', [])
        logger.debug(f"Checking groups in token: {groups}")
        if not any(group in groups for group in ['gasoline-admin', 'gasoline-seller', 'speruser']):
            logger.warning("User does not belong to any authorized group.")
            raise exceptions.AuthenticationFailed('Unauthorized group')
        logger.info("User belongs to an authorized group.")

    @staticmethod
    def get_custom_user(token):
        user_id = token['user_id']
        user_name = token['user']
        groups = token.get('groups', [])
        if not isinstance(groups, list):
            groups = []  # Asegura que groups sea siempre una lista

        custom_user = CustomAuthUser()
        custom_user.groups = groups
        custom_user.pk = user_id
        custom_user.username = user_name  # Añade el nombre de usuario al CustomAuthUser
        custom_user.is_authenticated = True

        logger.debug(
            f"Custom user created: {custom_user.username} with ID: {custom_user.pk} and groups: {custom_user.groups}")
        return custom_user
