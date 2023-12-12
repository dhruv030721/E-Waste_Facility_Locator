from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status
from rest_framework import viewsets
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from .models import User
from django.core.exceptions import ObjectDoesNotExist

class UserView(viewsets.ViewSet):
    
    def Signup(self, request, format = None):
        username = request.data.get("username")
        password = request.data.get("password")
        data = request.data
        try:
            instance = User.objects.get(username=username)
            if instance:
                return Response({"message": "User already registered"}, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist:
            hashed_password = make_password(password)
            data['password'] = hashed_password
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Signup Successfully"}, status=status.HTTP_201_CREATED)
            return Response({"message": "Signup failed"}, status=status.HTTP_400_BAD_REQUEST)


    def Login(self, request, format = None):
        username = request.data.get("username")
        password = request.data.get("password")
        try: 
            instance = User.objects.get(username = username)
            if instance: 
                if check_password(password, instance.password):
                    return Response({"message" : "Login Sucessfully"}, status=status.HTTP_200_OK)
                else:
                    return Response({"message": "Incoreect Password!"}, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
