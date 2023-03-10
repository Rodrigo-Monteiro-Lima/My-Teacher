from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.views import Response
from teacher.models import Teacher, Lesson
from teacher.serializers import (
    TeacherSerializer,
    RegistrateClassSerializer,
    ClassSerializer)
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST)


class TeacherAPIView(APIView):
    def get(self, request, format=None):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


class RegistrateClassAPIView(APIView):
    def post(self, request, id, format=None):
        teacher = get_object_or_404(Teacher, id=id)
        serializer = RegistrateClassSerializer(data=request.data)
        if serializer.is_valid():
            lesson = Lesson(
                name=serializer.validated_data.get('name'),
                email=serializer.validated_data.get('email'),
                teacher=teacher
            )
            lesson.save()
            lesson_serializer = ClassSerializer(lesson, many=False)
            return Response(lesson_serializer.data, status=HTTP_201_CREATED)
        return Response({"message": "Ops, ocorreram erros de validação", "erros": serializer.errors}, status=HTTP_400_BAD_REQUEST)
