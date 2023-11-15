const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 25,
  breakpoints: {
    990:{
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 25,
    }
      
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
      delay: 5000,
    },
});