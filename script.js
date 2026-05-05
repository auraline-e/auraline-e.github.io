// select elements
const elements = document.querySelectorAll(".card, h1, h2");

// initial state
elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});

// scroll reveal
window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

// simple parallax effect
window.addEventListener("scroll", () => {
    document.body.style.backgroundPositionY = window.scrollY * 0.2 + "px";
});
