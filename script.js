/* =========================================================
   NEURIX'26 — COMPLETE FRONTEND JS
   VERSION: CASE-SAFE EVENT SYSTEM

   FEATURES:
   - Automatic event cards
   - Event selection
   - Maximum 5 events
   - Event pair restrictions
   - Case-safe event names
   - Event details modal
   - Form validation
   - Payment screenshot Base64 upload
   - Google Apps Script submission
   - Mobile navigation
   - Scroll navigation
   - Particles
   ========================================================= */


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
            name: "ULTIMATE XI ",
            description:
                "(E-Football) Build your ultimate squad, master your tactics and battle your way to victory.",
            category: "eSports",
            mode: "Individual",
            duration: "Tournament",
            icon: "⚽"
        },

        {
            id: "final-stand",
            name: "FINAL STAND ",
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

    "frames-of-ams": "corporate-walk",
    "corporate-walk": "frames-of-ams"
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
   06. FIND EVENT BY ID
   ========================================================= */

function getEventById(id) {

    return getAllEvents().find(
        event => event.id === id
    );

}


/* =========================================================
   07. NORMALIZE EVENT NAME
   =========================================================
   
   This function makes frontend event names consistent.

   Example:

   "Prompt Battle"
   "prompt battle"
   "PROMPT BATTLE"

   All are converted to:

   "Prompt Battle"

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
        getAllEvents().find(
            item =>
                item.name
                    .trim()
                    .replace(/\s+/g, " ")
                    .toLowerCase() === cleanName
        );

    return event
        ? event.name
        : String(name).trim();

}


/* =========================================================
   08. DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

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

        updateEventUI();

        console.log(
            "NEURIX'26 → Initialization complete"
        );

    }
);


/* =========================================================
   09. LOADER
   ========================================================= */

function initializeLoader() {

    const loader =
        document.querySelector(".loader");

    if (!loader) return;


    function hideLoader() {

        loader.classList.add("hidden");

        document.body.classList.add(
            "page-loaded"
        );

    }


    window.addEventListener(
        "load",
        () => {

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
   10. NAVIGATION
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
            () => {

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
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

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
        () => {

            if (!navbar) return;

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
   11. GENERATE EVENT CARDS
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
   12. CREATE EVENT CARD
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
   13. INITIALIZE SELECTION
   ========================================================= */

function initializeSelection() {

    document.addEventListener(
        "click",
        event => {

            const selectButton =
                event.target.closest(
                    "[data-select-event]"
                );


            if (selectButton) {

                event.preventDefault();

                event.stopPropagation();

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

                event.stopPropagation();

                openEventModal(
                    viewButton.dataset.viewEvent
                );

            }

        }
    );

}


/* =========================================================
   14. TOGGLE EVENT SELECTION
   ========================================================= */

function toggleEventSelection(id) {

    const event =
        getEventById(id);

    if (!event) return;


    /* =====================================================
       REMOVE EVENT
       ===================================================== */

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


    /* =====================================================
       MAXIMUM 5
       ===================================================== */

    if (
        selectedEvents.length >=
        MAX_EVENTS
    ) {

        showEventWarning(
            "You can select a maximum of 5 events."
        );

        return;

    }


    /* =====================================================
       CHECK PAIR
       ===================================================== */

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


    /* =====================================================
       ADD EVENT
       ===================================================== */

    selectedEvents.push(id);

    updateEventUI();

}


/* =========================================================
   15. UPDATE EVENT UI
   ========================================================= */

function updateEventUI() {

    document
        .querySelectorAll(".event-card")
        .forEach(card => {

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


            const selectButton =
                card.querySelector(
                    ".event-select-btn"
                );


            if (selectButton) {

                selectButton.classList.toggle(
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
   16. COUNTER
   ========================================================= */

function updateCounter() {

    const counter =
        document.querySelector(
            ".counter-value"
        );

    if (!counter) return;


    counter.textContent =
        `${selectedEvents.length} / ${MAX_EVENTS}`;

}


/* =========================================================
   17. FORM EVENT LIST
   ========================================================= */

function updateFormEventList() {

    const container =
        document.querySelector(
            ".form-event-list"
        );

    if (!container) return;


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
            .map(id => {

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


    container
        .querySelectorAll(
            "[data-remove-event]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    toggleEventSelection(
                        button.dataset.removeEvent
                    );

                }
            );

        });

}


/* =========================================================
   18. PAYMENT TOTAL
   ========================================================= */

function updatePaymentTotal() {

    const total =
        document.querySelector(
            ".payment-total span:last-child"
        );

    if (!total) return;

    total.textContent =
        `₹${REGISTRATION_FEE}`;

}


/* =========================================================
   19. EVENT WARNING
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
            () => {

                warning.classList.remove(
                    "visible"
                );

            },
            3500
        );

}


/* =========================================================
   20. EVENT MODAL
   ========================================================= */

function initializeEventModal() {

    const modal =
        document.querySelector(
            ".event-modal"
        );

    if (!modal) return;


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
        event => {

            if (
                event.key === "Escape"
            ) {

                closeEventModal();

            }

        }
    );

}


/* =========================================================
   21. OPEN EVENT MODAL
   ========================================================= */

function openEventModal(id) {

    const event =
        getEventById(id);

    const modal =
        document.querySelector(
            ".event-modal"
        );

    if (!event || !modal) return;


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
        image => {

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
   22. CLOSE EVENT MODAL
   ========================================================= */

function closeEventModal() {

    const modal =
        document.querySelector(
            ".event-modal"
        );

    if (!modal) return;


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
   23. FORM INITIALIZATION
   ========================================================= */

function initializeForm() {

    const form =
        document.querySelector(
            "#registrationForm"
        );

    if (!form) return;


    form.addEventListener(
        "submit",
        handleRegistrationSubmit
    );

}


/* =========================================================
   24. SUBMIT REGISTRATION
   ========================================================= */

async function handleRegistrationSubmit(event) {

    event.preventDefault();


    const form =
        event.target;


    /* =====================================================
       EVENT VALIDATION
       ===================================================== */

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


    /* =====================================================
       URL VALIDATION
       ===================================================== */

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


    /* =====================================================
       HTML VALIDATION
       ===================================================== */

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


    /* =====================================================
       SUBMIT BUTTON
       ===================================================== */

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

        /* =================================================
           FORM DATA
           ================================================= */

        const formData =
            new FormData(form);


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


        /* =================================================
           FILE SIZE VALIDATION
           ================================================= */

        const MAX_FILE_SIZE =
            5 * 1024 * 1024;


        if (
            file.size > MAX_FILE_SIZE
        ) {

            throw new Error(
                "Payment screenshot must be less than 5 MB."
            );

        }


        /* =================================================
           FILE TYPE VALIDATION
           ================================================= */

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


        /* =================================================
           BASE64
           ================================================= */

        const base64 =
            await fileToBase64(file);


        /* =================================================
           URL ENCODED DATA
           ================================================= */

        const params =
            new URLSearchParams();


        params.append(
            "name",
            formData.get("name") || ""
        );


        params.append(
            "college",
            formData.get("college") || ""
        );


        params.append(
            "department",
            formData.get("department") || "CSBS"
        );


        params.append(
            "year",
            formData.get("year") || "Student"
        );


        params.append(
            "phone",
            formData.get("phone") || ""
        );


        params.append(
            "email",
            formData.get("email") || ""
        );


        params.append(
            "food",
            formData.get("food") || ""
        );


        /* =================================================
           EVENT NAMES
           ================================================= */

        const selectedEventNames =
            selectedEvents
                .map(id => {

                    const eventData =
                        getEventById(id);

                    return eventData
                        ? normalizeEventName(
                            eventData.name
                        )
                        : "";

                })
                .filter(Boolean);


        /* =================================================
           IMPORTANT

           Send exact normalized event names.

           Example:

           Prompt Battle
           Debug Arena
           ULTIMATE XI

           ================================================= */

        params.append(
            "events",
            selectedEventNames.join(",")
        );


        /* =================================================
           PAYMENT DATA
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
            file.type || "image/jpeg"
        );


        console.log(
            "Submitting registration..."
        );

        console.log(
            "Selected events:",
            selectedEventNames
        );


        /* =================================================
           SEND TO GOOGLE APPS SCRIPT
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


        console.log(
            "Response status:",
            response.status
        );


        const responseText =
            await response.text();


        console.log(
            "Google Apps Script response:",
            responseText
        );


        /* =================================================
           PARSE RESPONSE
           ================================================= */

        let result;


        try {

            result =
                JSON.parse(
                    responseText
                );

        } catch {

            throw new Error(
                "Google Apps Script returned an invalid response."
            );

        }


        /* =================================================
           BACKEND ERROR
           ================================================= */

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


        /* =================================================
           RESET FORM
           ================================================= */

        form.reset();

        selectedEvents = [];

        updateEventUI();


        console.log(
            "Registration completed:",
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
   25. FILE → BASE64
   ========================================================= */

function fileToBase64(file) {

    return new Promise(
        (resolve, reject) => {

            const reader =
                new FileReader();


            reader.onload = () => {

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
                () => {

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
   26. FORM MESSAGE
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
   27. SCROLL NAVIGATION
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
    ) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) return;


                        const id =
                            entry.target.id;


                        links.forEach(
                            link => {

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
        section =>
            observer.observe(
                section
            )
    );

}


/* =========================================================
   28. PARTICLES
   ========================================================= */

function initializeParticles() {

    const canvas =
        document.querySelector(
            ".particle-canvas"
        );


    if (!canvas) return;


    const ctx =
        canvas.getContext(
            "2d"
        );


    if (!ctx) return;


    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrame;


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
                () => ({

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

                })
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
            particle => {

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


        animationFrame =
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


    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                cancelAnimationFrame(
                    animationFrame
                );

            } else {

                animate();

            }

        }
    );

}


/* =========================================================
   29. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   30. ESCAPE ATTRIBUTE
   ========================================================= */

function escapeAttribute(value) {

    return escapeHTML(value);

}


/* =========================================================
   31. GLOBAL FUNCTIONS
   ========================================================= */

window.toggleEventSelection =
    toggleEventSelection;

window.openEventModal =
    openEventModal;

window.closeEventModal =
    closeEventModal;


/* =========================================================
   32. DEBUG
   ========================================================= */

console.log(
    "===================================="
);

console.log(
    "NEURIX'26 JS READY"
);

console.log(
    "Total events:",
    getAllEvents().length
);

console.log(
    "Maximum:",
    MAX_EVENTS
);

console.log(
    "===================================="
);