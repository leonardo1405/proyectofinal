from django.urls import path, include
from rest_framework import routers
from gasoline.api import BombaViewSet, SurtidorViewSet, VentaViewSet, TipoCombustibleViewSet

router = routers.DefaultRouter()
router.register(r'bomba', BombaViewSet)
router.register(r'surtidor', SurtidorViewSet)
router.register(r'venta', VentaViewSet)
router.register(r'tipo_combustible', TipoCombustibleViewSet)
urlpatterns = [
    path('', include(router.urls)),

]
