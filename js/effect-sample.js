var swiper = new Swiper('.swiper-container', {
  　loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    paginationClickable: true,
    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    }
});
