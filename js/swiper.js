// Initialize Carousel after load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Carousel
  const swiper = new Swiper('.swiper', {
    // mouse control scroll
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true,
    },
    // keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    loop: true,
    speed: 1500,
    direction: 'horizontal',
    spaceBetween: 15,
    slidesPerView: 1,
    autoplay: {
      delay: 200,
    },
    breakpoints: {
      800: {
        slidesPerView: 5,
        spaceBetween: 50,
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
