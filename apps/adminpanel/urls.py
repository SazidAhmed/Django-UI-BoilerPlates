
from django.urls import path
from .views import dashboard, settings, plans, upgradeComplete

urlpatterns = [
    # Admin panel page urls
    path('', dashboard, name='dashboard'),
    
    # settings urls
    path('settings', settings, name='settings'),
    path('settings/upgrage-plans/', plans, name='upgrage-plans'),
    path('settings/upgradeComplete/', upgradeComplete, name='upgradeComplete'),



    # Admin panel apis

]
