export const run = (stickyNavabar, asidePic) => {
    window.onscroll = () => {
        stickyNavabar.handleStickyNavbar(), asidePic.handleChangeAsidePic();
    };
};
