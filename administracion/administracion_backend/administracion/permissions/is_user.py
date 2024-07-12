from rest_framework.permissions import BasePermission

from administracion.models import Usuarios


class IsUser(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        is_driver_group = user and user.groups.filter(name='usuario').exists()
        has_driver_model = Usuarios.objects.filter(user=user).exists()
        return is_driver_group and has_driver_model
