from django.contrib.auth.models import Group
from rest_framework import permissions
import logging

from django.db.models.manager import EmptyManager

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


class GroupPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        user_groups = getattr(request.user, 'groups', None)
        if user_groups is None or isinstance(user_groups, EmptyManager):
            user_groups = []
        else:
            user_groups = list(user_groups)
        return any(group in ['gasoline-admin', 'gasoline-seller'] for group in user_groups)


class UserPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        logger.debug("Verificando permisos")
        user_groups = getattr(request.user, 'groups', None)

        if user_groups is None or isinstance(user_groups, EmptyManager):
            logger.debug("user_groups es None o EmptyManager, asignando lista vacía")
            user_groups = []
        else:
            user_groups = list(user_groups)
            logger.debug(f"user_groups convertido a lista: {user_groups}")

        has_admin = 'gasoline-admin' in user_groups
        return has_admin


class VendedorPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        # Obtener los grupos del usuario
        user_groups = getattr(request.user, 'groups', None)

        # Verificar si el usuario tiene grupos
        if user_groups is None or isinstance(user_groups, Group.objects.none().__class__):
            user_groups = []
        else:
            user_groups = list(user_groups.values_list('name', flat=True))

        # Registrar los grupos del usuario
        logger.info(f"User {request.user.username} belongs to groups: {user_groups}")

        # Verificar si el usuario pertenece al grupo 'gasoline-seller'
        has_permission = 'gasoline-seller' in user_groups
        if has_permission:
            logger.info(f"User {request.user.username} has 'gasoline-seller' permission.")
        else:
            logger.warning(f"User {request.user.username} does NOT have 'gasoline-seller' permission.")

        return has_permission
