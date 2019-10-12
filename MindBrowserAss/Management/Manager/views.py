from django.shortcuts import render
from Manager.models import *
from Manager.serializers import *
from rest_framework import generics
from django.http import HttpResponse

# Create your views here.
# ManagerList View
class ManagerView(generics.ListCreateAPIView):
    queryset=Manager.objects.all()
    serializer_class=managerSerializer

# EmployeeList View
class EmployeeView(generics.ListCreateAPIView):
    queryset=Employee.objects.all()
    serializer_class=employeeSerializer

# Employee update View
class EmployeeUpdateView(generics.UpdateAPIView):
    queryset=Employee.objects.all()
    serializer_class=employeeSerializer
    lookup_field='id'

 # Employee retrive View
class EmployeeDetailsView(generics.RetrieveAPIView):
    queryset=Employee.objects.all()
    serializer_class=employeeSerializer
    lookup_field='id'

# Employee delete View
class EmployeeDeleteView(generics.DestroyAPIView):
    queryset=Employee.objects.all()
    serializer_class=employeeSerializer
    lookup_field='id'

    # Manager insert or create View
class ManagerCerateView(generics.CreateAPIView):
    queryset=Manager.objects.all()
    serializer_class=managerSerializer

      # Employee insert or create View
class EmployeeCerateView(generics.CreateAPIView):
    queryset=Employee.objects.all()
    serializer_class=employeeSerializer
   
   #View for checking login
class checkLoginView(generics.RetrieveUpdateAPIView):
    queryset=Manager.objects.all()
    serializer_class=UserSerializer
    