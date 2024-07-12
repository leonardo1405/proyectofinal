from rest_framework.permissions import BasePermission
from administracion.models.usuarios import Usuarios


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            cliente = Usuarios.objects.get(user=request.user)
            return cliente.tipo_usuario == Usuarios.TIPO_ADMINISTRADOR
        return False
