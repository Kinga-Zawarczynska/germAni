export const run = (stickyNavabar, asidePic, favicon) => {
    window.onscroll = () => {
        stickyNavabar.handleStickyNavbar(), asidePic.handleChangeAsidePic();
    };
    window.addEventListener('DOMContentLoaded', favicon.handleDarkMode());
};
