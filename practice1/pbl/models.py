from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group, Permission

# Create your models here.




class Admin(AbstractUser):
    groups = models.ManyToManyField(Group, related_name='admin_groups')
  
    user_permissions = models.ManyToManyField(Permission, related_name='admin_permissions')
    password = models.CharField(max_length=200, null=True)
    phone= models.CharField(max_length=10, blank=True, null=True, unique=True)
    organization_Name = models.CharField(max_length=255, blank=True, null=True)

class Contact(AbstractUser):
    
    groups = models.ManyToManyField(Group, related_name='contact_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='contact_permissions')
    username = models.CharField(max_length=20, null=True, unique=True)
    phone= models.CharField(max_length=10, blank=True, null=True, unique=True)
    email= models.CharField(max_length=30, blank=True, null=True, unique=True)
    message = models.TextField()