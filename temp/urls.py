"""temp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import views
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from apps.core.views import frontpage,register, login

urlpatterns = [
    # super adminpanel
    path('admin/', admin.site.urls),
    # Core Urls
    path('', frontpage, name='frontpage'),
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),

    # Website Urls
    path('website/', include('apps.website.urls')),

    # Adminpanel Urls
    path('adminpanel/', include('apps.adminpanel.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)