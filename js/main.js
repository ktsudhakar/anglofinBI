$('document').ready( function () {
  $('.home-slider').slick({
    infinite: true,
    dots: true,
    arrows: false
  });
  $('.filter-block, .close-panel').click (function () {
    $('.slide-out-panel-right').toggleClass('show');
  });
});