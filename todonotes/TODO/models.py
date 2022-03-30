from django.db import models

from usersapp.models import Users


class Project(models.Model):
    name = models.CharField(max_length=128)
    urls_rep = models.URLField(verbose_name='URL repository', blank=True)
    users = models.ManyToManyField(Users)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField()
    users = models.ManyToManyField(Users)

    def __str__(self):
        return self.users
