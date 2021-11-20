from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm


def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            message = form.cleaned_data['message']
            message_subject = form.cleaned_data['subject']
            message_email = form.cleaned_data['mail']
            message_name = form.cleaned_data['name']
            mail_message = f"""
            From:{message_name}
            Email: {message_email}
            Message: {message}
            """
            # send an email
            send_mail(
                message_subject,  # subject
                mail_message,  # message
                message_email,  # from email
                [settings.EMAIL_HOST_USER],  # to email
            )
            print(message_email, message_name, message_subject, message)
            return render(request, 'portfolioWeb/index.html', context={'message': message,
                                                                       'message_name': message_name,})
        return render(request, 'portfolioWeb/index.html', context={'form': form})
    else:
        form = ContactForm()
        return render(request, 'portfolioWeb/index.html', context={'form': form}, )


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            message = form.cleaned_data['message']
            message_subject = form.cleaned_data['subject']
            message_email = form.cleaned_data['mail']
            message_name = form.cleaned_data['name']

            mail_message = f"""
            From:{message_name}
            Email: {message_email}
            Message: {message}
            """
            # send an email
            send_mail(
                message_subject,  # subject
                mail_message,  # message
                message_email,  # from email
                [settings.EMAIL_HOST_USER],  # to email
            )
            print(message, message_subject, message_email, message_name)
            return render(request, 'portfolioWeb/contact.html', {'message_name': message_name})
    else:
        form = ContactForm()
    return render(request, 'portfolioWeb/contact.html', {'form': form}, )


def about(request):
    return render(request, 'portfolioWeb/about.html', )


def projects(request):
    return render(request, 'portfolioWeb/projects.html', )
