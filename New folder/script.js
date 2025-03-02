const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    grabcursor:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {  // Fixed key name
        0: { slidesPerView: 1 },
        120: { slidesPerView: 2 },
        3330: { slidesPerView: 3 },
    }
});
