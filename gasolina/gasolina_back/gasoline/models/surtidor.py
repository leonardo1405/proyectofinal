from django.db import models


class Surtidor(models.Model):
    nombre = models.CharField(max_length=100)
    latitud = models.FloatField()
    longitud = models.FloatField()

    def __str__(self):
        return self.nombre + " _ " + str(self.latitud) + " _ " + str(self.longitud)
