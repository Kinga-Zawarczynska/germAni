export class Dropdown {
    constructor() {
        this.trigger = document.querySelector('.nav-teaching');
        this.dropdown = document.querySelector('.dropdown');

        this.handleDropdown;
    }

    handleDropdown() {
        this.trigger.addEventListener('mouseenter', handleEnter);
        this.trigger.addEventListener('mouseleave', handleLeave);

        function handleEnter() {
            console.log('enter');
        }

        function handleLeave() {
            console.log('leave');
        }
    }
}
