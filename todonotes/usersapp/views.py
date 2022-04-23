from rest_framework import mixins
from rest_framework.generics import RetrieveAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import GenericViewSet

from .models import Users
from .serializers import UsersModelSerializer, UsersStaffModelSerializer


class UsersModelViewSet(GenericViewSet, ListModelMixin, RetrieveAPIView,
                        mixins.UpdateModelMixin, mixins.CreateModelMixin,
                        mixins.DestroyModelMixin):
    queryset = Users.objects.all()
    # serializer_class = UsersModelSerializer

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return UsersStaffModelSerializer
        return UsersModelSerializer
