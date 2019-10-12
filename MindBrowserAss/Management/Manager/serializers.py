from rest_framework import serializers
from Manager.models import *
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User

# Manager serializer
class managerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Manager
        fields='__all__'

#Employee Serializer
class employeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields='__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Manager
        fields=('Email_Id','Password')

