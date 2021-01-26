export const run = (stickyNavabar, scrollClasses, favicon) => {
    window.onscroll = () => {
        stickyNavabar.handleStickyNavbar(), scrollClasses.handleChangeClasses();
    };
    window.addEventListener('DOMContentLoaded', favicon.handleDarkMode());
};
