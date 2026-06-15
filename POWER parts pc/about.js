const navButtons = document.querySelectorAll(".nav-buttons");

navButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.transition = "transform 0.2s ease";
        button.style.transform = "scale(1.2)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

const card = document.querySelectorAll(".base")
const navdiv = document.querySelectorAll("header")
const aboutwrap = document.querySelectorAll("about-us-div")

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

card.forEach(card => observer.observe(card));
aboutwrap.forEach(wrap => observer.observe(aboutwrap))
navdiv.forEach(navdiv => observer.observe(navdiv))
