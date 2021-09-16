from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'portfolioWeb/index.html',)


def contact(request):
    return render(request, 'portfolioWeb/contact.html',)


def about(request):
    return render(request, 'portfolioWeb/about.html',)


def projects(request):
    return render(request, 'portfolioWeb/projects.html',)
