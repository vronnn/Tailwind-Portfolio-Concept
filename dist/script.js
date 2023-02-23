// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger animation
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const ulNav = navMenu.querySelector("ul");
const liNav = navMenu.querySelectorAll("li");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("navbar-active");
  ulNav.classList.toggle("ul-active");
  liNav.forEach((e) => {
    e.classList.toggle("li-active");
  });
});

// sidebar
window.addEventListener("resize", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const ulNav = navMenu.querySelector("ul");
  const liNav = navMenu.querySelectorAll("li");
  if (
    window.innerWidth >= 1024 &&
    hamburger.classList.contains("hamburger-active")
  ) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
    navMenu.classList.remove("navbar-active");
    ulNav.classList.remove("ul-active");
    liNav.forEach((e) => {
      e.classList.remove("li-active");
    });
  }
});
