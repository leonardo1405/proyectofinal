from django.db import models

from gasoline.models import Surtidor


class Bomba(models.Model):
    codigo = models.CharField(max_length=10)
    surtidor = models.ForeignKey(Surtidor, on_delete=models.CASCADE)

    def __str__(self):
        return self.codigo
