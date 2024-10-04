from django.db import models

class CityWeather(models.Model):
    city = models.CharField(max_length=100)
    date = models.DateField()
    temperature = models.FloatField()
    humidity = models.FloatField()
    pressure = models.FloatField()
    wind_speed = models.FloatField()
    clouds = models.FloatField()
    rain = models.FloatField()

    def __str__(self):
        return self.city