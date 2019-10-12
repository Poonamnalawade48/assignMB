from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('api/Manager/',views.ManagerView.as_view()),
    path('api/Manager/insert',views.ManagerCerateView.as_view()),
     path('api/Employee/insert',views.EmployeeCerateView.as_view()),
    path('api/Employee/',views.EmployeeView.as_view()),
    path('api/empdetails/<int:id>',views.EmployeeDetailsView.as_view()),
    path('api/Employee/<int:id>/Update/',views.EmployeeUpdateView.as_view()),
    path('api/Employee/Delete/<int:id>',views.EmployeeDeleteView.as_view()),
    path('api/Manager/Login/',views.checkLoginView.as_view()),
    
    
]
