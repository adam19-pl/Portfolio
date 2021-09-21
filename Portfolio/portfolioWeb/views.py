from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail


def index(request):
    if request.method == 'POST':
        message_email = request.POST['message-email']
        message_subject = request.POST['message-subject']
        message = request.POST['message']

        # send_mail(
        #     message_subject,
        #     message,
        #     message_email,
        #     ['blazynski.adam@gmail.com'],
        # )
        print(message_email,message_subject,message)
        return render(request, 'portfolioWeb/index.html', context= {'message': message })
    else:
        return render(request, 'portfolioWeb/index.html', )


def contact(request):
    return render(request, 'portfolioWeb/contact.html', )


def about(request):
    return render(request, 'portfolioWeb/about.html', )


def projects(request):
    return render(request, 'portfolioWeb/projects.html', )
