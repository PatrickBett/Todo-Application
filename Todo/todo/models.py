from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length= 200)
    completed = models.BooleanField(default=False)
    author = models.ForeignKey(User, on_delete= models.CASCADE, related_name= 'todos', default=1)

    def __str__(self):
        return self.title