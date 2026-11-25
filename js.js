// MENU MOBILE

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// FERMER LE MENU APRES UN CLIC

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// ANNEE AUTOMATIQUE DANS LE FOOTER

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Master The Business. Tous droits réservés.`;
