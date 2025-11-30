import Splides from './modules/_splides';
import videoObserver from './modules/_video-observer';
import mobileNav from './modules/_mobile-nav';

window.addEventListener('DOMContentLoaded', () => {
    mobileNav();
    videoObserver();
    Splides();
});