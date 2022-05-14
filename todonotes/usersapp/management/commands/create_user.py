from django.core.management import BaseCommand

from usersapp.models import Users
from TODO.models import Project, ToDo


class Command(BaseCommand):

    def handle(self, *args, **options):
        data_user = {
            'first_name': 'user2',
            'last_name': 'user2',
            'username': 'user2',
            'email': 'user2@gmail.com'
        }
        user = Users.objects.create(**data_user)

        data_project = {
            'name': 'Mortys',
            'urls_rep': 'http://127.0.0.1:8000/api/project/'
        }
        project = Project.objects.create(**data_project)
        project.users.set([user.id])

        data_todo = {
            'project': project,
            'users_name': user,
            'text': 'Something',
            'is_active': True,
        }
        todo = ToDo.objects.create(**data_todo)
