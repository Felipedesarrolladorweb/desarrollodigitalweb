const nav = document.querySelector(".nav-links1");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const button = nav.querySelector(".buttonburger");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((links) => {
  links.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
    button.classList.toggle("toggle");
  });
});

// ScrollReveal().reveal("header", {
//   delay: 200,
//   distance: "20px",
//   origin: "top",
//   duration: "1000",
//   opacity: "0",
//   easing: "ease",
//   viewFactor: 0.2,
//   reset: true,
//   cleanup: true,
// });
ScrollReveal().reveal(".main-title", {
  delay: 500,
  distance: "20px",
  origin: "right",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 90,
  },
});
ScrollReveal().reveal(".main-img", {
  delay: 1000,
  origin: "bottom",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0,
  reset: false,
  cleanup: false,
});
ScrollReveal().reveal(".loquehagotitle", {
  delay: 200,
  distance: "20px",
  origin: "right",
  duration: "1000",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".card1", {
  delay: 200,
  distance: "20px",
  origin: "right",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
});
ScrollReveal().reveal(".negocioweb", {
  delay: 500,
  distance: "20px",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".calidadtitle", {
  delay: 200,
  distance: "20px",
  origin: "left",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".calidadimg", {
  delay: 500,
  distance: "20px",
  origin: "bottom",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".proyectos h2, .proyectos p", {
  delay: 200,
  distance: "20px",
  origin: "left",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".proyectoscards", {
  delay: 500,
  distance: "20px",
  origin: "left",
  duration: "1300",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".optimization", {
  delay: 500,
  distance: "20px",
  origin: "left",
  duration: "1300",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".cmstitle", {
  delay: 200,
  distance: "20px",
  origin: "left",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".CMS-img", {
  delay: 700,
  distance: "20px",
  origin: "bottom",
  duration: "1300",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".card-1", {
  delay: 200,
  distance: "20px",
  origin: "right",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
});
ScrollReveal().reveal(".skills", {
  delay: 700,
  distance: "20px",
  origin: "right",
  duration: "1300",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 40,
  },
});
ScrollReveal().reveal(".precios p.preciosp, .precios h2", {
  delay: 200,
  distance: "20px",
  origin: "right",
  duration: "1000",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
});
ScrollReveal().reveal(".precios-cards div", {
  delay: 200,
  distance: "20px",
  origin: "left",
  duration: "1300",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
  viewOffset: {
    top: 10,
  },
});
ScrollReveal().reveal(".footer1 h2, .footer2 .direccion, .footer2 .ctafooter", {
  delay: 500,
  distance: "20px",
  origin: "left",
  duration: "1300",
  opacity: "0",
  easing: "ease",
  viewFactor: 0.2,
  reset: false,
  cleanup: false,
});
