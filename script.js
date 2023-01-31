const body = document.body;

const menuLinks = document.querySelector(".menu-links");

const hamburger = document.querySelector(".hamburger");
const hamTop = document.querySelector(".ham-top");
const hamMiddle = document.querySelector(".ham-middle");
const hamBotton = document.querySelector(".ham-bottom");

const navbar = document.querySelector(".navbar");

let menuOpened = false;

const openMenu = () => {
  if (menuOpened === false) {
    body.classList.add("overflow-hidden");

    menuLinks.classList.add("open-menu");
    hamTop.classList.add("ham-top-active");
    hamMiddle.classList.add("ham-middle-active");
    hamBotton.classList.add("ham-bottom-active");

    signupForm.classList.remove("pop-signup");
    loginForm.classList.remove("pop-booking");

    menuOpened = true;
  } else {
    body.classList.remove("overflow-hidden");

    menuLinks.classList.remove("open-menu");
    hamTop.classList.remove("ham-top-active");
    hamMiddle.classList.remove("ham-middle-active");
    hamBotton.classList.remove("ham-bottom-active");

    menuOpened = false;
  }
};

const closePop = () => {
  signupForm.classList.remove("pop-signup");
  loginForm.classList.remove("pop-booking");
};

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled > 200) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

// TOURS ----------------------------------------------------- //

const availableTours = document.querySelector(".available-tours");
const gridTour = document.querySelector(".tours-grid");
const list = document.querySelector(".list");

let availableToursActive = false;
let upcomingToursActive = false;

availableTours.addEventListener("click", () => {
  list.classList.toggle("at-active");
  list2.classList.remove("ut-active");

  availableTours.classList.toggle("available-tours-active");
});

const loginForm = document.querySelector(".booking-form");
const signupForm = document.querySelector(".signup-form");

const openBookForm = () => {
  if (menuOpened === false) {
    signupForm.classList.remove("pop-signup");
    loginForm.classList.toggle("pop-booking");
  } else {
    openMenu();
    signupForm.classList.remove("pop-signup");
    loginForm.classList.toggle("pop-booking");
  }

  moveLabelBooking();
};

const openSignInForm = () => {
  if (menuOpened === false) {
    loginForm.classList.remove("pop-booking");
    signupForm.classList.toggle("pop-signup");
  } else {
    openMenu();
    loginForm.classList.remove("pop-booking");
    signupForm.classList.toggle("pop-signup");
  }

  moveLabelSignIn();
};

// UPCOMING TOURS --------------------------------------------- //

const upcomingTours = document.querySelector(".upcoming-tours");
const list2 = document.querySelector(".upcoming-tours .list");

upcomingTours.addEventListener("click", () => {
  if (upcomingToursActive === true) {
    list.classList.remove("at-active");
    list2.classList.toggle("ut-active");
  } else {
    list.classList.remove("at-active");
    list2.classList.toggle("ut-active");

    upcomingTours = true;
  }
});

// FORM ------------------------------------------------------- //

const input = document.querySelector(".booking-form .form");
const input2 = document.querySelector(".signup-form .form");

const moveLabelBooking = () => {
  input.classList.add("input-active");
};

const moveLabelSignIn = () => {
  input2.classList.add("input-active");
};

// FORM VALIDATION ------------------------------------------- //
