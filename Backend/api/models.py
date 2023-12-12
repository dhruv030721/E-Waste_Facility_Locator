from djongo import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=200)
    phone = models.BigIntegerField()
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=200)