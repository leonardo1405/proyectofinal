from django.db import models

from gasoline.models import Bomba, TipoCombustible


class Venta(models.Model):
    nombre_factura = models.CharField(max_length=100)
    nit = models.CharField(max_length=20)
    cliente = models.CharField(max_length=100)
    correo = models.EmailField(max_length=100)
    monto = models.FloatField()
    precio_actual = models.FloatField()
    cantidad_litros = models.FloatField()
    bomba = models.ForeignKey(Bomba, on_delete=models.CASCADE, related_name='bomba')
    fecha_hora = models.DateTimeField(auto_now_add=True)
    tipo_producto = models.ForeignKey(TipoCombustible, on_delete=models.CASCADE, related_name='tipo_producto')
