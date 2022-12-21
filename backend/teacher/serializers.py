from rest_framework import serializers
from teacher.models import Teacher, Lesson
from django.forms import ValidationError


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('id', 'name', 'hourly_pay', 'description', 'image')


class RegistrateClassSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)

    def validate_name(self, value):
        if len(value) < 3:
            raise ValidationError("Deve ter pelo menos três caracteres")
        return value


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
