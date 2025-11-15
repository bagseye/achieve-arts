import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import { Video } from '@splidejs/splide-extension-video';

let $carousels;
let $teamcarousels;
let $newsfeedcarousels;
// let $mediatextcarousels;
// let $videocarousels;

function cacheDOM() {
  $carousels = [...document.querySelectorAll('.splide.js-carousel')];
  $teamcarousels = [...document.querySelectorAll('.splide.js-carousel__team')];
  $newsfeedcarousels = [...document.querySelectorAll('.splide.js-carousel__news-feed')];
  // $mediatextcarousels = [...document.querySelectorAll('.splide.js-carousel__media-text')];
  // $videocarousels = [...document.querySelectorAll('.splide.js-carousel__video')];
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

function bindNewsFeedCarousels($carousel) {
    var splide = new Splide( $carousel, {
      gap: 12,
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

// function bindMediaTextCarousels($mediatextcarousel) {
//     var splide = new Splide( $mediatextcarousel, {
//       perPage: 1,
//       type: 'loop',
//       autoWidth: false,
//       focus: 'center',
//       pagination: false,
//       arrows: true,
//     } );
//     splide.mount();
// }

// function bindVideoCarousels($videocarousel) {
//     var splide = new Splide( $videocarousel, {
//       perPage: 1,
//       type: 'loop',
//       gap: 16,
//       autoWidth: false,
//       focus: 'center',
//       pagination: true,
//       arrows: false,
//       video: {
//         autoplay: true,
//         loop: true,
//         mute: true,
//         disableOverlayUI: true,
//         hideControls: true
//       },
//     } );
//     splide.mount({Video});
// }

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

  if($newsfeedcarousels.length) {
    $newsfeedcarousels.forEach(newsfeedcarousel => {
      bindNewsFeedCarousels(newsfeedcarousel);
    });
  }

  // if($mediatextcarousels.length) {
  //   $mediatextcarousels.forEach(mediatextcarousel => {
  //     bindMediaTextCarousels(mediatextcarousel);
  //   });
  // }

  // if($videocarousels.length) {
  //   $videocarousels.forEach(videocarousel => {
  //     bindVideoCarousels(videocarousel);
  //   });
  // }
}