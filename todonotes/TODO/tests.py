from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Project, ToDo
from usersapp.models import Users


class TestProjectModelViewSet(APITestCase):

    def setUp(self) -> None:
        self.name = 'admin'
        self.password = 'admin'
        self.email = 'admin@am.ru'

        self.admin = Users.objects.create_superuser(username=self.name, password=self.password, email=self.email)
        self.user_create = Users.objects.create(username='Malum', password='y6661342Ll', email='user_u@user.ru')

        self.data = {'name': 'Mortys', 'urls_rep': 'http://127.0.0.1:8000/api/users/', 'users': [self.user_create.id]}
        self.url = '/api/project/'

    def test_get_list(self):
        response = self.client.get(self.url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_project(self):
        project = Project.objects.create(**self.data)
        # user = Users.objects.first()
        # print(user.id)
        # project.users.add(user.id)
        self.client.login(username=self.name, password=self.password)
        response = self.client.post(self.url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.client.logout()


    # def test_put_mixer(self):
    #
    #     project = mixer.blend(Project, name='ChangeName')
    #     self.client.login(username=self.name, password=self.password)
    #     response = self.client.put(f'{self.url}{project.id}/')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    def tearDown(self) -> None:
        pass
