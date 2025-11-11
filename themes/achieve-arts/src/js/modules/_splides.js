import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

let $carousels;
let $teamcarousels;

function cacheDOM() {
  $carousels = [...document.querySelectorAll('.splide.js-carousel')];
  $teamcarousels = [...document.querySelectorAll('.splide.js-carousel__team')];
}

function bindCarousels($carousel) {
    var splide = new Splide( $carousel, {
      gap: 16,
      type: 'loop',
      autoWidth: true,
      focus: 'center',
      pagination: false,
      arrows: false,
      breakpoints: {
        760: {
          gap: 12
        }
      },
      autoScroll: {
        speed: 0.75
      }
    } );
    splide.mount({AutoScroll});
}

function bindTeamCarousels($teamcarousel) {
    var splide = new Splide( $teamcarousel, {
      gap: 16,
      perPage: 3,
      type: 'loop',
      autoWidth: false,
      focus: 'center',
      pagination: false,
      arrows: true,
      breakpoints: {
        760: {
          gap: 12
        }
      },
    } );
    splide.mount();
}

export default function init() {
  cacheDOM();

  if($carousels.length) {
    $carousels.forEach(carousel => {
      bindCarousels(carousel);
    });
  }

  if($teamcarousels.length) {
    $teamcarousels.forEach(teamcarousel => {
      bindTeamCarousels(teamcarousel);
    });
  }
}