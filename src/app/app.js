export const run = (stickyNavabar) => {
    window.onscroll = () => stickyNavabar.handleStickyNavbar();
};
