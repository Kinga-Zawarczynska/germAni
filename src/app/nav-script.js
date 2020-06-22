export class StickyNavbar {
    constructor() {
        this.navbar = document.querySelector('#nav');
        this.content = document.querySelector('.content');
        this.sticky = this.navbar.offsetTop;

        this.handleStickyNavbar;
    }

    handleStickyNavbar() {
        if (window.pageYOffset >= this.sticky) {
            this.navbar.classList.add('sticky');
            this.content.style.paddingTop = `${nav.offsetHeight}px`;
        } else {
            this.navbar.classList.remove('sticky');
            this.content.style.paddingTop = '0px';
        }
    }
}
