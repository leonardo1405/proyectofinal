from rest_framework import serializers, viewsets
from rest_framework.decorators import permission_classes

from gasoline.models import Bomba
from gasoline.authenticacion import VendedorPermission


class BombaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bomba
        fields = '__all__'


class BombaViewSet(viewsets.ModelViewSet):
    queryset = Bomba.objects.all()
    serializer_class = BombaSerializer
