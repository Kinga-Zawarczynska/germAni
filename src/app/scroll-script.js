export class ChangeClassesOnScroll {
    constructor() {
        this.asidePicture = document.querySelector('.content-aside-pic');

        this.aboutMe = document.querySelector('#about-me');
        this.teaching = document.querySelector('#teaching');
        this.partnership = document.querySelector('#partnership');
        this.contact = document.querySelector('#contact');
        this.files = document.querySelector('#files');

        this.nav = document.querySelector('#nav');
        this.navAbout = document.querySelector('.nav-about');
        this.navTeaching = document.querySelector('.nav-teaching');
        this.navPartnership = document.querySelector('.nav-partnership');
        this.navContact = document.querySelector('.nav-contact');
        this.navFiles = document.querySelector('.nav-files');

        this.handleChangeClasses;
    }

    handleChangeClasses() {
        let navHeight = this.nav.offsetHeight + 50;

        if (window.pageYOffset >= this.aboutMe.offsetTop - navHeight) {
            this.navAbout.classList.add('nav-item-active');
        } else {
            this.navAbout.classList.remove('nav-item-active');
        }

        if (window.pageYOffset >= this.teaching.offsetTop - navHeight) {
            this.asidePicture.classList.add('teaching');
            this.navTeaching.classList.add('nav-item-active');
            this.navAbout.classList.remove('nav-item-active');
        } else {
            this.asidePicture.classList.remove('teaching');
            this.navTeaching.classList.remove('nav-item-active');
        }

        if (window.pageYOffset >= this.files.offsetTop - navHeight) {
            this.navFiles.classList.add('nav-item-active');
            this.navTeaching.classList.remove('nav-item-active');
        } else {
            this.navFiles.classList.remove('nav-item-active');
        }

        if (window.pageYOffset >= this.partnership.offsetTop - navHeight) {
            this.asidePicture.classList.add('partnership');
            this.navPartnership.classList.add('nav-item-active');
            this.navFiles.classList.remove('nav-item-active');
        } else {
            this.asidePicture.classList.remove('partnership');
            this.navPartnership.classList.remove('nav-item-active');
        }

        if (window.pageYOffset >= this.contact.offsetTop - navHeight) {
            this.asidePicture.classList.add('contact');
            this.navContact.classList.add('nav-item-active');
            this.navPartnership.classList.remove('nav-item-active');
        } else {
            this.asidePicture.classList.remove('contact');
            this.navContact.classList.remove('nav-item-active');
        }
    }
}
