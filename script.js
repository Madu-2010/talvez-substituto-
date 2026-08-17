/* =========================
   CONFIGURAÇÕES
========================= */

:root {
    --primary: #5b3cc4;
    --primary-dark: #402798;
    --secondary: #7357e8;

    --text: #20202a;
    --muted: #626270;

    --background: #ffffff;
    --light: #f5f4fa;

    --card: #ffffff;
    --border: #e5e2ee;

    --shadow: 0 15px 40px rgba(55, 35, 110, 0.10);

    --font-size: 16px;
}


/* RESET */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Atkinson Hyperlegible", Arial, sans-serif;
    font-size: var(--font-size);
    color: var(--text);
    background: var(--background);
    line-height: 1.7;
    transition: 0.3s;
}

img {
    max-width: 100%;
}

button,
input,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

.container {
    width: min(1120px, 90%);
    margin: auto;
}


/* =========================
   ACESSIBILIDADE
========================= */

.accessibility-bar {
    background: #191523;
    color: white;
    padding: 8px 0;
}

.accessibility-content {
    width: min(1120px, 90%);
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    flex-wrap: wrap;
}

.accessibility-content strong {
    margin-right: 5px;
}

.accessibility-content button {
    border: 1px solid #766b89;
    background: transparent;
    color: white;

    padding: 6px 10px;
    border-radius: 6px;

    font-size: 14px;
}

.accessibility-content button:hover {
    background: white;
    color: #191523;
}


/* =========================
   HEADER
========================= */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;

    background: rgba(255,255,255,0.96);
    backdrop-filter: blur(10px);

    border-bottom: 1px solid var(--border);
}

.nav-container {
    min-height: 78px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 22px;
    font-weight: 700;
}

.logo span span {
    color: var(--primary);
}

.logo-icon {
    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    background: var(--primary);
    color: white;

    border-radius: 50%;
}

nav {
    display: flex;
    gap: 22px;
}

nav a {
    font-weight: 700;
    font-size: 15px;

    color: #45414f;

    transition: 0.2s;
}

nav a:hover {
    color: var(--primary);
}

.menu-button {
    display: none;

    border: 0;
    background: var(--primary);
    color: white;

    border-radius: 8px;
    padding: 8px 12px;

    font-size: 22px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 680px;

    display: flex;
    align-items: center;

    background:
        radial-gradient(circle at 80% 20%, #e9e2ff 0, transparent 30%),
        linear-gradient(135deg, #f9f7ff, #ffffff);
}

.hero-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 70px;

    align-items: center;
}

.badge {
    display: inline-block;

    padding: 7px 14px;

    background: #ece7ff;
    color: var(--primary);

    border-radius: 50px;

    font-weight: 700;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(42px, 6vw, 72px);
    line-height: 1.05;

    letter-spacing: -2px;

    margin-bottom: 25px;
}

.hero h1 span {
    color: var(--primary);
}

.hero-text p {
    max-width: 650px;

    font-size: 20px;

    color: var(--muted);

    margin-bottom: 32px;
}

.hero-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}


/* BOTÕES */

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 14px 22px;

    border-radius: 10px;

    font-weight: 700;

    transition: 0.25s;
}

.primary {
    background: var(--primary);
    color: white;

    border: 2px solid var(--primary);
}

.primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.secondary {
    border: 2px solid var(--primary);
    color: var(--primary);
}

.secondary:hover {
    background: #eee9ff;
}


/* HERO CARD */

.hero-card {
    background: white;

    padding: 50px 35px;

    text-align: center;

    border-radius: 30px;

    box-shadow: var(--shadow);

    border: 1px solid var(--border);
}

.eye-circle {
    width: 150px;
    height: 150px;

    margin: auto auto 25px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background:
        radial-gradient(circle, #fff 20%, #bbaaff 21%, #7255e5 60%, #4327a4 100%);

    font-size: 55px;
}

.hero-card h2 {
    margin-bottom: 10px;
}

.hero-card p {
    color: var(--muted);
}


/* =========================
   SEÇÕES
========================= */

.section {
    padding: 100px 0;
}

.section.light {
    background: var(--light);
}

.section-title {
    max-width: 720px;
    margin-bottom: 55px;
}

.section-title > span {
    color: var(--primary);

    font-size: 14px;
    font-weight: 700;

    letter-spacing: 2px;
}

.section-title h2 {
    font-size: clamp(32px, 4vw, 50px);
    line-height: 1.15;

    margin: 8px 0 15px;
}

.section-title p {
    color: var(--muted);
    font-size: 18px;
}


/* =========================
   INFO BOX
========================= */

.info-box {
    display: flex;
    gap: 30px;

    padding: 40px;

    border-radius: 20px;

    background: white;

    border: 1px solid var(--border);

    box-shadow: var(--shadow);
}

.info-icon {
    flex-shrink: 0;

    width: 70px;
    height: 70px;

    display: grid;
    place-items: center;

    background: #eee9ff;

    border-radius: 15px;

    font-size: 35px;
}


/* =========================
   CARDS
========================= */

.cards {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;
}

.card {
    background: white;

    padding: 30px;

    border-radius: 18px;

    border: 1px solid var(--border);

    transition: 0.25s;
}

.card:hover {
    transform: translateY(-7px);
    box-shadow: var(--shadow);
}

.card-icon {
    font-size: 32px;

    width: 60px;
    height: 60px;

    display: grid;
    place-items: center;

    background: #f0ecff;

    border-radius: 14px;

    margin-bottom: 20px;
}

.card h3 {
    margin-bottom: 8px;
}

.card p {
    color: var(--muted);
}


/* =========================
   CAUSAS
========================= */

.cause-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 20px;
}

.cause {
    display: flex;
    gap: 20px;

    padding: 30px;

    border: 1px solid var(--border);

    border-radius: 18px;
}

.cause > span {
    color: var(--primary);

    font-size: 30px;
    font-weight: 700;
}

.cause p {
    color: var(--muted);
}


/* =========================
   TECNOLOGIAS
========================= */

.purple {
    background:
        linear-gradient(135deg, #402798, #6d4dd9);

    color: white;
}

.section-title.white > span {
    color: #d9ceff;
}

.section-title.white p {
    color: #eeeaff;
}

.technology-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 20px;
}

.technology {
    padding: 30px;

    background: rgba(255,255,255,0.12);

    border: 1px solid rgba(255,255,255,0.2);

    border-radius: 18px;
}

.technology > span {
    font-size: 35px;
}

.technology h3 {
    margin: 15px 0 8px;
}

.technology p {
    color: #eeeaff;
}


/* =========================
   RECURSOS
========================= */

.resource-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 20px;
}

.resource-grid article {
    padding: 30px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 18px;

    box-shadow: 0 8px 25px rgba(0,0,0,0.04);
}

.resource-grid span {
    font-size: 35px;
}

.resource-grid h3 {
    margin: 15px 0 8px;
}

.resource-grid p {
    color: var(--muted);
}


/* =========================
   FAQ
========================= */

.faq {
    max-width: 850px;
}

.faq-question {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 22px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 12px;

    margin-top: 12px;

    text-align: left;

    font-weight: 700;
    color: var(--text);
}

.faq-question span {
    font-size: 25px;
    color: var(--primary);
}

.faq-answer {
    display: none;

    padding: 20px 22px;

    background: #f7f5fc;

    border-radius: 0 0 12px 12px;

    color: var(--muted);
}

.faq-answer.active {
    display: block;
}


/* =========================
   GUIA
========================= */

.guide {
    padding: 90px 0;

    background:
        linear-gradient(135deg, #5b3cc4, #8b6cff);

    color: white;
}

.guide-content {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 50px;
}

.guide-label {
    font-weight: 700;
    letter-spacing: 2px;
}

.guide h2 {
    font-size: 48px;

    margin: 12px 0;
}

.guide p {
    max-width: 650px;

    color: #eeeaff;

    margin-bottom: 25px;
}

.guide-icon {
    font-size: 120px;
}

.white-button {
    background: white;
    color: var(--primary);
}


/* =========================
   CONTATO
========================= */

.contact-container {
    max-width: 800px;
}

.contact-form {
    display: flex;
    flex-direction: column;

    gap: 10px;
}

.contact-form label {
    font-weight: 700;

    margin-top: 10px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;

    padding: 15px;

    border: 2px solid var(--border);

    border-radius: 10px;

    outline: none;

    background: white;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--primary);

    box-shadow: 0 0 0 3px #e7e0ff;
}

.contact-form button {
    margin-top: 15px;
}


/* =========================
   FOOTER
========================= */

footer {
    background: #17131f;

    color: white;

    padding: 45px 0;
}

.footer-content {
    display: flex;

    justify-content: space-between;

    gap: 30px;
}

footer p {
    color: #bbb5c7;
}


/* =========================
   VOLTAR AO TOPO
========================= */

#topButton {
    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 50px;
    height: 50px;

    border: 0;

    border-radius: 50%;

    background: var(--primary);
    color: white;

    font-size: 24px;

    box-shadow: var(--shadow);

    display: none;

    z-index: 100;
}

#topButton.show {
    display: block;
}


/* =========================
   ALTO CONTRASTE
========================= */

body.high-contrast {
    --background: #000;
    --text: #fff;
    --muted: #fff;
    --light: #000;
    --card: #000;
    --border: #fff;
    --primary: #ffff00;
}

body.high-contrast .header {
    background: #000;
}

body.high-contrast nav a {
    color: #fff;
}

body.high-contrast .card,
body.high-contrast .cause,
body.high-contrast .resource-grid article,
body.high-contrast .hero-card,
body.high-contrast .info-box,
body.high-contrast .faq-question {
    background: #000;
    border-color: #fff;
}

body.high-contrast .primary {
    background: #ffff00;
    color: #000;
}

body.high-contrast .hero,
body.high-contrast .section.light {
    background: #000;
}


/* =========================
   MODO ESCURO
========================= */

body.dark {
    --background: #121016;
    --text: #f5f3fa;
    --muted: #d0cbd9;
    --light: #1c1822;
    --card: #211c29;
    --border: #3c3547;
}

body.dark .header {
    background: rgba(18,16,22,0.96);
}

body.dark nav a {
    color: #eee;
}

body.dark .hero {
    background:
        radial-gradient(circle at 80% 20%, #302650 0, transparent 30%),
        #121016;
}

body.dark .card,
body.dark .cause,
body.dark .resource-grid article,
body.dark .hero-card,
body.dark .info-box,
body.dark .faq-question,
body.dark .contact-form input,
body.dark .contact-form textarea {
    background: var(--card);
}


/* =========================
   ESPAÇAMENTO
========================= */

body.extra-spacing {
    line-height: 2.1;
    letter-spacing: 0.05em;
}

body.extra-spacing p {
    margin-bottom: 15px;
}


/* =========================
   RESPONSIVIDADE
========================= */

@media (max-width: 950px) {

    nav {
        position: absolute;

        top: 78px;
        left: 0;
        right: 0;

        background: white;

        display: none;
        flex-direction: column;

        padding: 25px;

        border-bottom: 1px solid var(--border);
    }

    body.dark nav {
        background: #121016;
    }

    nav.active {
        display: flex;
    }

    .menu-button {
        display: block;
    }

    .hero-content {
        grid-template-columns: 1fr;
        padding: 70px 0;
    }

    .cards {
        grid-template-columns: repeat(2, 1fr);
    }

    .technology-grid,
    .resource-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}


@media (max-width: 650px) {

    .accessibility-content {
        justify-content: center;
    }

    .nav-container {
        min-height: 68px;
    }

    .hero {
        min-height: auto;
    }

    .hero h1 {
        font-size: 42px;
    }

    .hero-text p {
        font-size: 18px;
    }

    .section {
        padding: 70px 0;
    }

    .cards,
    .cause-grid,
    .technology-grid,
    .resource-grid {
        grid-template-columns: 1fr;
    }

    .info-box {
        flex-direction: column;
        padding: 25px;
    }

    .guide-content {
        flex-direction: column;
        align-items: flex-start;
    }

    .guide h2 {
        font-size: 38px;
    }

    .guide-icon {
        font-size: 70px;
    }

    .footer-content {
        flex-direction: column;
    }
}