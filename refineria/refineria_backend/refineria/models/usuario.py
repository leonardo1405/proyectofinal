from django.contrib.auth.models import User
from django.db import models


class Usuario(models.Model):
    TIPO_CHOFER = 1
    TIPO_ADMINISTRADOR = 2
    TIPO_USUARIO_CHOICES = (
        (TIPO_CHOFER, 'Chofer'),
        (TIPO_ADMINISTRADOR, 'Administrador'),
    )

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
    )
    tipo_usuario = models.IntegerField(choices=TIPO_USUARIO_CHOICES, null=True, blank=True)

    def __str__(self):
        return self.user.username + " _ " + " _ " + self.user.first_name + " _ " + self.user.last_name
