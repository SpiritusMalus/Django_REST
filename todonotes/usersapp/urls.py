from django.urls import path
from .views import UsersModelViewSet

app_name = 'userapp'

urlpatterns = [
    path('', UsersModelViewSet.as_view({'get': 'list'})),
]
