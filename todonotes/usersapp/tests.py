from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory,  APIClient


from .views import UsersModelViewSet
from .models import Users


class TestUsersModelViewSet(TestCase):

    def setUp(self) -> None:
        self.name = 'admin2'
        self.password = 'admin2'
        self.email = 'admin@admin.ru'

        self.data = {'first_name': 'Morty', 'last_name': 'Camry', 'username': 'Lol2', 'email': 'Mor@gmail.com'}
        self.url = '/api/users/'

        self.admin = Users.objects.create_superuser(username=self.name, password=self.password, email=self.email)

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = UsersModelViewSet.as_view({'get': 'list'})
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format='json')
        view = UsersModelViewSet.as_view({'post': 'create'})
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_user_api(self):
        client = APIClient()
        user = Users.objects.create(**self.data)
        response = client.get(f'{self.url}{user.id}/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_user_api(self):
        client = APIClient()
        user = Users.objects.create(**self.data)
        client.login(username=self.name, password=self.password)
        response = client.delete(f'{self.url}{user.id}/')

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        client.logout()

    def tearDown(self) -> None:
        pass
