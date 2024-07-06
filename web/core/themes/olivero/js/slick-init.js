// slick-init.js
// Partytown.proxy(() => {
//   document.addEventListener('DOMContentLoaded', function() {
//     // Ensure Slick is loaded before initializing
//     if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
//       jQuery('.view-articles .view-content').slick({
//         slidesToShow: 1.8,
//         slidesToScroll: 1,
//         arrows: true,
//         infinite: false,
//         dots: true
//       });
//     } else {
//       console.error('Slick JS not loaded');
//     }
//   });
// });
  // slick-init.js
  // document.addEventListener('DOMContentLoaded', function() {
  //   if (typeof Partytown === 'undefined') {
  //     console.error('Partytown is not defined');
  //     return;
  //   }

  //   Partytown.proxy(() => {
  //     // Ensure Slick is loaded before initializing
  //     if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
  //       jQuery('.view-articles .view-content').slick({
  //         slidesToShow: 1.8,
  //         slidesToScroll: 1,
  //         arrows: true,
  //         infinite: false,
  //         dots: true
  //       });
  //     } else {
  //       console.error('Slick JS not loaded');
  //     }
  //   });
  // });


  // slick-init.js
// document.addEventListener('DOMContentLoaded', function() {
//   // Ensure Slick is loaded before initializing
//   if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
//     jQuery('.view-articles .view-content').slick({
//       slidesToShow: 1.8,
//       slidesToScroll: 1,
//       arrows: true,
//       infinite: false,
//       dots: true
//     });
//   } else {
//     console.error('Slick JS not loaded');
//   }
// });



// slick-init.js
document.addEventListener('DOMContentLoaded', function() {
  // Check if Partytown is loaded
  if (typeof Partytown === 'undefined') {
    console.error('Partytown is not defined');
    return;
  }

  // Use Partytown to proxy the slick initialization
  Partytown.proxy(() => {
    // Check if Slick JS is loaded
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
      jQuery('.view-articles .view-content').slick({
        slidesToShow: 1.8,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        dots: true
      });
    } else {
      console.error('Slick JS not loaded');
    }
  });
});
