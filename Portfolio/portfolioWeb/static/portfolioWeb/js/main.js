var data ={
    "english":{
    "nav-link-home":"Home",
    "nav-link-about":"About",
    "nav-link-contact":"Contact",
    "nav-link-aprojects":"Projects",
    },
    "polish":{
    "nav-link-home":"Strona Głowna",
    "nav-link-about":"O mnie",
    "nav-link-contact":"Kontakt",
    "nav-link-projects":"Projekty",
    }
}
console.log(window.location);

const languageEl = document.querySelector('.languagesWrap');
const link = document.querySelectorAll('.languagesWrap a');
const navElHome = document.querySelector('.nav-link-home');
const navElAbout = document.querySelector('.nav-link-about');
const navElContact = document.querySelector('.nav-link-contact');
const navElProjects = document.querySelector('.nav-link-projects');

link.forEach( el=> {
    el.addEventListener('click', () => {
    languageEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');
    navElHome.textContent = data[attr]['nav-link-home'];
    navElAbout.textContent = data[attr]['nav-link-about'];
    navElContact.textContent = data[attr]['nav-link-contact'];
    navElProjects.textContent = data[attr]['nav-link-projects'];
    });
});

console.log(languageEl);
console.log(link);

