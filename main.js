// Navbar

const navLinks = document.querySelectorAll("nav a");
const navMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuBtn");


// Mobile menu

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// Smooth navigation

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        navMenu.classList.remove("show");
    });

});


// Join button

const joinBtn = document.getElementById("mainbtn");

joinBtn.addEventListener("click", () => {

    document.getElementById("connect").scrollIntoView({
        behavior: "smooth"
    });

    navMenu.classList.remove("show");
});


// Let's Start button

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.getElementById("program").scrollIntoView({
        behavior: "smooth"
    });

});


// Member slider

const slider = document.getElementById("memberSlider");
const cards = document.querySelectorAll("#memberSlider img");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;


// Visible images

function getVisibleImages() {

    if (window.innerWidth <= 700) {
        return 1;
    }

    if (window.innerWidth <= 1000) {
        return 2;
    }

    return 3;
}


// Show slider

function showSlide() {

    if (cards.length === 0) {
        return;
    }

    const visible = getVisibleImages();

    const maxSlide = Math.max(
        0,
        cards.length - visible
    );

    if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const cardWidth = cards[0].offsetWidth;
    const gap = 20;

    slider.scrollTo({
        left: currentSlide * (cardWidth + gap),
        behavior: "smooth"
    });
}


// Next

nextBtn.addEventListener("click", () => {

    const visible = getVisibleImages();

    const maxSlide = Math.max(
        0,
        cards.length - visible
    );

    if (currentSlide < maxSlide) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }

    showSlide();
});


// Previous

prevBtn.addEventListener("click", () => {

    const visible = getVisibleImages();

    const maxSlide = Math.max(
        0,
        cards.length - visible
    );

    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = maxSlide;
    }

    showSlide();
});


// Fix slider on resize

window.addEventListener("resize", () => {
    showSlide();
});


// Contact form

const submitBtn = document.getElementById("submit");

const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");

const formMessage = document.getElementById("formMessage");


submitBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();


    if (name === "") {

        formMessage.textContent = "Please enter your name.";
        formMessage.style.color = "red";

        nameInput.focus();

        return;
    }


    if (password === "") {

        formMessage.textContent = "Please enter your password.";
        formMessage.style.color = "red";

        passwordInput.focus();

        return;
    }


    if (password.length < 6) {

        formMessage.textContent =
            "Password must be at least 6 characters.";

        formMessage.style.color = "red";

        passwordInput.focus();

        return;
    }


    formMessage.textContent =
        `Welcome to GymHub, ${name}!`;

    formMessage.style.color = "rgb(2, 253, 2)";


    nameInput.value = "";
    passwordInput.value = "";
});


// Enter key

passwordInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        submitBtn.click();
    }

});


// Active navbar

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// Start slider

window.addEventListener("load", () => {
    showSlide();
});