"""todonotes URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from graphene_django.views import GraphQLView

from rest_framework.routers import DefaultRouter

from usersapp.views import UsersModelViewSet
from TODO.views import ProjectModelViewSet, ToDoModelViewSet
from rest_framework.authtoken import views

from drf_yasg import openapi
from drf_yasg.views import get_schema_view
schema = get_schema_view(
    openapi.Info(
        title='TODO',
        default_version='v2',
        description='MyTODO project',
        contact=openapi.Contact(email='Lana2111@yandex.ru'),
        license=openapi.License(name='MT')
    ),
    public=True,
)



router = DefaultRouter()
router.register('users', UsersModelViewSet)
router.register('project', ProjectModelViewSet)
router.register('ToDo', ToDoModelViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),

    # URLPathVersioning
    # path('api/<str:version>/users/', UsersModelViewSet.as_view({'get': 'list'})),
    # NamespaceVersioning
    # path('api/users/v1', include('usersapp.urls', namespace='v1')),
    # path('api/users/v2', include('usersapp.urls', namespace='v2')),

    path('swagger/', schema.with_ui('swagger')),
    path('graphql/', GraphQLView.as_view(graphiql=True))
]
