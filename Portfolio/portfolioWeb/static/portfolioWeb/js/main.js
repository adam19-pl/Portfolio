
var language ={
    eng:{
    test:"work",
    },
    pl:{
    menuHome:"Strona Główna",
    menuAbout:"O mnie",
    menuContact:"Kontakt",
    menuProjects:"Projekty",
    menuLanguages: "Języki",
    menuLanguageEnglish:"Angielski",
    menuLanguagePolish:"Polski",
    footerContactHeader:"Skontaktuj się ze mną poprzez :",
    footerContactPhone:"Telefon",
    footerIconsCredentialFrom:"z",
    footerIconsCredential:"Ikony stworzone przez ",
    indexAboutHeader:"Cześć! Jestem Adam!",
    indexAboutHeader3:"Chce zostać programistą",
    indexAboutInformation:'Z wykształcenia jestem inżynierem sieci komputerowych, z pasji programistą i '+
                           '„domowym” producentem muzycznym. Uwielbiam pracę zespołową, rozwiązywanie niekonwencjonalnych zadań oraz wyzwań. ' +
                           'Ambitny i „zawzięty” , zawsze dążący do zrealizowania wyznaczonego celu.',
    indexAboutButton:"Czytaj więcej",
    indexSkillsHeader:'Moje umiejętności',
    indexProjectsHeader:'Projekty',
    indexProjectPortfolioDescription:'Moja wizytówka. Możesz sprawdzić kod na GitHub.',
    indexProjectPoissonAppDescription:'Przewiduj wynik meczu. Wystarczy wybrać odpowiednie drużyny.',
    indexProjectDrinkAppDescription:'Stwórz konto lub zaloguj się i dodaj przepisy drinków.',
    indexProjectsButton:'Więcej Informacji',
    indexContactHeader:'Skontaktuj się ze mną',
    indexChanceSectionHeader:'Skontaktujcię się ze mną',
    indexChanceSectionParagraph:'Pokażę Wam, że było warto!',
    id_message:'Wiadomość',
    id_name: "Twoje imię",
    id_namePlaceholder: "Wprowadź swoję imię",
    id_mail: "Twój email",
    id_mailPlaceholder: "Wprowadź swój adres email",
    id_subject:"Temat",
    id_subjectPlaceholder:"Wprowadź temat",
    indexContactButton:"Wyślij",
    contactMailMessageInformationOne:'Dziękuję',
    contactMailMessageInformationTwo:', za przesłanie wiadomości!',
    contactMailMessageDescription:'Otrzymaliśmy Twoją wiadomość i niedługo na nią odpowiemy...' ,
    contactHeader:"Skontaktuj się ze mną poprzez :",
    contactLinkedIn:"Profil LinkedIn",
    contactGithub:"Profil GitHub",
    contactOr:"lub",
    contactSendMessage:"Wyślij mi wiadomość",
    contactButton:"Wyślij",
    aboutHeader:"O mnie",
    aboutDescription:'Z wykształcenia jestem inżynierem sieci komputerowych, z pasji programistą i '+
                           '„domowym” producentem muzycznym. Uwielbiam pracę zespołową, rozwiązywanie niekonwencjonalnych zadań oraz wyzwań. ' +
                           'Ambitny i „zawzięty” , zawsze dążący do zrealizowania wyznaczonego celu.',
    aboutHeaderProgramming:'Umiejętności programowania',
    aboutHeaderProgrammingDescription:'Dlaczego każda umiejętność na poziomie Juniora ? Możliwe, że moje umiejętności są ' +
    'bardziej zaawanswowane(sam sprawdź - poprostu zadzwóń/napisz do mnie)... Jest tyle rzeczy do nauczenia...' +
    'Programowanie to jedyna droga którą chcę podążać. Kocham to. Jestem głodny wiedzy i podwyższania swoich umięjętnośći!',
    aboutTechnology:'Technologia',
    aboutLvl:'Poziom',
    aboutSoftSkills:'Umiejętności miękkie',
    aboutSoftSkillsSkill:'Umiejętność',
    aboutSoftSkillsLvl:'Poziom',
    aboutSoftSkillsSales:'Planowanie sprzedaży',
    aboutSoftSkillsCommunicativeness:'Komunikatywność',
    aboutSoftSkillsResourcefulness:'Zaradność',
    aboutSoftSkillsIndependence:'Samodzielność',
    aboutSoftSkillsContact:'Nawiązywanie z łatwością kontaktów',
    aboutLanguages:'Języki',
    aboutLanguage:"Język",
    aboutLanguageLvl:'Poziom',
    aboutLanguageEnglish:'Angielski',
    aboutLanguageGerman:'Niemiecki',
    aboutLanguagePolish:'Polski',
    aboutLanguageLvlPolish:'Ojczysty',
    projectsHeader:'Projekty',
    projectsSubtitle:'Oto kilka moich projektów',
    projectsDescription:'Śmiało, sprawdź każdy projekt który Ci się spodoba !',
    projectOneDescription:'Możesz stworzyć konto i się zalogować, dodać przepisy oraz przesłać zdjęcie gotowego napoju, '+
    ' lub wyszykać przepis w wyszukiwarce. Do stworzenia tej aplikacji użyłem: Python, Django, CSS, HTML i wdrożyłem ją na AWS.' ,
    projectTwoDescription:'Moja wizytówka. Do stworzenia tego projektu użyłem: Python, Django, SASS, HTML, JS, Bootstrap i '+
    'wdrożyłem go za pomocą platformy Heroku,',
    projectThreeDescription :'Chcesz przewidzieć wynik meczu? Wypróbuj tą aplikację. Do jej stworzenia użyłem : Python, Django, SASS, HTML, Bootstrap, JS, ParticlesJS, ChartJS, api-football i wdrożyłem na Heroku.',
    projectFourDescription: 'Prosta aplikacja e-commerce. Do stworzenia projektu uzyłem: Python, Django, CSS, HTML, Bootstrap',
    projectFiveDescription: 'Poisson App w terminalu ( bez front-endu). To stworzenia tego projektu użyłem: Python',
    projectSixDescription: 'Prosta strona intenretowa. Do jej stworzenia użyłęm : HTML, CSS/SASS, JS.',
    }
}

function changeLanguage(lang) {
  localStorage.setItem("Language",lang);
  location.reload();
};

// Check if a hash value exists in the URL
if (localStorage.Language) {

  // Set the content of the webpage
  // depending on the hash value
  if (localStorage.Language == "pl"){
    menuHome.textContent = language.pl.menuHome;
    menuAbout.textContent = language.pl.menuAbout;
    menuContact.textContent = language.pl.menuContact;
    menuProjects.textContent = language.pl.menuProjects;
    menuLanguages.textContent = language.pl.menuLanguages;
    menuLanguageEnglish.textContent = language.pl.menuLanguageEnglish;
    menuLanguagePolish.textContent = language.pl.menuLanguagePolish;
    footerContactHeader.textContent = language.pl.footerContactHeader;
    footerContactPhone.textContent = language.pl.footerContactPhone;
    footerIconsCredentialFrom.textContent = language.pl.footerIconsCredentialFrom;
    footerIconsCredentialFrom2.textContent = language.pl.footerIconsCredentialFrom;
    footerIconsCredential.textContent = language.pl.footerIconsCredential;
    if(location.pathname === "/"){
        if(typeof indexMailInformation === undefined){
        indexMailMessageInformationOne.textContent = language.pl.contactMailMessageInformationOne;
        indexMailMessageInformationTwo.textContent = language.pl.contactMailMessageInformationTwo;
        }else{
        indexAboutHeader.textContent = language.pl.indexAboutHeader;
        indexAboutHeader3.textContent = language.pl.indexAboutHeader3;
        indexAboutInformation.textContent = language.pl.indexAboutInformation;
        indexAboutButton.textContent = language.pl.indexAboutButton;
        indexSkillsHeader.textContent = language.pl.indexSkillsHeader;
        indexProjectsHeader.textContent = language.pl.indexProjectsHeader;
        indexProjectsButton.textContent = language.pl.indexProjectsButton;
        indexProjectPoissonAppDescription.textContent = language.pl.indexProjectPoissonAppDescription;
        indexProjectDrinkAppDescription.textContent = language.pl.indexProjectDrinkAppDescription;
        indexProjectPortfolioDescription.textContent = language.pl.indexProjectPortfolioDescription;
        indexContactHeader.textContent = language.pl.indexContactHeader;
        indexChanceSectionHeader.textContent = language.pl.indexChanceSectionHeader;
        indexChanceSectionParagraph.textContent = language.pl.indexChanceSectionParagraph;
        id_name.labels[0].textContent = language.pl.id_name;
        id_name.placeholder = language.pl.id_namePlaceholder;
        id_message.labels[0].textContent = language.pl.id_message;
        id_message.placeholder = language.pl.id_message;
        id_mail.labels[0].textContent = language.pl.id_mail;
        id_mail.placeholder = language.pl.id_mailPlaceholder;
        id_subject.labels[0].textContent = language.pl.id_subject;
        id_subject.placeholder = language.pl.id_subjectPlaceholder;
        indexContactButton.value= language.pl.indexContactButton;
        }
        }
    else if(location.pathname === "/contact/"){
        if(typeof contactMailInformation===undefined){
        mailMessageInformationOne.textContent = language.pl.contactMailMessageInformationOne;
        mailMessageInformationTwo.textContent = language.pl.contactMailMessageInformationTwo;
        }else{
        contactHeader.textContent = language.pl.contactHeader;
        contactLinkedIn.textContent = language.pl.contactLinkedIn;
        contactGithub.textContent = language.pl.contactGithub;
        contactOr.textContent = language.pl.contactOr;
        contactSendMessage.textContent = language.pl.contactSendMessage;
        id_name.labels[0].textContent = language.pl.id_name;
        id_name.placeholder = language.pl.id_namePlaceholder;
        id_message.labels[0].textContent = language.pl.id_message;
        id_message.placeholder = language.pl.id_message;
        id_mail.labels[0].textContent = language.pl.id_mail;
        id_mail.placeholder = language.pl.id_mailPlaceholder;
        id_subject.labels[0].textContent = language.pl.id_subject;
        id_subject.placeholder = language.pl.id_subjectPlaceholder;
        contactButton.value = language.pl.contactButton;
        }
    }
    else if(location.pathname ==="/about/"){
    aboutHeader.textContent = language.pl.aboutHeader;
    aboutDescription.textContent = language.pl.aboutDescription;
    aboutHeaderProgramming.textContent = language.pl.aboutHeaderProgramming;
    aboutHeaderProgrammingDescription.textContent = language.pl.aboutHeaderProgrammingDescription;
    aboutTechnology.textContent = language.pl.aboutTechnology;
    aboutLvl.textContent = language.pl.aboutLvl;
    aboutSoftSkills.textContent = language.pl.aboutSoftSkills;
    aboutSoftSkillsSkill.textContent = language.pl.aboutSoftSkillsSkill;
    aboutSoftSkillsLvl.textContent = language.pl.aboutSoftSkillsLvl;
    aboutSoftSkillsSales.textContent = language.pl.aboutSoftSkillsSales;
    aboutSoftSkillsCommunicativeness.textContent = language.pl.aboutSoftSkillsCommunicativeness;
    aboutSoftSkillsResourcefulness.textContent = language.pl.aboutSoftSkillsResourcefulness;
    aboutSoftSkillsIndependence.textContent = language.pl.aboutSoftSkillsIndependence;
    aboutSoftSkillsContact.textContent = language.pl.aboutSoftSkillsContact;
    aboutLanguages.textContent = language.pl.aboutLanguages;
    aboutLanguage.textContent = language.pl.aboutLanguage;
    aboutLanguageLvl.textContent = language.pl.aboutLanguageLvl;
    aboutLanguageEnglish.textContent = language.pl.aboutLanguageEnglish;
    aboutLanguageGerman.textContent = language.pl.aboutLanguageGerman;
    aboutLanguagePolish.textContent = language.pl.aboutLanguagePolish;
    aboutLanguageLvlPolish.textContent = language.pl.aboutLanguageLvlPolish;
    }
    else if(location.pathname ==='/projects/'){
     projectsHeader.textContent = language.pl.projectsHeader;
     projectsSubtitle.textContent = language.pl.projectsSubtitle;
     projectsDescription.textContent = language.pl.projectsDescription;
     projectOneDescription.textContent = language.pl.projectOneDescription;
     projectTwoDescription.textContent = language.pl.projectTwoDescription;
     projectThreeDescription.textContent = language.pl.projectThreeDescription;
     projectFourDescription.textContent = language.pl.projectFourDescription;
     projectFiveDescription.textContent = language.pl.projectFiveDescription;
     projectSixDescription.textContent = language.pl.projectSixDescription;
    }
   }
}



