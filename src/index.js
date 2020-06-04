import './styles/style.scss';
import { StickyNavbar } from './app/nav-script';
import { run } from './app/app';

const stickyNavbar = new StickyNavbar();

run(stickyNavbar);
