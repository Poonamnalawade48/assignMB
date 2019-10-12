from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
# Manager Model
class Manager(models.Model):
    Email_Id=models.EmailField(max_length=50,unique=True,blank=False,null=False)
    First_Name=models.CharField(max_length=10)
    Last_Name=models.CharField(max_length=10)
    Password=models.CharField(max_length=100)
    Address=models.CharField(max_length=200)
    Date_Of_Birth=models.DateField()
    Company=models.CharField(max_length=100)

    # Employee model
class Employee(models.Model):
    manager=models.ForeignKey('Manager',on_delete=models.CASCADE)
    First_Name=models.CharField(max_length=10)
    Last_Name=models.CharField(max_length=10)
    Address=models.CharField(max_length=200)
    Date_Of_Birth=models.DateField()
    Mobile_No=PhoneNumberField()
    City=models.CharField(max_length=10)