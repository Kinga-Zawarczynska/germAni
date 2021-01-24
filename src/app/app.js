export const run = (stickyNavabar, scrollClasses, favicon, dropdown) => {
    window.onscroll = () => {
        stickyNavabar.handleStickyNavbar(), scrollClasses.handleChangeClasses();
    };
    window.onload = () => {
        dropdown.handleDropdown();
    };
    window.addEventListener('DOMContentLoaded', favicon.handleDarkMode());
};
