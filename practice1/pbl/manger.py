from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, phone, message, organization_Name, **extra_fields):

        if not phone:
            raise ValueError("phone number is required")    
        user = self.model(phone=phone, message=message, organization_Name=organization_Name, **extra_fields)
        user.save(using=self._db)

        return user

    def create_superuser(self, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        return self.create_user(phone,message, organization_Name **extra_fields)
