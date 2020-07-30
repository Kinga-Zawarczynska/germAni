export const run = (stickyNavabar, asidePic) => {
    window.onscroll = () => {
        stickyNavabar.handleStickyNavbar(), asidePic.handleChangeAsidePic();
    };
    window.addEventListener('DOMContentLoaded', setFavicon);

    function setFavicon() {
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            const favicon = document.querySelector('[data-dark]');

            if (!favicon) {
                return;
            }

            if (favicon.dataset.dark) {
                favicon.href = favicon.dataset.dark;
            }
        }
    }
};
