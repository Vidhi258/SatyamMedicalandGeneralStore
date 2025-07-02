document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");

  function initMobileMenu() {
    if (!menuOpenButton || !menuCloseButton) return;

    // Open mobile menu
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.add("show-mobile-menu");
    });

    // Close mobile menu
    menuCloseButton.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });

    // Close menu when any navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
      });
    });
  }

  function initSwiper() {
    new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      spaceBetween: 25,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  }

  initMobileMenu();
  initSwiper();

});
