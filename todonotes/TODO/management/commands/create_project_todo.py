from django.core.management import BaseCommand

from TODO.models import Project, ToDo
from usersapp.models import Users


class Command(BaseCommand):

    def handle(self, *args, **options):
        data_project = {
            'name': 'Mortys',
            'urls_rep': 'http://127.0.0.1:8000/api/project/'
        }
        project = Project.objects.create(**data_project)
        user = Users.objects.first()
        project.users.set([user.id])

        data_todo = {
            'project': project.id,
            'users_name': user.id,
            'text': 'Something'
        }
        todo = ToDo.objects.create(**data_todo)
        # # todo.users_name.set(user.id)
        # # todo.project.set(project.id)
