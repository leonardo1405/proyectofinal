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
        return any(group in ['refineria-admin', 'refineria-chofer'] for group in user_groups)


class SuperUserPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        logger.debug("Verificando permisos")
        user_groups = getattr(request.user, 'groups', None)

        if user_groups is None or isinstance(user_groups, EmptyManager):
            logger.debug("user_groups es None o EmptyManager, asignando lista vacía")
            user_groups = []
        else:
            user_groups = list(user_groups)
            logger.debug(f"user_groups convertido a lista: {user_groups}")

        has_admin = 'refineria-admin' in user_groups
        return has_admin


class ChoferPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        user_groups = getattr(request.user, 'groups', None)
        if user_groups is None or isinstance(user_groups, EmptyManager):
            user_groups = []
        else:
            user_groups = list(user_groups)
        return 'refineria-chofer' in user_groups
