var elem = document.querySelector('.p-testimonials__masonry');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.p-testimonials__masonry--item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.p-testimonials__masonry', {
  // options
});