export class ChangeAsidePic {
    constructor() {
        this.asidePicture = document.querySelector('.content-aside-pic');
        this.aboutMe = document.querySelector('#about-me');
        this.teaching = document.querySelector('#teaching');
        this.partnership = document.querySelector('#partnership');
        this.handleChangeAsidePic;
    }
    handleChangeAsidePic() {
        if (window.pageYOffset >= this.teaching.offsetTop) {
            this.asidePicture.classList.add('teaching');
        } else {
            this.asidePicture.classList.remove('teaching');
        }
        
        if (window.pageYOffset >= this.partnership.offsetTop) {
            this.asidePicture.classList.add('partnership');
        } else {
            this.asidePicture.classList.remove('partnership');
        }
    }
}
