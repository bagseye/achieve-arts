// import { closeSearchPane } from './searchPane';

let $mobileNav;
let $subNavs;
let $burger;
let $closeBtns;
let $DEBUG = false;
const ANIMATION_DURATION = 300;
const SUB_MENU_TRANSITION = `height ${ANIMATION_DURATION}ms ease-in-out`;
let navigationTimeout;

function cacheDOM() {
    $mobileNav = document.querySelector('.js-mobile-nav');
    $burger = document.querySelector('.js-mobile-nav__burger');
    $subNavs = [...$mobileNav.querySelectorAll('.js-mobile-nav__toggle')];
    $closeBtns = [...$mobileNav.querySelectorAll('.js-mobile-nav__close')];
}

function openMainNav() {
    document.body.classList.add('mobile-nav-primer');
    clearTimeout(navigationTimeout);
    navigationTimeout = setTimeout(() => {
        document.body.classList.add('mobile-nav-open');
        $DEBUG = false;
    }, ANIMATION_DURATION);
}

export function closeMainNav() {
    document.body.classList.remove('mobile-nav-open');
    setTimeout(() => {
        document.body.classList.remove('mobile-nav-primer');
        $DEBUG = false;
    }, ANIMATION_DURATION);
}

function toggleMobileNav() {
    if ($DEBUG) return;

    $DEBUG = true;

    if (document.body.classList.contains('search-pane-open')) {
        // closeSearchPane();
        openMainNav();
    } else {
        if (document.body.classList.contains('mobile-nav-open')) {
            closeMainNav();
        } else {
            openMainNav();
        }
    }

}

function calculateTotalHeight(element) {
    let totalHeight = element.scrollHeight;

    return totalHeight;
}

function toggleSubNav(event) {
    if ($DEBUG) return;

    const $trigger = event;
    const submenu = $trigger.querySelector('.sub-menu');

    if (!submenu) return;

    submenu.style.transition = SUB_MENU_TRANSITION;

    if ($trigger.classList.contains('sub-menu__open')) {
        submenu.style.height = '0';

        submenu.addEventListener('transitionend', () => {
            submenu.style.transition = '';
            submenu.style.height = '';
            $trigger.classList.remove('sub-menu__open');
        }, { once: true });

    } else {
        const height = calculateTotalHeight(submenu) + 'px';  // Update this line
        submenu.style.height = height;
        $trigger.classList.add('sub-menu__open');

        submenu.addEventListener('transitionend', () => {
            submenu.style.transition = '';
        }, { once: true });
    }
    $DEBUG = false;
}

function bindEvents() {
    if ($burger) {
        $burger.addEventListener('click', toggleMobileNav);
    } else {
        console.warn("Expected .js-mobile-nav__burger element is missing.");
    }

    if ($subNavs.length) {
        $subNavs.forEach(subNav => {
            subNav.closest('.menu-item').addEventListener('click', function (event) {
                if (event.target.closest('.menu-item').classList.contains('menu-item-has-children')) {
                    event.stopPropagation(); 
                    event.preventDefault();
                    toggleSubNav(event.currentTarget);
                } else {
                    return;
                }
            });   

            // Uncomment the following lines if you want to handle clicks on the subNav Icon itself
            // subNav.addEventListener('click', function (event) {
            //     event.stopPropagation();

            //     if (event.target.closest('.menu-item').classList.contains('menu-item-has-children')) {
            //         const clickParent = event.target.closest('.menu-item');
            //         event.preventDefault();
            //         toggleSubNav(clickParent);
            //     } else {
            //         return;
            //     }
            // });
        });
    }

    if ($closeBtns.length) {
        $closeBtns.forEach(closeBtn => {
            closeBtn.addEventListener('click', function () {
                toggleMobileNav();
            });
        });

    }
}

export default function init() {
    cacheDOM();

    if ($mobileNav) {
        bindEvents();
    } else {
        console.warn("Expected .js-mobile-nav element is missing.");
    }
}