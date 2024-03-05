from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from .models import *
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.contrib.auth.signals import user_logged_in
from django.dispatch import receiver
from django.core.exceptions import ValidationError
from django.db.utils import IntegrityError
from django.conf import settings
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404

User = get_user_model()
# Create your views here.


def home(request):
	return render(request, "index.html")


def service(request):
    return render(request, "service.html")


def contact(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')

        contact = Contact.objects.create(username=username, email=email, phone=phone, message=message)
        return redirect("/index/")

    return render(request, "contact.html")




def about(request):
    return render(request, "about.html")



def user_login(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is None:
            messages.error(request, 'Invalid username or password')
            return render(request, 'Login.html')

        login(request, user)
        return redirect('home')

    return render(request, 'Login.html')


def delete_user(request, user_id):
    user_instance = get_object_or_404(User, id=user_id)
    
    # Save the username before deleting for the success message
    username = user_instance.username

    user_instance.delete()

    # Add a success message
    messages.success(request, f"User '{username}' deleted successfully!")

    return redirect('Login')


def user_logout(request):
    logout(request)
    return redirect('Login')

def register(request):
    if request.method == "POST":
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        password = request.POST.get('password')
        organization_Name = request.POST.get('organization_Name')
        

        try:
            # Check if the username already exists
            user = User.objects.get(username=username)
            messages.error(request, 'Username already exists. Please choose a different one.')
            return render(request, 'register.html')
        except User.DoesNotExist:
            try:
                # Check if the phone number already exists
                user = User.objects.get(phone=phone)
                messages.error(request, 'Phone number already registered. Please use a different one.')
                return render(request, 'register.html')

            except User.DoesNotExist:
                try:
                    # Check if the email already exists
                    user = User.objects.get(email=email)
                    messages.error(request, 'Email address already registered. Please use a different one.')
                    return render(request, 'register.html')

                except User.DoesNotExist:

                     user = User.objects.create_user(
                            username=username,
                            first_name=first_name,
                            last_name=last_name,
                            phone=phone,
                            email=email,
                            password=password,
                            organization_Name=organization_Name
                             )
                     messages.success(request, 'Account created successfully')
                     return redirect('Login')

    return render(request, 'register.html')

