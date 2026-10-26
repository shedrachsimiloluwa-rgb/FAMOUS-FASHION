/* =================================
   FAMOUS FASHION HOUSE
   Website Interactions
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    // MOBILE NAVIGATION

    function closeMenu() {
        navigation.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

        document.body.classList.remove("menu-open");
    }

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        document.body.classList.toggle("menu-open", isOpen);

    });

    // CLOSE MENU AFTER CLICKING A NAVIGATION LINK

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });

    // CLOSE MENU WITH ESCAPE KEY

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    // REVEAL SECTIONS ON SCROLL

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        currentObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        // FALLBACK FOR OLDER BROWSERS

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }

    // AUTOMATIC COPYRIGHT YEAR

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // CLOSE MENU IF THE SCREEN BECOMES DESKTOP SIZE

    window.addEventListener("resize", () => {

        if (window.innerWidth > 760) {
            closeMenu();
        }

    });

});