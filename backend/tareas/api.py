from rest_framework import viewsets, permissions
from .models import Tarea
from .serializers import TareaSerializer
#se agregar decorador para crear opciones propias no solo el crud basico
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

class TareaViewSet(viewsets.ModelViewSet):
    queryset = Tarea.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TareaSerializer

    #se agrega action para poder usar un metodo propio
    @action(detail=True, methods=['POST'])
    def realizado(self, request, pk=None):
        tarea = self.get_object()
        tarea.realizado = not tarea.realizado
        tarea.save()
        return Response({
            'status': 'Tarea realizada' if tarea.realizado else 'tarea no realizada'
            }, status=status.HTTP_200_OK)
        
    