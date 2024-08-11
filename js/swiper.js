// Initialize Carousel after load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Carousel
  const swiper = new Swiper('.swiper', {
    speed: 400,
    direction: 'horizontal',
    spaceBetween: 15,
    slidesPerView: 1,
    autoplay: {
      delay: 500,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // when user hovers over the carousel, stop the autoplay
  document.querySelector('.swiper').addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
  });

  // when user leaves the carousel, start the autoplay
  document.querySelector('.swiper').addEventListener('mouseleave', () => {
    swiper.autoplay.start();
  });

  // for mobile, stop the autoplay when the user swipes
  document.querySelector('.swiper').addEventListener('touchstart', () => {
    swiper.autoplay.stop();
  });

  // for mobile, start the autoplay when the user stops swiping after 1000ms
  document.querySelector('.swiper').addEventListener('touchend', () => {
    setTimeout(() => {
      swiper.autoplay.start();
    }, 3000);
  });
});
