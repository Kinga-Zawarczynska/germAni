export class ChangeFavicon {
    constructor() {
        this.handleDarkMode;
    }

    handleDarkMode() {
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
}
