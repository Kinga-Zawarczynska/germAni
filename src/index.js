import './styles/style.scss';
import { StickyNavbar } from './app/nav-script';
import { ChangeAsidePic } from './app/aside-script';
import { run } from './app/app';

const stickyNavbar = new StickyNavbar();
const asidePic = new ChangeAsidePic();

run(stickyNavbar, asidePic);
