from graphene import Int, String, ObjectType, Schema, List
from graphene_django import DjangoObjectType
from TODO.models import Project, ToDo
from .models import Users


class UsersType(DjangoObjectType):

    class Meta:
        model = Users
        fields: '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields: '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields: '__all__'


class Query(ObjectType):

    all_users = List(UsersType)
    all_projects = List(ProjectType)
    all_Todo = List(ToDoType)

    def resolve_all_users(self, info):
        return Users.objects.all()

    def resolve_all_projects(self, info):
        return Project.objects.all()

    def resolve_all_Todo(self, info):
        return ToDo.objects.all()


schema = Schema(query=Query)
