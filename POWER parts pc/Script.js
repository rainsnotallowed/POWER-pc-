 
 
 
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

const gpuImages = document.querySelectorAll(".gpu-image");

gpuImages.forEach((image) => {
    image.addEventListener("mouseenter", () => {
        image.style.transition = "transform 0.2s ease";
        image.style.transform = "scale(1.2)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    });
});


const card = document.querySelectorAll(".base")
const cardgpu = document.querySelectorAll(".base-gpu")
const navdiv = document.querySelectorAll("header")

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

card.forEach(card => observer.observe(card));
cardgpu.forEach(cardgpu => observer.observe(cardgpu))
navdiv.forEach(navdiv => observer.observe(navdiv))

const panel = document.getElementById("slidePanel");
const overlay = document.getElementById("overlay");
const panelContent = document.getElementById("panelContent");
const panelClose = document.getElementById("panelClose");


// employees
document.querySelectorAll(".meet-staff").forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.id;
        panelContent.innerHTML = profileData[id];
        panel.classList.add("active");
        overlay.classList.add("active");
    });
});

panelClose.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

function closePanel() {
    panel.classList.remove("active");
    overlay.classList.remove("active");
}

const profileData = {
    josh: `
        <img src="assets/me.jpg" alt="Josh Francis" class="panel-img">
        <h2>Josh Francis</h2>
        <h3>Web developer and Form manager</h3>
        <p>a passionate web developer and a strong member of the POWER pc team </p>
    `,
    dgpt: `
        <img src="assets/denin2.png" alt="Denin Heir" class="panel-img">
        <h2>Denin Johnson</h2>
        <h3>Web developer and Form manager</h3>
        <p> a strong and independanbt worker that also works grate as a team</p>
    `,
    fin: `
        <img src="assets/fin3.png" alt="Finley Patterson" class="panel-img">
        <h2>Finley Smith</h2>
        <h3>Social Media Manager</h3>
        <p>a very capable coder and a grate softwear developer </p>
    `,
}