
from django.urls import path
# from . import views
from .views import about, contact, home
urlpatterns = [
    # website page urls
    path('', home, name='frontpage'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),

    # website apis

]
