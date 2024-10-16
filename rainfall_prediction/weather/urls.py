from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Головна сторінка
   # path('forecast/', views.forecast, name='forecast'),  # Сторінка з прогнозами
]