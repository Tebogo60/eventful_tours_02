// N A V I G A T I O N --------------------------------------------

const body = document.querySelector(".body");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

let menuQpened = false;

const openMenu = () => {
  if (menuQpened === false) {
    hamburger.classList.add("ham-close");
    body.classList.add("overflow-hidden");

    menuQpened = true;
  } else {
    hamburger.classList.remove("ham-close");
    body.classList.remove("overflow-hidden");

    menuQpened = false;
  }

  menu.classList.toggle("open-menu");
  menu.classList.toggle("open-menu-bg");
};

hamburger.addEventListener("click", () => {
  openMenu();
});

const menulink = document.querySelectorAll(".menu-links a");

menulink.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    openMenu();
  });
});

const nav = document.querySelector(".nav");
const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled <= 70) {
    nav.classList.remove("nav-fixed");
  }

  if (scrolled > 70) {
    nav.classList.add("nav-fixed");
  }

  if (scrolled <= 200) {
    nav.classList.remove("nav-display");
    backTop.classList.remove("back-top-pop");
  }

  if (scrolled > 200) {
    nav.classList.add("nav-display");
    backTop.classList.add("back-top-pop");
  }
});

// N A V I G A T I O N --------------------------------------------
