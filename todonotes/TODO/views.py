from rest_framework import status, filters
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .filters import ProjectFilter, ToDoFilter
from .serializers import *
from rest_framework.filters import SearchFilter, OrderingFilter

class ProjectLimitOffset(LimitOffsetPagination):
    default_limit = 10


class ToDoLimitOffset(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ['name']
    # pagination_class = ProjectLimitOffset


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    # pagination_class = ToDoLimitOffset
    filterset_class = ToDoFilter

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return Response(status=status.HTTP_200_OK)

