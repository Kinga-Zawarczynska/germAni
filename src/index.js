import './styles/style.scss';
import { StickyNavbar } from './app/nav-script';
import { ChangeClassesOnScroll } from './app/scroll-script';
import { ChangeFavicon } from './app/favicon-script';
import { Dropdown } from './app/dropdown-script';
import { run } from './app/app';

const stickyNavbar = new StickyNavbar();
const scrollClasses = new ChangeClassesOnScroll();
const favicon = new ChangeFavicon();
const dropdown = new Dropdown();

run(stickyNavbar, scrollClasses, favicon, dropdown);
