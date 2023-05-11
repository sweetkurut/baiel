let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav");

const toggleMenu = () => {
  menu.classList.toggle("is-active");
  hamburger.classList.toggle("is-active");
};

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.classList.contains("is-active");

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});
// swiper slider
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});

// меняет задний фон шапки при скролле
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let logo = document.querySelector(".logo");
  if ((window, scrollY > 850)) {
    header.classList.add("scrolled");
    logo.style.color = "#fff";
  } else {
    header.classList.remove("scrolled");
    logo.style.color = "#fff";
  }
});
