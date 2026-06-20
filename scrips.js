// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (!topBtn) return;
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================
// ANIMATED COUNTERS
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// ==========================
// SCROLL ANIMATIONS
// ==========================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ==========================
// TESTIMONIAL SLIDER
// ==========================

const testimonials = document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function rotateTestimonials() {
    testimonials.forEach(testimonial => {
        testimonial.style.display = "none";
    });

    testimonials[currentTestimonial].style.display = "block";

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
}

if (testimonials.length > 0) {
    rotateTestimonials();
    setInterval(rotateTestimonials, 5000);
}

// ==========================
// STICKY HEADER EFFECT
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.background = "rgba(17,17,17,.95)";
    } else {
        header.style.background = "#111";
    }
});
