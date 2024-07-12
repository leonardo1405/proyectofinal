from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken import views
from administracion.api import CreateUserView, CustomTokenObtainPairView
from rest_framework_simplejwt.views import  TokenRefreshView, TokenVerifyView

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),  #
    path('api-token-auth/', views.obtain_auth_token, name='api_token_auth'),
    path('create_user/', CreateUserView.as_view(), name='create_user'),



]
