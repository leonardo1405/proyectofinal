from django.db import models

from gasoline.models import Surtidor, Bomba


class TipoCombustible(models.Model):
    nombre = models.CharField(max_length=50)
    surtidor = models.ForeignKey(Surtidor, on_delete=models.CASCADE)
    bomba = models.ForeignKey(Bomba, on_delete=models.CASCADE)
    precio = models.FloatField()
    stock = models.FloatField()

    def __str__(self):
        return self.nombre
