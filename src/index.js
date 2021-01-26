import './styles/style.scss';
import { StickyNavbar } from './app/nav-script';
import { ChangeClassesOnScroll } from './app/scroll-script';
import { ChangeFavicon } from './app/favicon-script';
import { run } from './app/app';

const stickyNavbar = new StickyNavbar();
const scrollClasses = new ChangeClassesOnScroll();
const favicon = new ChangeFavicon();

run(stickyNavbar, scrollClasses, favicon);
