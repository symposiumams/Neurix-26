/* =========================================================
   NEURIX'26 — COMPLETE FRONTEND JAVASCRIPT
   Department + Year Integrated
   ========================================================= */

"use strict";


/* =========================================================
   01. CONFIGURATION
   ========================================================= */

const MAX_EVENTS = 5;

const REGISTRATION_FEE = 150;

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyRHhfmDVA_4v-7mQgLH5c7UoM2TErPTTMuO81bfwzSUDOvA7eGxfAneynJtF5-NibV/exec";


/* =========================================================
   02. EVENT DATA
   ========================================================= */

const EVENTS = {

    technical: [

        {
            id: "prompt-battle",
            name: "Prompt Battle",
            description:
                "Challenge your creativity and AI thinking skills by crafting powerful prompts and solving real-world challenges.",
            category: "Technical",
            mode: "Individual",
            duration: "30–45 Minutes",
            icon: "🤖"
        },

        {
            id: "debug-arena",
            name: "Debug Arena",
            description:
                "Find the bugs, understand the logic and fix the code before your opponents.",
            category: "Technical",
            mode: "Individual",
            duration: "30–45 Minutes",
            icon: "🐞"
        },

        {
            id: "paper-presentation",
            name: "Paper Presentation",
            description:
                "Present innovative ideas, emerging technologies and research concepts with confidence.",
            category: "Technical",
            mode: "Team / Individual",
            duration: "5–10 Minutes",
            icon: "📄"
        },

        {
            id: "canvas-clash",
            name: "Canvas Clash",
            description:
                "Turn your ideas into visually powerful posters and showcase your creative design skills.",
            category: "Technical",
            mode: "Individual",
            duration: "45–60 Minutes",
            icon: "🎨"
        },

        {
            id: "web-craft",
            name: "Web Craft",
            description:
                "Design and build an impressive web experience while competing against other creators.",
            category: "Technical",
            mode: "Individual",
            duration: "60 Minutes",
            icon: "🌐"
        }

    ],


    nontechnical: [

        {
            id: "frames-ams",
            name: "Frames of AMS",
            description:
                "Capture the world through your lens and showcase your eye for storytelling and composition.",
            category: "Non-Technical",
            mode: "Individual",
            duration: "Event Based",
            icon: "📸"
        },

        {
            id: "ultimate-xi",
            name: "ULTIMATE XI",
            description:
                "(E-Football) Build your ultimate squad, master your tactics and battle your way to victory.",
            category: "eSports",
            mode: "Individual",
            duration: "Tournament",
            icon: "⚽"
        },

        {
            id: "final-stand",
            name: "FINAL STAND",
            description:
                "(Free Fire) Survive the battlefield, outplay your opponents and become the last squad standing.",
            category: "eSports",
            mode: "Team",
            duration: "Tournament",
            icon: "🔥"
        },

        {
            id: "chase-clue",
            name: "Chase the Clue",
            description:
                "Follow the clues, solve the puzzles and race against time to discover the hidden treasure.",
            category: "Non-Technical",
            mode: "Team",
            duration: "30–60 Minutes",
            icon: "🗺️"
        },

        {
            id: "bgm-blitz",
            name: "BGM Blitz",
            description:
                "Test your musical memory and identify iconic background music faster than everyone else.",
            category: "Non-Technical",
            mode: "Individual",
            duration: "20–30 Minutes",
            icon: "🎵"
        },

        {
            id: "think-link",
            name: "Think & Link",
            description:
                "Connect the clues, identify the hidden relationships and prove your logical thinking.",
            category: "Non-Technical",
            mode: "Team",
            duration: "30 Minutes",
            icon: "🧠"
        },

        {
            id: "corporate-walk",
            name: "Corporate Walk",
            description:
                "Step into the corporate world and showcase confidence, personality, presentation and professional style.",
            category: "Special Event",
            mode: "Individual",
            duration: "Event Based",
            icon: "🕴️"
        }

    ]

};


/* =========================================================
   03. EVENT PAIRS
   ========================================================= */

const EVENT_PAIRS = {

    "prompt-battle": "think-link",
    "think-link": "prompt-battle",

    "debug-arena": "paper-presentation",
    "paper-presentation": "debug-arena",

    "canvas-clash": "chase-clue",
    "chase-clue": "canvas-clash",

    "web-craft": "bgm-blitz",
    "bgm-blitz": "web-craft",

    "ultimate-xi": "final-stand",
    "final-stand": "ultimate-xi",

    "frames-ams": "corporate-walk",
    "corporate-walk": "frames-ams"

};


/* =========================================================
   04. STATE
   ========================================================= */

let selectedEvents = [];


/* =========================================================
   05. GET ALL EVENTS
   ========================================================= */

function getAllEvents() {

    return [
        ...EVENTS.technical,
        ...EVENTS.nontechnical
    ];

}


/* =========================================================
   06. GET EVENT
   ========================================================= */

function getEventById(id) {

    return getAllEvents().find(
        event => event.id === id
    );

}


/* =========================================================
   07. NORMALIZE EVENT NAME
   ========================================================= */

function normalizeEventName(name) {

    if (!name) {
        return "";
    }

    const cleanName =
        String(name)
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase();

    const event =
        getAllEvents().find(item =>
            item.name
                .trim()
                .replace(/\s+/g, " ")
                .toLowerCase() === cleanName
        );

    return event
        ? event.name.trim()
        : String(name).trim();

}


/* =========================================================
   08. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   09. ESCAPE ATTRIBUTE
   ========================================================= */

function escapeAttribute(value) {

    return escapeHTML(value);

}


/* =========================================================
   10. DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "NEURIX'26 → Initializing..."
        );

        initializeLoader();

        initializeNavigation();

        generateEventCards();

        initializeSelection();

        initializeEventModal();

        initializeForm();

        initializeScroll();

        initializeParticles();

        initializeScrollAnimations(); // ← ADDED

        updateEventUI();

        console.log(
            "NEURIX'26 → Ready"
        );

    }
);


/* =========================================================
   11. LOADER
   ========================================================= */

function initializeLoader() {

    const loader =
        document.querySelector(".loader");

    if (!loader) {
        return;
    }

    function hideLoader() {

        loader.classList.add("hidden");

        document.body.classList.add(
            "page-loaded"
        );

    }

    window.addEventListener(
        "load",
        function () {

            setTimeout(
                hideLoader,
                500
            );

        },
        {
            once: true
        }
    );

    setTimeout(
        hideLoader,
        3000
    );

}


/* =========================================================
   12. NAVIGATION
   ========================================================= */

function initializeNavigation() {

    const toggle =
        document.querySelector(".nav-toggle");

    const menu =
        document.querySelector(".nav-menu");

    const navbar =
        document.querySelector(".navbar");


    if (toggle && menu) {

        toggle.addEventListener(
            "click",
            function () {

                toggle.classList.toggle(
                    "active"
                );

                menu.classList.toggle(
                    "active"
                );

            }
        );


        menu
            .querySelectorAll(".nav-link")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        toggle.classList.remove(
                            "active"
                        );

                        menu.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }


    window.addEventListener(
        "scroll",
        function () {

            if (!navbar) {
                return;
            }

            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 40
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   13. GENERATE EVENT CARDS
   ========================================================= */

function generateEventCards() {

    const technicalContainer =
        document.querySelector(
            "#technicalEvents"
        );

    const nonTechnicalContainer =
        document.querySelector(
            "#nonTechnicalEvents"
        );


    if (technicalContainer) {

        technicalContainer.innerHTML =
            EVENTS.technical
                .map(createEventCard)
                .join("");

    }


    if (nonTechnicalContainer) {

        nonTechnicalContainer.innerHTML =
            EVENTS.nontechnical
                .map(createEventCard)
                .join("");

    }

}


/* =========================================================
   14. CREATE EVENT CARD
   ========================================================= */

function createEventCard(event) {

    return `

        <article
            class="event-card"
            data-event="${escapeAttribute(event.id)}"
        >

            <div class="event-card-glow"></div>

            <div class="event-card-top">

                <div class="event-icon">
                    ${event.icon}
                </div>

                <div class="event-status">

                    <span class="status-dot"></span>

                    Available

                </div>

            </div>


            <div class="event-card-content">

                <span class="event-category">
                    ${escapeHTML(event.category)}
                </span>

                <h3 class="event-title">
                    ${escapeHTML(event.name)}
                </h3>

                <p class="event-description">
                    ${escapeHTML(event.description)}
                </p>


                <div class="event-meta">

                    <span>
                        👤 ${escapeHTML(event.mode)}
                    </span>

                    <span>
                        ⏱ ${escapeHTML(event.duration)}
                    </span>

                </div>

            </div>


            <div class="event-card-bottom">

                <button
                    type="button"
                    class="event-view-btn"
                    data-view-event="${escapeAttribute(event.id)}"
                >
                    View Details
                </button>


                <button
                    type="button"
                    class="event-select-btn"
                    data-select-event="${escapeAttribute(event.id)}"
                >

                    <span class="select-text">
                        Select
                    </span>

                    <span class="selected-text">
                        ✓ Selected
                    </span>

                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   15. INITIALIZE SELECTION
   ========================================================= */

function initializeSelection() {

    document.addEventListener(
        "click",
        function (event) {

            const selectButton =
                event.target.closest(
                    "[data-select-event]"
                );


            if (selectButton) {

                event.preventDefault();

                const id =
                    selectButton.dataset.selectEvent;

                toggleEventSelection(id);

                return;

            }


            const viewButton =
                event.target.closest(
                    "[data-view-event]"
                );


            if (viewButton) {

                event.preventDefault();

                openEventModal(
                    viewButton.dataset.viewEvent
                );

                return;

            }


            const removeButton =
                event.target.closest(
                    "[data-remove-event]"
                );


            if (removeButton) {

                event.preventDefault();

                const id =
                    removeButton.dataset.removeEvent;

                toggleEventSelection(id);

            }

        }
    );

}


/* =========================================================
   16. TOGGLE EVENT
   ========================================================= */

function toggleEventSelection(id) {

    const event =
        getEventById(id);

    if (!event) {
        return;
    }


    /* REMOVE */

    if (
        selectedEvents.includes(id)
    ) {

        selectedEvents =
            selectedEvents.filter(
                selectedId =>
                    selectedId !== id
            );

        updateEventUI();

        return;

    }


    /* MAXIMUM */

    if (
        selectedEvents.length >=
        MAX_EVENTS
    ) {

        showEventWarning(
            "You can select a maximum of 5 events."
        );

        return;

    }


    /* PAIR */

    const pair =
        EVENT_PAIRS[id];

    if (
        pair &&
        selectedEvents.includes(pair)
    ) {

        const pairEvent =
            getEventById(pair);

        showEventWarning(
            `${pairEvent.name} is already selected. These two events run at the same time.`
        );

        return;

    }


    selectedEvents.push(id);

    updateEventUI();

}


/* =========================================================
   17. UPDATE EVENT UI
   ========================================================= */

function updateEventUI() {

    document
        .querySelectorAll(".event-card")
        .forEach(function (card) {

            const id =
                card.dataset.event;

            const selected =
                selectedEvents.includes(id);

            const pair =
                EVENT_PAIRS[id];

            const pairSelected =
                pair &&
                selectedEvents.includes(pair);


            card.classList.toggle(
                "selected",
                selected
            );

            card.classList.toggle(
                "disabled",
                Boolean(
                    pairSelected &&
                    !selected
                )
            );


            const button =
                card.querySelector(
                    ".event-select-btn"
                );

            if (button) {

                button.classList.toggle(
                    "active",
                    selected
                );

            }

        });


    updateCounter();

    updateFormEventList();

    updatePaymentTotal();

}


/* =========================================================
   18. COUNTER
   ========================================================= */

function updateCounter() {

    const counter =
        document.querySelector(
            ".counter-value"
        );

    if (!counter) {
        return;
    }

    counter.textContent =
        `${selectedEvents.length} / ${MAX_EVENTS}`;

}


/* =========================================================
   19. FORM EVENT LIST
   ========================================================= */

function updateFormEventList() {

    const container =
        document.querySelector(
            ".form-event-list"
        );

    if (!container) {
        return;
    }


    if (
        selectedEvents.length === 0
    ) {

        container.innerHTML = `
            <div class="no-events">
                Select events above
            </div>
        `;

        return;

    }


    container.innerHTML =
        selectedEvents
            .map(function (id) {

                const event =
                    getEventById(id);

                if (!event) {
                    return "";
                }

                return `

                    <span class="form-event-tag">

                        ${escapeHTML(event.name)}

                        <button
                            type="button"
                            class="remove-tag"
                            data-remove-event="${escapeAttribute(id)}"
                        >
                            ×
                        </button>

                    </span>

                `;

            })
            .join("");

}


/* =========================================================
   20. PAYMENT TOTAL
   ========================================================= */

function updatePaymentTotal() {

    const totalElements =
        document.querySelectorAll(
            ".payment-total span:last-child"
        );

    totalElements.forEach(
        function (element) {

            element.textContent =
                `₹${REGISTRATION_FEE}`;

        }
    );

}


/* =========================================================
   21. EVENT WARNING
   ========================================================= */

function showEventWarning(message) {

    const warning =
        document.querySelector(
            ".event-warning"
        );


    if (!warning) {

        alert(message);

        return;

    }


    warning.textContent =
        `⚠ ${message}`;

    warning.classList.add(
        "visible"
    );


    clearTimeout(
        warning._timer
    );


    warning._timer =
        setTimeout(
            function () {

                warning.classList.remove(
                    "visible"
                );

            },
            3500
        );

}


/* =========================================================
   22. EVENT MODAL
   ========================================================= */

function initializeEventModal() {

    const modal =
        document.querySelector(
            ".event-modal"
        );

    if (!modal) {
        return;
    }


    const closeButton =
        modal.querySelector(
            ".event-modal-close"
        );

    const backdrop =
        modal.querySelector(
            ".event-modal-backdrop"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeEventModal
        );

    }


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeEventModal
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeEventModal();

            }

        }
    );

}


/* =========================================================
   23. OPEN EVENT MODAL
   ========================================================= */

function openEventModal(id) {

    const event =
        getEventById(id);

    const modal =
        document.querySelector(
            ".event-modal"
        );

    if (!event || !modal) {
        return;
    }


    const category =
        modal.querySelector(
            "#modalCategory"
        );

    const title =
        modal.querySelector(
            "#modalTitle"
        );

    const description =
        modal.querySelector(
            "#modalDescription"
        );


    if (category) {

        category.textContent =
            event.category;

    }


    if (title) {

        title.textContent =
            event.name;

    }


    if (description) {

        description.textContent =
            event.description;

    }


    const images =
        modal.querySelectorAll(
            ".modal-image-wrapper img"
        );


    images.forEach(
        function (image) {

            image.src =
                "https://placehold.co/900x550/111111/D4AF37?text=" +
                encodeURIComponent(
                    event.name
                );

            image.alt =
                event.name;

        }
    );


    modal.classList.add(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   24. CLOSE EVENT MODAL
   ========================================================= */

function closeEventModal() {

    const modal =
        document.querySelector(
            ".event-modal"
        );

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   25. FORM INITIALIZATION
   ========================================================= */

function initializeForm() {

    const form =
        document.querySelector(
            "#registrationForm"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        handleRegistrationSubmit
    );

}


/* =========================================================
   26. FORM SUBMISSION
   ========================================================= */

async function handleRegistrationSubmit(event) {

    event.preventDefault();


    const form =
        event.target;


    /* EVENTS */

    if (
        selectedEvents.length === 0
    ) {

        showFormMessage(
            "Please select at least one event.",
            "error"
        );

        document
            .querySelector("#events")
            ?.scrollIntoView({
                behavior: "smooth"
            });

        return;

    }


    /* URL */

    if (
        !GOOGLE_SCRIPT_URL ||
        GOOGLE_SCRIPT_URL.includes(
            "PASTE_YOUR"
        )
    ) {

        showFormMessage(
            "Google Apps Script URL is not configured.",
            "error"
        );

        return;

    }


    /* HTML VALIDATION */

    if (
        !form.checkValidity()
    ) {

        form.reportValidity();

        showFormMessage(
            "Please fill all required fields.",
            "error"
        );

        return;

    }


    const submitButton =
        form.querySelector(
            ".btn-submit"
        );


    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.classList.add(
            "loading"
        );

    }


    try {

        const formData =
            new FormData(form);


        /* =================================================
           NAME
           ================================================= */

        const name =
            String(
                formData.get("name") || ""
            ).trim();


        /* =================================================
           COLLEGE
           ================================================= */

        const college =
            String(
                formData.get("college") || ""
            ).trim();


        /* =================================================
           DEPARTMENT
           ================================================= */

        const department =
            String(
                formData.get("department") || ""
            ).trim();


        /* =================================================
           YEAR
           ================================================= */

        const year =
            String(
                formData.get("year") || ""
            ).trim();


        /* =================================================
           PHONE
           ================================================= */

        const phone =
            String(
                formData.get("phone") || ""
            ).trim();


        /* =================================================
           EMAIL
           ================================================= */

        const email =
            String(
                formData.get("email") || ""
            ).trim();


        /* =================================================
           FOOD
           ================================================= */

        const food =
            String(
                formData.get("food") || ""
            ).trim();


        /* =================================================
           PAYMENT FILE
           ================================================= */

        const file =
            formData.get(
                "paymentScreenshot"
            );


        if (
            !file ||
            !(file instanceof File) ||
            file.size === 0
        ) {

            throw new Error(
                "Please upload your payment screenshot."
            );

        }


        /* FILE SIZE */

        const MAX_FILE_SIZE =
            5 * 1024 * 1024;


        if (
            file.size >
            MAX_FILE_SIZE
        ) {

            throw new Error(
                "Payment screenshot must be less than 5 MB."
            );

        }


        /* FILE TYPE */

        const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp"
        ];


        if (
            !allowedTypes.includes(
                file.type
            )
        ) {

            throw new Error(
                "Only JPG, PNG or WEBP images are allowed."
            );

        }


        /* BASE64 */

        const base64 =
            await fileToBase64(file);


        /* =================================================
           URL ENCODED DATA
           ================================================= */

        const params =
            new URLSearchParams();


        params.append(
            "name",
            name
        );


        params.append(
            "college",
            college
        );


        params.append(
            "department",
            department
        );


        params.append(
            "year",
            year
        );


        params.append(
            "phone",
            phone
        );


        params.append(
            "email",
            email
        );


        params.append(
            "food",
            food
        );


        /* =================================================
           EVENTS
           ================================================= */

        const selectedEventNames =
            selectedEvents
                .map(function (id) {

                    const eventData =
                        getEventById(id);

                    return eventData
                        ? normalizeEventName(
                            eventData.name
                        )
                        : "";

                })
                .filter(Boolean);


        params.append(
            "events",
            selectedEventNames.join(",")
        );


        /* =================================================
           PAYMENT
           ================================================= */

        params.append(
            "paymentScreenshotData",
            base64
        );


        params.append(
            "paymentScreenshotName",
            file.name
        );


        params.append(
            "paymentScreenshotType",
            file.type ||
            "image/jpeg"
        );


        console.log(
            "Submitting registration..."
        );

        console.log(
            "Name:",
            name
        );

        console.log(
            "College:",
            college
        );

        console.log(
            "Department:",
            department
        );

        console.log(
            "Year:",
            year
        );

        console.log(
            "Events:",
            selectedEventNames
        );


        /* =================================================
           SEND
           ================================================= */

        const response =
            await fetch(
                GOOGLE_SCRIPT_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded;charset=UTF-8"
                    },

                    body:
                        params.toString(),

                    redirect: "follow"
                }
            );


        const responseText =
            await response.text();


        console.log(
            "Apps Script response:",
            responseText
        );


        let result;


        try {

            result =
                JSON.parse(
                    responseText
                );

        } catch (error) {

            throw new Error(
                "Google Apps Script returned an invalid response."
            );

        }


        if (
            !result.success
        ) {

            throw new Error(
                result.message ||
                "Registration failed."
            );

        }


        /* =================================================
           SUCCESS
           ================================================= */

        showFormMessage(
            `Registration successful! Registration ID: ${result.registrationId}`,
            "success"
        );


        /* RESET */

        form.reset();

        selectedEvents = [];

        updateEventUI();


        console.log(
            "Registration completed.",
            result
        );


    } catch (error) {

        console.error(
            "REGISTRATION ERROR:",
            error
        );


        showFormMessage(
            error.message ||
            "Failed to submit registration.",
            "error"
        );


    } finally {

        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.classList.remove(
                "loading"
            );

        }

    }

}


/* =========================================================
   27. FILE → BASE64
   ========================================================= */

function fileToBase64(file) {

    return new Promise(
        function (resolve, reject) {

            const reader =
                new FileReader();


            reader.onload =
                function () {

                    const result =
                        String(
                            reader.result
                        );


                    const base64 =
                        result.includes(
                            "base64,"
                        )
                            ? result.split(
                                "base64,"
                            )[1]
                            : result;


                    resolve(
                        base64
                    );

                };


            reader.onerror =
                function () {

                    reject(
                        new Error(
                            "Unable to read payment screenshot."
                        )
                    );

                };


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =========================================================
   28. FORM MESSAGE
   ========================================================= */

function showFormMessage(
    message,
    type
) {

    const element =
        document.querySelector(
            ".form-message"
        );


    if (!element) {

        alert(message);

        return;

    }


    element.className =
        `form-message ${type}`;


    element.textContent =
        message;


    element.style.display =
        "block";


    element.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* =========================================================
   29. SCROLL NAVIGATION
   ========================================================= */

function initializeScroll() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const links =
        document.querySelectorAll(
            ".nav-link[href^='#']"
        );


    if (
        !sections.length ||
        !links.length
    ) {
        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const id =
                            entry.target.id;


                        links.forEach(
                            function (link) {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                );

                            }
                        );

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    sections.forEach(
        function (section) {

            observer.observe(
                section
            );

        }
    );

}


/* =========================================================
   30. PARTICLES
   ========================================================= */

function initializeParticles() {

    const canvas =
        document.querySelector(
            ".particle-canvas"
        );

    if (!canvas) {
        return;
    }


    const ctx =
        canvas.getContext(
            "2d"
        );

    if (!ctx) {
        return;
    }


    let width = 0;

    let height = 0;

    let particles = [];


    function resize() {

        const ratio =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        width =
            window.innerWidth;

        height =
            window.innerHeight;


        canvas.width =
            width * ratio;

        canvas.height =
            height * ratio;


        canvas.style.width =
            `${width}px`;

        canvas.style.height =
            `${height}px`;


        ctx.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );


        createParticles();

    }


    function createParticles() {

        const count =
            width < 600
                ? 20
                : 45;


        particles =
            Array.from(
                {
                    length: count
                },
                function () {

                    return {

                        x:
                            Math.random() *
                            width,

                        y:
                            Math.random() *
                            height,

                        size:
                            Math.random() *
                            1.5 +
                            0.5,

                        speed:
                            Math.random() *
                            0.25 +
                            0.05,

                        opacity:
                            Math.random() *
                            0.4 +
                            0.1

                    };

                }
            );

    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        particles.forEach(
            function (particle) {

                particle.y -=
                    particle.speed;


                if (
                    particle.y < -10
                ) {

                    particle.y =
                        height + 10;

                }


                ctx.beginPath();


                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    `rgba(212,175,55,${particle.opacity})`;


                ctx.fill();

            }
        );


        requestAnimationFrame(
            animate
        );

    }


    window.addEventListener(
        "resize",
        resize,
        {
            passive: true
        }
    );


    resize();

    animate();

}


/* =========================================================
   31. SCROLL REVEAL ANIMATIONS  ←  ADDED
   ========================================================= */

function initializeScrollAnimations() {

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("nx-visible");
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    const revealSelectors = [
        ".section-header",
        ".about-card",
        ".events-category",
        ".event-card",
        ".timeline-item",
        ".register-info",
        ".form-glass",
        ".events-counter",
        ".footer"
    ];

    revealSelectors.forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (el) {
            revealObserver.observe(el);
        });
    });

    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("nx-section-visible");
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll("section:not(.hero)").forEach(function (section) {
        sectionObserver.observe(section);
    });

}