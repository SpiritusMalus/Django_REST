from rest_framework.serializers import ModelSerializer

from .models import Users


class UsersModelSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'first_name', 'last_name', 'username', 'email')


class UsersStaffModelSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = ('is_superuser', 'is_staff',)
