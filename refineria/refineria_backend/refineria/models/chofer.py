from django.db import models


class Chofer(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    edad = models.IntegerField()
    direccion = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre + " _ " + self.apellido + " _ " + self.telefono + " _ " + str(
            self.edad) + " _ " + self.direccion
