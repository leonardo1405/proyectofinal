from django.db import models

from refineria.models import Camion


class Ruta(models.Model):
    fecha = models.DateField()
    nombre = models.CharField(max_length=100)
    camion = models.ForeignKey(Camion, on_delete=models.CASCADE, related_name='camiones')
    litro_combustible = models.DecimalField(max_digits=10, decimal_places=2)
    precio_combustible = models.DecimalField(max_digits=10, decimal_places=2)

    COMBUSTIBLE_GASOLINA = 1
    COMBUSTIBLE_GASOLINAPREMIUM = 0
    COMBUSTIBLE_DIESEL = -1

    COMBUSTIBLE_CHOICES = (
        (COMBUSTIBLE_GASOLINA, "Gasolina"),
        (COMBUSTIBLE_GASOLINAPREMIUM, "Gasolina_Premium"),
        (COMBUSTIBLE_DIESEL, "Diesel")
    )
    tipo_combustible = models.IntegerField(choices=COMBUSTIBLE_CHOICES, blank=True)

    def __str__(self):
        return self.nombre
