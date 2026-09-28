// SkHabibullah Entertainment
// Main Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Mobile Menu
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Close mobile menu after clicking a link
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navLinks) {
                navLinks.classList.remove("active");
            }
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Contact form
    const contactForm = document.querySelector(".contact-box form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("ধন্যবাদ! আপনার মেসেজটি গ্রহণ করা হয়েছে।");

            contactForm.reset();
        });
    }

});
