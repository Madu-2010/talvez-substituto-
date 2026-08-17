/* =========================================
   ELEMENTOS
========================================= */

const body = document.body;

const darkModeBtn =
    document.getElementById("darkModeBtn");

const contrastBtn =
    document.getElementById("contrastBtn");

const spacingBtn =
    document.getElementById("spacingBtn");

const increaseFont =
    document.getElementById("increaseFont");

const decreaseFont =
    document.getElementById("decreaseFont");

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");

const topButton =
    document.getElementById("topButton");


/* =========================================
   TAMANHO DA FONTE
========================================= */

let fontSize =
    parseFloat(
        localStorage.getItem("fontSize")
    ) || 1;


function updateFontSize() {

    fontSize =
        Math.max(
            0.85,
            Math.min(
                1.35,
                fontSize
            )
        );

    document.documentElement.style
        .setProperty(
            "--font-size",
            fontSize + "rem"
        );

    localStorage.setItem(
        "fontSize",
        fontSize
    );
}


if (increaseFont) {

    increaseFont.addEventListener(
        "click",
        function () {

            fontSize += 0.1;

            updateFontSize();

        }
    );

}


if (decreaseFont) {

    decreaseFont.addEventListener(
        "click",
        function () {

            fontSize -= 0.1;

            updateFontSize();

        }
    );

}


updateFontSize();


/* =========================================
   MODO ESCURO
========================================= */

function updateDarkModeButton() {

    if (!darkModeBtn) return;

    if (body.classList.contains("dark-mode")) {

        darkModeBtn.textContent =
            "☀️ Modo claro";

    } else {

        darkModeBtn.textContent =
            "🌙 Modo escuro";

    }

}


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        function () {

            body.classList.toggle(
                "dark-mode"
            );

            const enabled =
                body.classList.contains(
                    "dark-mode"
                );

            localStorage.setItem(
                "darkMode",
                enabled
            );

            updateDarkModeButton();

        }
    );

}


const savedDarkMode =
    localStorage.getItem("darkMode");


if (savedDarkMode === "true") {

    body.classList.add(
        "dark-mode"
    );

}


updateDarkModeButton();


/* =========================================
   ALTO CONTRASTE
========================================= */

if (contrastBtn) {

    contrastBtn.addEventListener(
        "click",
        function () {

            body.classList.toggle(
                "high-contrast"
            );

            localStorage.setItem(
                "contrast",
                body.classList.contains(
                    "high-contrast"
                )
            );

        }
    );

}


if (
    localStorage.getItem(
        "contrast"
    ) === "true"
) {

    body.classList.add(
        "high-contrast"
    );

}


/* =========================================
   ESPAÇAMENTO
========================================= */

if (spacingBtn) {

    spacingBtn.addEventListener(
        "click",
        function () {

            body.classList.toggle(
                "large-spacing"
            );

            localStorage.setItem(
                "spacing",
                body.classList.contains(
                    "large-spacing"
                )
            );

        }
    );

}


if (
    localStorage.getItem(
        "spacing"
    ) === "true"
) {

    body.classList.add(
        "large-spacing"
    );

}


/* =========================================
   MENU MOBILE
========================================= */

if (menuButton && mainNav) {

    menuButton.addEventListener(
        "click",
        function () {

            mainNav.classList.toggle(
                "active"
            );

        }
    );


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}


/* =========================================
   FAQ
========================================= */

const faqQuestions =
    document.querySelectorAll(
        ".faq-question"
    );


faqQuestions.forEach(
    function (question) {

        question.addEventListener(
            "click",
            function () {

                const item =
                    question.parentElement;

                item.classList.toggle(
                    "active"
                );

            }
        );

    }
);


/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

window.addEventListener(
    "scroll",
    function () {

        if (!topButton) return;

        if (window.scrollY > 400) {

            topButton.classList.add(
                "visible"
            );

        } else {

            topButton.classList.remove(
                "visible"
            );

        }

    }
);


if (topButton) {

    topButton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================
   FORMULÁRIO
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Mensagem enviada! Obrigado por entrar em contato."
            );

            contactForm.reset();

        }
    );

}
