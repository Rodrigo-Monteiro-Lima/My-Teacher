from rest_framework import serializers
from teacher.models import Teacher, Lesson


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('id', 'name', 'hourly_pay', 'description', 'image')


class RegistrateClassSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
