from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from gasoline.api import BombaSerializer
from gasoline.models import Bomba, Venta


class VentaSerializer(serializers.ModelSerializer):
    bomba = BombaSerializer(read_only=True)
    bomba_id = serializers.PrimaryKeyRelatedField(
        queryset=Bomba.objects.all(), source='bomba', write_only=True
    )

    class Meta:
        model = Venta
        fields = '__all__'


class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer
