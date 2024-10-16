from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from weather import views

urlpatterns = [
    path('admin/', admin.site.urls),  # Маршрут до адмін-панелі
    path('', include('weather.urls')),  # Маршрут до додатку
]

