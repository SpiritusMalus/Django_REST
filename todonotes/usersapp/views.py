from rest_framework import mixins
from rest_framework.generics import RetrieveAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import GenericViewSet

from .models import Users
from .serializers import UsersModelSerializer


class UsersModelViewSet(GenericViewSet, ListModelMixin, RetrieveAPIView, mixins.UpdateModelMixin):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer

