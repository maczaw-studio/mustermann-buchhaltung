```javascript
/* =========================================================
   MENU MOBILNE
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");


if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNavigation.classList.toggle("open");

        // Aktualizacja informacji dla czytników ekranu.
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        // Zmiana opisu przycisku.
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Menü schließen" : "Menü öffnen"
        );

    });


    // Po kliknięciu linku menu zamyka się na telefonie.
    mainNavigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNavigation.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Menü öffnen"
            );

        });

    });


    // Klawisz Escape zamyka otwarte menu.
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            mainNavigation.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Menü öffnen"
            );
        }

    });

}


/* =========================================================
   KONTAKTFORMULARZ
   ========================================================= */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");


if (contactForm && formStatus) {

    contactForm.addEventListener("submit", function (event) {

        /*
         * FORMULARZ DO PÓŹNIEJSZEGO PODŁĄCZENIA:
         *
         * Formularz nie jest jeszcze podłączony do serwera.
         *
         * Nie udajemy, że wiadomość została wysłana.
         *
         * Po wyborze hostingu i sposobu wysyłania formularza
         * trzeba będzie zastąpić poniższy mechanizm prawdziwą
         * obsługą wysyłki.
         *
         * Wtedy należy również sprawdzić i odpowiednio zaktualizować
         * Datenschutzerklärung.
         */

        event.preventDefault();

        formStatus.textContent =
            "Das Kontaktformular ist noch nicht mit dem E-Mail-Versand verbunden. Bitte nutzen Sie bis zur Aktivierung direkt unsere E-Mail-Adresse.";

    });

}
```
