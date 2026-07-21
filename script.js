// ==========================
// CHAOS BANANA V2
// ==========================

// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});

// Floating logo animation
const logo = document.querySelector(".logo");

if (logo) {
    let angle = 0;

    setInterval(() => {
        angle += 0.05;
        logo.style.transform = `translateY(${Math.sin(angle) * 6}px) rotate(${Math.sin(angle) * 2}deg)`;
    }, 20);
}

// Button click effect
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.96)";
        setTimeout(() => {
            button.style.transform = "";
        }, 120);
    });
});

console.log("🍌 Chaos Banana Loaded Successfully!");
