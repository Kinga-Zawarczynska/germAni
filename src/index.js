import './styles/style.scss';
import { StickyNavbar } from './app/nav-script';
import { ChangeAsidePic } from './app/aside-script';
import { ChangeFavicon } from './app/favicon-script';
import { run } from './app/app';

const stickyNavbar = new StickyNavbar();
const asidePic = new ChangeAsidePic();
const favicon = new ChangeFavicon();

run(stickyNavbar, asidePic, favicon);
