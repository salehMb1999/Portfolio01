const $ = document;
let sections = $.querySelectorAll("section");
let navLinks = $.querySelectorAll("header nav a");
let header = $.querySelector("header");
let menuIcon = $.querySelector("#menu-icon");
let navBar = $.querySelector(".navBar");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        $.querySelector("header nav a[href*=" + id + " ]").classList.add(
          "active"
        );
      });
    }
  });
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
});

header.classList.toggle("sticky", window.scrollY > 100);

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Teacher", "Athlete"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
