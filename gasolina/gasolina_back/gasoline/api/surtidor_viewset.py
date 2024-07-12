from rest_framework import serializers, viewsets
from rest_framework.decorators import permission_classes

from gasoline.models import Surtidor
from gasoline.authenticacion import VendedorPermission


class SurtidorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Surtidor
        fields = '__all__'


@permission_classes([VendedorPermission])
class SurtidorViewSet(viewsets.ModelViewSet):
    queryset = Surtidor.objects.all()
    serializer_class = SurtidorSerializer
