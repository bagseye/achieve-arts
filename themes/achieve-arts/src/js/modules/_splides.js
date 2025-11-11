import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

let $carousels;

function cacheDOM() {
  $carousels = [...document.querySelectorAll('.splide.js-carousel')];
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

export default function init() {
  cacheDOM();

  if($carousels.length) {
    $carousels.forEach(carousel => {
      bindCarousels(carousel);
    });
  }
}