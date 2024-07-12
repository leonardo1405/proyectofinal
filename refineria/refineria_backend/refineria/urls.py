from django.urls import path, include
from rest_framework import routers
from refineria.api import CamionViewSet, RutaViewSet, ChoferViewSet

router = routers.DefaultRouter()
router.register(r'camion', CamionViewSet)
router.register(r'ruta', RutaViewSet)
router.register(r'chofer', ChoferViewSet)

urlpatterns = [
    path('', include(router.urls)),

]
