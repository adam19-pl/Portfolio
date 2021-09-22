from django import forms


class ContactForm(forms.Form):

    name = forms.CharField(label='Your name', max_length=128, widget=forms.TextInput(attrs={'class':'form-control col-md-6 mb-3'}),)
    mail = forms.EmailField(label='Your Email', max_length=256, widget=forms.EmailInput(attrs={'class' : 'form-control col-md-6 mb-3'}),)
    subject = forms.CharField(label='Subject', max_length=128, widget=forms.TextInput(attrs={'class' : 'form-control col-md-6 mb-3'}),)
    message = forms.CharField(label='Message', widget=forms.Textarea(attrs={'class' : 'form-control', 'rows': 10,}),)