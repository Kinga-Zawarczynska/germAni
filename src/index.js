import './styles/style.scss';
import { StickyNavbar } from './app/nav-script';
import { ChangeClassesOnScroll } from './app/scroll-script';
import { ChangeFavicon } from './app/favicon-script';
import { run } from './app/app';

const stickyNavbar = new StickyNavbar();
const scrollClasses = new ChangeClassesOnScroll();
const favicon = new ChangeFavicon();

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    speed: 600,
    spaceBetween: 300,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

run(stickyNavbar, scrollClasses, favicon, mySwiper);
