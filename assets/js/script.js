const burger = document.querySelector('.burger');
const megamenu = document.querySelector('.megamenu');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    if (megamenu.classList.contains('active')) {
        // sedang terbuka → CLOSE
        megamenu.classList.add('closing');
        megamenu.classList.remove('active');

        setTimeout(() => {
            megamenu.classList.remove('closing');
        }, 450); // sama dengan durasi fade-out kamu
    } else {
        // sedang tertutup → OPEN
        megamenu.classList.add('active');
    }

    burger.classList.toggle('active');
});


// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

console.log("JS LOADED");

