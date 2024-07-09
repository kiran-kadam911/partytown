// (function slickPartytown($, Drupal) {
//   Drupal.behaviors.partytownSlick = {
//     attach(context) {
//       $('.view-articles .view-content').slick({
//         slidesToShow: 1.8,
//         slidesToScroll: 1,
//         arrows: true,
//         infinite: false,
//         dots: true
//       });
//     },
//   };
// })(jQuery, Drupal);

jQuery(document).ready(function($) {
  jQuery('.view-articles .view-content').slick({
    slidesToShow: 1.8,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: true
  });
});
