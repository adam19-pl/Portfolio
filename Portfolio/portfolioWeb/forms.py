from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(label='Your name', max_length=128, widget=forms.TextInput(attrs={'class': 'text-input',
                                                                                            'placeholder': 'Enter Your Name',
                                                                                            }), )
    mail = forms.EmailField(label='Your Email', max_length=256, widget=forms.EmailInput(attrs={'class': 'text-input',
                                                                                    'placeholder': 'Enter Your Email',
                                                                                                        }), )
    subject = forms.CharField(label='Subject', max_length=128, widget=forms.TextInput(attrs={'class': 'text-input',
                                                                                             'placeholder': 'Subject',
                                                                                                      }), )
    message = forms.CharField(label='Message',
                              widget=forms.Textarea(attrs={'class': 'text-input', 'rows': 10,
                                                           'placeholder': 'Type a message...', }), )
