// import Splides from './modules/_splides';
import animationObserver from './modules/_animation-observer';
import videoObserver from './modules/_video-observer';
import mobileNav from './modules/_mobile-nav';

window.addEventListener('DOMContentLoaded', () => {
    animationObserver();
    mobileNav();
    videoObserver();
    // Splides();
});