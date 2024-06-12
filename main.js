$(document).ready(function () {
  new Swiper(".best-seller", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      768: {
        centeredSlides: false
      }
    }
  });
  new Swiper(".testimonials", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-testimonials-button-next",
      prevEl: ".swiper-testimonials-button-prev"
    },
    breakpoints: {
      768: {
        centeredSlides: false
      }
    }
  });
  new Swiper(".slide-shop", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true
  });

  $(".my-rating").starRating({
    initialRating: 4,
    strokeColor: "#894A00",
    strokeWidth: 10,
    starSize: 18
  });
});
