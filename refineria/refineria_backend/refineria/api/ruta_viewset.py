from rest_framework import serializers, viewsets
from refineria.models import Camion, Ruta
from refineria.api import CamionSerializer


class RutaSerializer(serializers.ModelSerializer):
    camion = CamionSerializer(read_only=True)
    camion_id = serializers.PrimaryKeyRelatedField(
        queryset=Camion.objects.all(), source='camion', write_only=True
    )

    class Meta:
        model = Ruta
        fields = '__all__'


class RutaViewSet(viewsets.ModelViewSet):
    queryset = Ruta.objects.all()
    serializer_class = RutaSerializer
