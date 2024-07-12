from django.db import models

from refineria.models import Chofer


class Camion(models.Model):
    modelo = models.CharField(max_length=100)
    placa = models.CharField(max_length=100)
    capacidad = models.DecimalField(max_digits=10, decimal_places=2)
    saldo = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    chofer = models.ForeignKey(Chofer, on_delete=models.CASCADE, related_name='chofer', null=True, blank=True)
    tipo_combustible = models.CharField(max_length=100)

    def __str__(self):
        return self.modelo + " _ " + self.placa + " _ " + str(
            self.capacidad) + " _ " + self.tipo_combustible + " _ " + str(self.saldo)
