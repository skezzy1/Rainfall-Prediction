from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Маршрут до адмін-панелі
    path('', include('weather.urls')),  # Маршрут до додатку weather
]

