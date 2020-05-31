window.onscroll = () => myFunction();

const navbar = document.querySelector('#nav');
const content = document.querySelector('.content');
const sticky = navbar.offsetTop;
console.log(sticky);

const myFunction = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
        content.style.paddingTop = `${nav.offsetHeight}px`;
    } else {
        navbar.classList.remove('sticky');
        content.style.paddingTop = '0px';
    }
};
