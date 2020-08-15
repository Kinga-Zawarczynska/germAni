export const run = (stickyNavabar, scrollClasses, favicon, mySwiper) => {
    window.onscroll = () => {
        stickyNavabar.handleStickyNavbar(), scrollClasses.handleChangeClasses();
    };
    window.addEventListener('DOMContentLoaded', favicon.handleDarkMode());

    let slideInterval = setInterval(slideOpinion, 4000);

    function slideOpinion() {
        // takes duration of transition as an argument
        mySwiper.slideNext(1000);
    }
};
