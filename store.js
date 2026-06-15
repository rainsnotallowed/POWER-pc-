const panel = document.getElementById("slidePanel");
const overlay = document.getElementById("overlay");
const panelContent = document.getElementById("panelContent");
const panelClose = document.getElementById("panelClose");

document.querySelectorAll(".item").forEach(card => {
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
    "lightning-cpu": `
        <img src="assets/lightnincpu (1).png" alt="lightning" class="panel-img">
        <h2>Lightning CPU</h2>
        <h3>Ultimate High-End Processing</h3>
        <p>The pinnacle of CPU performance, designed for intensive applications and gaming.</p>
    `,
    "charge-cpu": `
        <img src="assets/chargecpu.png" alt="charge" class="panel-img">
        <h2>Charge CPU</h2>
        <h3>Balanced Mid-Range Power</h3>
        <p>A reliable CPU for multitasking and moderate performance needs.</p>
    `,
    "circuit-cpu": `
        <img src="assets/circutcpu.png" alt="circuit" class="panel-img">
        <h2>Circuit CPU</h2>
        <h3>Affordable Entry-Level Performance</h3>
        <p>Our most budget-friendly CPU option, ideal for basic computing tasks and everyday use.</p>
    `,
    "lightning-gpu": `
        <img src="assets/gpufront.png" alt="lightning-gpu" class="panel-img">
        <h2>Lightning GPU</h2>
        <h3>Top-Tier Graphics Excellence</h3>
        <p>High-end GPU for 4K gaming, rendering, and professional graphics.</p>
    `,
    "charge-gpu": `
        <img src="assets/chargegpu.png" alt="charge-gpu" class="panel-img">
        <h2>Charge GPU</h2>
        <h3>Mid-Range Graphics Power</h3>
        <p>Solid performance for gaming and creative work.</p>
    `,
    "circuit-gpu": `
        <img src="assets/circit .png" alt="circuit-gpu" class="panel-img">
        <h2>Circuit GPU</h2>
        <h3>Entry-Level Graphics</h3>
        <p>Basic graphics card for light gaming and multimedia.</p>
    `,
    "lightning-merch": `
        <img src="assets/red.png" alt="lightning-merch" class="panel-img">
        <h2>Lightning Merch</h2>
        <h3>Premium Red Theme</h3>
        <p>Show your power with our top-tier lightning-themed merchandise.</p>
    `,
    "charge-merch": `
        <img src="assets/green.png" alt="charge-merch" class="panel-img">
        <h2>Charge Merch</h2>
        <h3>Energetic Green Theme</h3>
        <p>Charge up your style with our mid-range green merchandise.</p>
    `,
    "circuit-merch": `
        <img src="assets/blue.png" alt="circuit-merch" class="panel-img">
        <h2>Circuit Merch</h2>
        <h3>Basic Blue Theme</h3>
        <p>Essential circuit-inspired merchandise for everyday wear.</p>
    `,
}

const card = document.querySelectorAll(".base")
const cardgpu = document.querySelectorAll(".base-gpu")
const navdiv = document.querySelectorAll("header")
const pagecard = document.querySelectorAll(".store-base")

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
pagecard.forEach(pagecard => observer.observe(pagecard))