from django.contrib.auth.models import User
from django.db import models


class Usuarios(models.Model):
    TIPO_USUARIO = 1
    TIPO_ADMINISTRADOR = 2
    TIPO_USUARIO_CHOICES = (
        (TIPO_USUARIO, 'Usuario'),
        (TIPO_ADMINISTRADOR, 'Administrador'),
    )

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
    )
    tipo_usuario = models.IntegerField(choices=TIPO_USUARIO_CHOICES, null=True, blank=True)

    def __str__(self):
        return self.user.username + " _ " + " _ " + self.user.first_name + " _ " + self.user.last_name + " _ " + self.telefono
