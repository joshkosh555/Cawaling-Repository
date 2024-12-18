// typing text effect
const text = "Hello! I’m Josh Ezekiel D. Cawaling, a 2nd year Computer Science college student from Lyceum of the Philippines University.";
let i = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 70);
    }
}
window.onload = type;

// Sccroll to top 
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Animated sections 
const sections = document.querySelectorAll(".section");

const revealSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSection);