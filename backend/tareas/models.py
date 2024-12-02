from django.db import models

# Create your models here.
class Tarea(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(null=True , blank=True)
    realizado = models.BooleanField(default=False)
    fecha_creacion = models.DateTimeField(auto_now_add=True)