# from django.core.mail import send_mail
# from django.contrib.auth.signals import user_logged_in
# from django.dispatch import receiver
# from django.conf import settings

# @receiver(user_logged_in)
# def send_email_client(sender, request, user, **kwargs):
#     subject = 'Successful Login Notification'
#     message = f'Hello {user.username},\n\nYou have successfully logged in our Compang \n Thank You '
#     from_email = settings.EMAIL_HOST_USER
#     recipient_list = ["modiromil2809@gmail.com"]
#     # to_email = [user.email]

#     send_mail(subject, message, from_email, recipient_list)



# from django.core.mail import send_mail

# @receiver(user_logged_in)
# def user_logged_in_handler(sender, request, user, **kwargs):
#     send_welcome_email(user)

# @receiver(user_signed_up)
# def user_signed_up_handler(sender, user, request, **kwargs):
#     send_welcome_email(user)
