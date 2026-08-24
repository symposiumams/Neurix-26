/* =========================================================
   NEURIX'26 — COMPLETE JAVASCRIPT
   Particles | GSAP | Navigation | Event Selection
   Google Sheets Registration | Payment Screenshot
   Success Modal
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =====================================================
           CONFIGURATION
           ===================================================== */

        const MAX_EVENTS = 5;

        const GOOGLE_SCRIPT_URL =
            "https://script.google.com/macros/s/AKfycbyRHhfmDVA_4v-7mQgLH5c7UoM2TErPTTMuO81bfwzSUDOvA7eGxfAneynJtF5-NibV/exec";


        /* =====================================================
           PAYMENT CONFIGURATION
           ===================================================== */

        const MAX_PAYMENT_FILE_SIZE =
            5 * 1024 * 1024;

        const MAX_PAYMENT_IMAGE_WIDTH =
            1600;

        const PAYMENT_IMAGE_QUALITY =
            0.75;


        /* =====================================================
           EVENT PAIRS
           ===================================================== */

        const EVENT_PAIRS = [

            [
                "Paper Presentation",
                "Treasure Hunt"
            ],

            [
                "Debate",
                "Drawing"
            ],

            [
                "Technical Quiz",
                "Find the BGM"
            ],

            [
                "Debugging",
                "Photography"
            ],

            [
                "Connections",
                "E-Sports"
            ]

        ];


        /* =====================================================
           GLOBAL ELEMENTS
           ===================================================== */

        const loader =
            document.getElementById(
                "loader"
            );

        const canvas =
            document.getElementById(
                "particle-canvas"
            );

        const navbar =
            document.getElementById(
                "navbar"
            );

        const navToggle =
            document.getElementById(
                "navToggle"
            );

        const navMenu =
            document.getElementById(
                "navMenu"
            );

        const navLinks =
            document.querySelectorAll(
                ".nav-link"
            );

        const eventCards =
            document.querySelectorAll(
                ".event-card"
            );

        const selectedCountEl =
            document.getElementById(
                "selectedCount"
            );

        const eventWarning =
            document.getElementById(
                "eventWarning"
            );

        const formEventList =
            document.getElementById(
                "formEventList"
            );

        const formEventWarning =
            document.getElementById(
                "formEventWarning"
            );

        const form =
            document.getElementById(
                "registrationForm"
            );

        const submitBtn =
            document.getElementById(
                "submitBtn"
            );

        const formMessage =
            document.getElementById(
                "formMessage"
            );

        const successModal =
            document.getElementById(
                "successModal"
            );

        const modalClose =
            document.querySelector(
                ".modal-close"
            );


        /* =====================================================
           PAYMENT INPUT
           ===================================================== */

        const paymentInput =
            document.getElementById(
                "paymentScreenshot"
            );


        /* =====================================================
           SELECTED EVENTS
           ===================================================== */

        let selectedEvents = [];


        /* =====================================================
           LOADER
           ===================================================== */

        window.addEventListener(
            "load",
            () => {

                setTimeout(
                    () => {

                        if (loader) {

                            loader.classList.add(
                                "hidden"
                            );

                        }

                        initAnimations();

                    },
                    2200
                );

            }
        );


        /* =====================================================
           PARTICLE SYSTEM
           ===================================================== */

        let ctx = null;

        let particles = [];

        let animationId = null;

        let mouseX = 0;

        let mouseY = 0;


        if (canvas) {

            ctx =
                canvas.getContext(
                    "2d"
                );


            function resizeCanvas() {

                canvas.width =
                    window.innerWidth;

                canvas.height =
                    window.innerHeight;

            }


            resizeCanvas();


            window.addEventListener(
                "resize",
                resizeCanvas
            );


            class Particle {

                constructor() {

                    this.reset();

                }


                reset() {

                    this.x =
                        Math.random() *
                        canvas.width;

                    this.y =
                        Math.random() *
                        canvas.height;

                    this.size =
                        Math.random() *
                        2 +
                        0.5;

                    this.speedX =
                        (
                            Math.random() -
                            0.5
                        ) *
                        0.5;

                    this.speedY =
                        (
                            Math.random() -
                            0.5
                        ) *
                        0.5;

                    this.opacity =
                        Math.random() *
                        0.5 +
                        0.1;

                    this.color =
                        Math.random() >
                        0.7
                            ? "212, 175, 55"
                            : "255, 255, 255";

                }


                update() {

                    this.x +=
                        this.speedX;

                    this.y +=
                        this.speedY;


                    const dx =
                        mouseX -
                        this.x;

                    const dy =
                        mouseY -
                        this.y;

                    const distance =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );


                    if (
                        distance <
                        150
                    ) {

                        const force =
                            (
                                150 -
                                distance
                            ) /
                            150;

                        this.x -=
                            dx *
                            force *
                            0.02;

                        this.y -=
                            dy *
                            force *
                            0.02;

                    }


                    if (
                        this.x < 0 ||
                        this.x >
                            canvas.width ||
                        this.y < 0 ||
                        this.y >
                            canvas.height
                    ) {

                        this.reset();

                    }

                }


                draw() {

                    if (!ctx) {
                        return;
                    }


                    ctx.beginPath();


                    ctx.arc(
                        this.x,
                        this.y,
                        this.size,
                        0,
                        Math.PI * 2
                    );


                    ctx.fillStyle =
                        `rgba(${this.color}, ${this.opacity})`;


                    ctx.fill();

                }

            }


            function initParticles() {

                particles = [];


                const particleCount =
                    window.innerWidth <
                    768
                        ? 30
                        : 60;


                for (
                    let i = 0;
                    i < particleCount;
                    i++
                ) {

                    particles.push(
                        new Particle()
                    );

                }

            }


            function drawConnections() {

                if (!ctx) {
                    return;
                }


                for (
                    let i = 0;
                    i < particles.length;
                    i++
                ) {

                    for (
                        let j = i + 1;
                        j < particles.length;
                        j++
                    ) {

                        const dx =
                            particles[i].x -
                            particles[j].x;

                        const dy =
                            particles[i].y -
                            particles[j].y;

                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );


                        if (
                            distance <
                            120
                        ) {

                            ctx.beginPath();


                            ctx.moveTo(
                                particles[i].x,
                                particles[i].y
                            );


                            ctx.lineTo(
                                particles[j].x,
                                particles[j].y
                            );


                            ctx.strokeStyle =
                                `rgba(212, 175, 55, ${
                                    0.1 *
                                    (
                                        1 -
                                        distance /
                                        120
                                    )
                                })`;


                            ctx.lineWidth =
                                0.5;


                            ctx.stroke();

                        }

                    }

                }

            }


            function animateParticles() {

                if (!ctx) {
                    return;
                }


                ctx.clearRect(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );


                particles.forEach(
                    particle => {

                        particle.update();

                        particle.draw();

                    }
                );


                drawConnections();


                animationId =
                    requestAnimationFrame(
                        animateParticles
                    );

            }


            initParticles();

            animateParticles();


            document.addEventListener(
                "mousemove",
                e => {

                    mouseX =
                        e.clientX;

                    mouseY =
                        e.clientY;

                }
            );

        }


        /* =====================================================
           NAVIGATION
           ===================================================== */

        window.addEventListener(
            "scroll",
            () => {

                if (!navbar) {
                    return;
                }


                if (
                    window.scrollY >
                    50
                ) {

                    navbar.classList.add(
                        "scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "scrolled"
                    );

                }

            }
        );


        if (
            navToggle &&
            navMenu
        ) {

            navToggle.addEventListener(
                "click",
                () => {

                    navToggle.classList.toggle(
                        "active"
                    );

                    navMenu.classList.toggle(
                        "active"
                    );


                    document.body.style.overflow =
                        navMenu.classList.contains(
                            "active"
                        )
                            ? "hidden"
                            : "";

                }
            );

        }


        navLinks.forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        if (navToggle) {

                            navToggle.classList.remove(
                                "active"
                            );

                        }


                        if (navMenu) {

                            navMenu.classList.remove(
                                "active"
                            );

                        }


                        document.body.style.overflow =
                            "";

                    }
                );

            }
        );


        /* =====================================================
           ACTIVE NAVIGATION
           ===================================================== */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        window.addEventListener(
            "scroll",
            () => {

                let current = "";


                sections.forEach(
                    section => {

                        const sectionTop =
                            section.offsetTop -
                            100;


                        if (
                            window.scrollY >=
                            sectionTop
                        ) {

                            current =
                                section.getAttribute(
                                    "id"
                                );

                        }

                    }
                );


                navLinks.forEach(
                    link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${current}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );


        /* =====================================================
           GSAP ANIMATIONS
           ===================================================== */

        function initAnimations() {

            if (
                typeof gsap ===
                "undefined"
            ) {

                return;

            }


            if (
                typeof ScrollTrigger !==
                "undefined"
            ) {

                gsap.registerPlugin(
                    ScrollTrigger
                );

            }


            gsap.to(
                ".hero-badge",
                {

                    opacity: 1,

                    y: 0,

                    duration: 1,

                    ease: "power3.out",

                    delay: 0.2

                }
            );


            gsap.to(
                ".hero-title",
                {

                    opacity: 1,

                    y: 0,

                    duration: 1,

                    ease: "power3.out",

                    delay: 0.4

                }
            );


            gsap.to(
                ".hero-tagline",
                {

                    opacity: 1,

                    y: 0,

                    duration: 1,

                    ease: "power3.out",

                    delay: 0.6

                }
            );


            gsap.to(
                ".hero-meta",
                {

                    opacity: 1,

                    y: 0,

                    duration: 1,

                    ease: "power3.out",

                    delay: 0.8

                }
            );


            gsap.to(
                ".hero-cta",
                {

                    opacity: 1,

                    y: 0,

                    duration: 1,

                    ease: "power3.out",

                    delay: 1

                }
            );


            gsap.to(
                ".hero-fee",
                {

                    opacity: 1,

                    y: 0,

                    duration: 1,

                    ease: "power3.out",

                    delay: 1.2

                }
            );


            const fadeUpElements =
                document.querySelectorAll(
                    '[data-gsap="fade-up"]'
                );


            fadeUpElements.forEach(
                el => {

                    const delay =
                        parseFloat(
                            el.dataset.delay
                        ) || 0;


                    gsap.to(
                        el,
                        {

                            opacity: 1,

                            y: 0,

                            duration: 0.8,

                            ease: "power3.out",

                            delay: delay,

                            scrollTrigger: {

                                trigger: el,

                                start:
                                    "top 85%",

                                toggleActions:
                                    "play none none none"

                            }

                        }
                    );

                }
            );


            const fadeRightElements =
                document.querySelectorAll(
                    '[data-gsap="fade-right"]'
                );


            fadeRightElements.forEach(
                el => {

                    gsap.to(
                        el,
                        {

                            opacity: 1,

                            x: 0,

                            duration: 0.8,

                            ease: "power3.out",

                            scrollTrigger: {

                                trigger: el,

                                start:
                                    "top 85%",

                                toggleActions:
                                    "play none none none"

                            }

                        }
                    );

                }
            );


            const fadeLeftElements =
                document.querySelectorAll(
                    '[data-gsap="fade-left"]'
                );


            fadeLeftElements.forEach(
                el => {

                    gsap.to(
                        el,
                        {

                            opacity: 1,

                            x: 0,

                            duration: 0.8,

                            ease: "power3.out",

                            scrollTrigger: {

                                trigger: el,

                                start:
                                    "top 85%",

                                toggleActions:
                                    "play none none none"

                            }

                        }
                    );

                }
            );


            const timelineLine =
                document.querySelector(
                    ".timeline-line"
                );


            const timeline =
                document.querySelector(
                    ".timeline"
                );


            if (
                timelineLine &&
                timeline &&
                typeof ScrollTrigger !==
                "undefined"
            ) {

                gsap.to(
                    timelineLine,
                    {

                        scaleY: 1,

                        transformOrigin:
                            "top",

                        duration: 2,

                        ease: "power2.out",

                        scrollTrigger: {

                            trigger:
                                timeline,

                            start:
                                "top 70%",

                            toggleActions:
                                "play none none none"

                        }

                    }
                );

            }

        }


        /* =====================================================
           EVENT PAIR HELPERS
           ===================================================== */

        function getEventPair(
            eventName
        ) {

            return EVENT_PAIRS.find(
                pair =>
                    pair.includes(
                        eventName
                    )
            );

        }


        function getOppositeEvent(
            eventName
        ) {

            const pair =
                getEventPair(
                    eventName
                );


            if (!pair) {
                return null;
            }


            return pair.find(
                event =>
                    event !==
                    eventName
            );

        }


        /* =====================================================
           EVENT CARD MOUSE GLOW
           ===================================================== */

        eventCards.forEach(
            card => {

                card.addEventListener(
                    "mousemove",
                    e => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            (
                                (
                                    e.clientX -
                                    rect.left
                                ) /
                                rect.width
                            ) *
                            100;


                        const y =
                            (
                                (
                                    e.clientY -
                                    rect.top
                                ) /
                                rect.height
                            ) *
                            100;


                        card.style.setProperty(
                            "--mouse-x",
                            `${x}%`
                        );


                        card.style.setProperty(
                            "--mouse-y",
                            `${y}%`
                        );

                    }
                );

            }
        );


        /* =====================================================
           EVENT CARD CLICK
           ===================================================== */

        eventCards.forEach(
            card => {

                card.addEventListener(
                    "click",
                    () => {

                        const eventName =
                            card.dataset.event;


                        if (!eventName) {
                            return;
                        }


                        const isSelected =
                            card.classList.contains(
                                "selected"
                            );


                        if (
                            card.classList.contains(
                                "disabled"
                            )
                        ) {

                            showPairWarning(
                                eventName
                            );

                            shakeCard(
                                card
                            );

                            return;

                        }


                        /* DESELECT */

                        if (isSelected) {

                            card.classList.remove(
                                "selected"
                            );


                            selectedEvents =
                                selectedEvents.filter(
                                    event =>
                                        event !==
                                        eventName
                                );


                            updatePairStates();

                            hideWarning();

                        }


                        /* SELECT */

                        else {

                            if (
                                selectedEvents.length >=
                                MAX_EVENTS
                            ) {

                                showMaxWarning();

                                shakeCard(
                                    card
                                );

                                return;

                            }


                            card.classList.add(
                                "selected"
                            );


                            selectedEvents.push(
                                eventName
                            );


                            updatePairStates();

                            hideWarning();

                        }


                        updateCounter();

                        updateFormEventList();

                    }
                );

            }
        );


        /* =====================================================
           UPDATE EVENT PAIR STATES
           ===================================================== */

        function updatePairStates() {

            eventCards.forEach(
                card => {

                    const eventName =
                        card.dataset.event;


                    if (
                        selectedEvents.includes(
                            eventName
                        )
                    ) {

                        card.classList.remove(
                            "disabled"
                        );

                        return;

                    }


                    const pair =
                        getEventPair(
                            eventName
                        );


                    if (!pair) {
                        return;
                    }


                    const anotherSelected =
                        pair.some(
                            event =>
                                selectedEvents.includes(
                                    event
                                )
                        );


                    if (
                        anotherSelected
                    ) {

                        card.classList.add(
                            "disabled"
                        );

                    } else {

                        card.classList.remove(
                            "disabled"
                        );

                    }

                }
            );

        }


        /* =====================================================
           WARNING
           ===================================================== */

        function showMaxWarning() {

            if (!eventWarning) {
                return;
            }


            eventWarning.innerHTML =
                `
                    ⚠️ You can select a maximum of 5 events only.
                `;


            eventWarning.classList.add(
                "visible"
            );


            if (formEventWarning) {

                formEventWarning.classList.add(
                    "visible"
                );

            }


            setTimeout(
                () => {

                    eventWarning.classList.remove(
                        "visible"
                    );


                    if (formEventWarning) {

                        formEventWarning.classList.remove(
                            "visible"
                        );

                    }

                },
                3000
            );

        }


        function showPairWarning(
            eventName
        ) {

            if (!eventWarning) {
                return;
            }


            const oppositeEvent =
                getOppositeEvent(
                    eventName
                );


            if (!oppositeEvent) {
                return;
            }


            eventWarning.innerHTML =
                `
                    ⚠️ You already selected
                    <strong>${escapeHTML(oppositeEvent)}</strong>.
                    You can choose only one event from this pair.
                `;


            eventWarning.classList.add(
                "visible"
            );


            setTimeout(
                () => {

                    eventWarning.classList.remove(
                        "visible"
                    );

                },
                3000
            );

        }


        function hideWarning() {

            if (eventWarning) {

                eventWarning.classList.remove(
                    "visible"
                );

            }


            if (formEventWarning) {

                formEventWarning.classList.remove(
                    "visible"
                );

            }

        }


        /* =====================================================
           SHAKE
           ===================================================== */

        function shakeCard(
            card
        ) {

            if (!card) {
                return;
            }


            card.style.animation =
                "none";


            card.offsetHeight;


            card.style.animation =
                "shake 0.5s ease";


            setTimeout(
                () => {

                    card.style.animation =
                        "";

                },
                500
            );

        }


        const shakeStyle =
            document.createElement(
                "style"
            );


        shakeStyle.textContent =
            `
                @keyframes shake {

                    0%, 100% {
                        transform: translateX(0);
                    }

                    20% {
                        transform: translateX(-8px);
                    }

                    40% {
                        transform: translateX(8px);
                    }

                    60% {
                        transform: translateX(-4px);
                    }

                    80% {
                        transform: translateX(4px);
                    }

                }
            `;


        document.head.appendChild(
            shakeStyle
        );


        /* =====================================================
           COUNTER
           ===================================================== */

        function updateCounter() {

            if (!selectedCountEl) {
                return;
            }


            selectedCountEl.textContent =
                selectedEvents.length;


            if (
                typeof gsap !==
                "undefined"
            ) {

                gsap.fromTo(
                    selectedCountEl,
                    {

                        scale: 1.5,

                        color: "#d4af37"

                    },
                    {

                        scale: 1,

                        color: "#d4af37",

                        duration: 0.3,

                        ease: "power2.out"

                    }
                );

            }

        }


        /* =====================================================
           FORM EVENT LIST
           ===================================================== */

        function updateFormEventList() {

            if (!formEventList) {
                return;
            }


            if (
                selectedEvents.length ===
                0
            ) {

                formEventList.innerHTML =
                    `
                        <p class="no-events">
                            No events selected.
                            Please select events from
                            the Events section above.
                        </p>
                    `;

                return;

            }


            formEventList.innerHTML =
                selectedEvents
                    .map(
                        event =>
                            `
                                <span
                                    class="form-event-tag"
                                    data-event="${escapeHTML(event)}"
                                >

                                    ${escapeHTML(event)}

                                    <span
                                        class="remove-tag"
                                        data-remove-event="${escapeHTML(event)}"
                                    >

                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >

                                            <line
                                                x1="18"
                                                y1="6"
                                                x2="6"
                                                y2="18"
                                            >
                                            </line>

                                            <line
                                                x1="6"
                                                y1="6"
                                                x2="18"
                                                y2="18"
                                            >
                                            </line>

                                        </svg>

                                    </span>

                                </span>
                            `
                    )
                    .join("");


            formEventList
                .querySelectorAll(
                    "[data-remove-event]"
                )
                .forEach(
                    button => {

                        button.addEventListener(
                            "click",
                            e => {

                                e.stopPropagation();


                                removeEvent(
                                    button.dataset
                                        .removeEvent
                                );

                            }
                        );

                    }
                );

        }


        /* =====================================================
           ESCAPE HTML
           ===================================================== */

        function escapeHTML(
            value
        ) {

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


        /* =====================================================
           REMOVE EVENT
           ===================================================== */

        function removeEvent(
            eventName
        ) {

            selectedEvents =
                selectedEvents.filter(
                    event =>
                        event !==
                        eventName
                );


            eventCards.forEach(
                card => {

                    if (
                        card.dataset.event ===
                        eventName
                    ) {

                        card.classList.remove(
                            "selected"
                        );

                    }

                }
            );


            updatePairStates();

            updateCounter();

            updateFormEventList();

            hideWarning();

        }


        window.removeEvent =
            removeEvent;


        /* =====================================================
           FORM MESSAGE
           ===================================================== */

        function showFormMessage(
            message,
            type
        ) {

            if (!formMessage) {
                return;
            }


            formMessage.textContent =
                message;


            formMessage.className =
                `form-message ${type}`;


            formMessage.style.display =
                "block";


            if (
                typeof gsap !==
                "undefined"
            ) {

                gsap.fromTo(
                    formMessage,
                    {

                        opacity: 0,

                        y: -10

                    },
                    {

                        opacity: 1,

                        y: 0,

                        duration: 0.3

                    }
                );

            }

        }


        function hideFormMessage() {

            if (!formMessage) {
                return;
            }


            formMessage.className =
                "form-message";


            formMessage.style.display =
                "none";

        }


        /* =====================================================
           FILE TO BASE64
           ===================================================== */

        function fileToBase64(
            file
        ) {

            return new Promise(
                (
                    resolve,
                    reject
                ) => {

                    const reader =
                        new FileReader();


                    reader.onload =
                        () => {

                            try {

                                const result =
                                    reader.result;


                                const base64 =
                                    result
                                        .split(
                                            ","
                                        )[1];


                                resolve(
                                    base64
                                );

                            } catch (
                                error
                            ) {

                                reject(
                                    error
                                );

                            }

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


        /* =====================================================
           COMPRESS PAYMENT SCREENSHOT
           ===================================================== */

        function compressPaymentImage(
            file
        ) {

            return new Promise(
                (
                    resolve,
                    reject
                ) => {

                    const reader =
                        new FileReader();


                    reader.onload =
                        event => {

                            const img =
                                new Image();


                            img.onload =
                                () => {

                                    let width =
                                        img.width;

                                    let height =
                                        img.height;


                                    /* =================================
                                       RESIZE LARGE IMAGES
                                       ================================= */

                                    if (
                                        width >
                                        MAX_PAYMENT_IMAGE_WIDTH
                                    ) {

                                        const ratio =
                                            MAX_PAYMENT_IMAGE_WIDTH /
                                            width;

                                        width =
                                            MAX_PAYMENT_IMAGE_WIDTH;

                                        height =
                                            Math.round(
                                                height *
                                                ratio
                                            );

                                    }


                                    const canvas =
                                        document.createElement(
                                            "canvas"
                                        );


                                    canvas.width =
                                        width;

                                    canvas.height =
                                        height;


                                    const context =
                                        canvas.getContext(
                                            "2d"
                                        );


                                    context.drawImage(
                                        img,
                                        0,
                                        0,
                                        width,
                                        height
                                    );


                                    canvas.toBlob(
                                        blob => {

                                            if (!blob) {

                                                reject(
                                                    new Error(
                                                        "Unable to compress payment screenshot."
                                                    )
                                                );

                                                return;

                                            }


                                            resolve(
                                                blob
                                            );

                                        },
                                        "image/jpeg",
                                        PAYMENT_IMAGE_QUALITY
                                    );

                                };


                            img.onerror =
                                () => {

                                    reject(
                                        new Error(
                                            "Invalid payment screenshot."
                                        )
                                    );

                                };


                            img.src =
                                event.target.result;

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


        /* =====================================================
           SUCCESS MODAL
           ===================================================== */

        function showSuccessModal(
            registrationId
        ) {

            if (!successModal) {
                return;
            }


            const registrationIdElement =
                successModal.querySelector(
                    "[data-registration-id]"
                );


            if (
                registrationIdElement
            ) {

                registrationIdElement.textContent =
                    registrationId ||
                    "";

            }


            successModal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }


        function hideSuccessModal() {

            if (!successModal) {
                return;
            }


            successModal.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";

        }


        if (modalClose) {

            modalClose.addEventListener(
                "click",
                hideSuccessModal
            );

        }


        if (successModal) {

            const backdrop =
                successModal.querySelector(
                    ".modal-backdrop"
                );


            if (backdrop) {

                backdrop.addEventListener(
                    "click",
                    hideSuccessModal
                );

            }

        }


        /* =====================================================
           PAYMENT FILE PREVIEW / VALIDATION
           ===================================================== */

        if (paymentInput) {

            paymentInput.addEventListener(
                "change",
                () => {

                    const file =
                        paymentInput.files?.[0];


                    if (!file) {
                        return;
                    }


                    if (
                        ![
                            "image/jpeg",
                            "image/jpg",
                            "image/png"
                        ].includes(
                            file.type
                        )
                    ) {

                        showFormMessage(
                            "Please upload a JPG or PNG payment screenshot.",
                            "error"
                        );


                        paymentInput.value =
                            "";


                        return;

                    }


                    if (
                        file.size >
                        MAX_PAYMENT_FILE_SIZE
                    ) {

                        showFormMessage(
                            "Payment screenshot must be smaller than 5 MB.",
                            "error"
                        );


                        paymentInput.value =
                            "";


                        return;

                    }


                    hideFormMessage();

                }
            );

        }


        /* =====================================================
           FORM SUBMIT
           ===================================================== */

        if (form) {

            form.addEventListener(
                "submit",
                async e => {

                    e.preventDefault();


                    /* =========================================
                       EVENT VALIDATION
                       ========================================= */

                    if (
                        selectedEvents.length ===
                        0
                    ) {

                        showFormMessage(
                            "Please select at least one event.",
                            "error"
                        );

                        return;

                    }


                    if (
                        selectedEvents.length >
                        MAX_EVENTS
                    ) {

                        showFormMessage(
                            `You can only select up to ${MAX_EVENTS} events.`,
                            "error"
                        );

                        return;

                    }


                    /* =========================================
                       PAIR VALIDATION
                       ========================================= */

                    for (
                        const pair
                        of EVENT_PAIRS
                    ) {

                        const selectedInPair =
                            pair.filter(
                                event =>
                                    selectedEvents.includes(
                                        event
                                    )
                            );


                        if (
                            selectedInPair.length >
                            1
                        ) {

                            showFormMessage(
                                "Please select only one event from each pair.",
                                "error"
                            );

                            return;

                        }

                    }


                    /* =========================================
                       GET FORM VALUES
                       ========================================= */

                    const name =
                        document
                            .getElementById(
                                "name"
                            )
                            ?.value
                            .trim();


                    const college =
                        document
                            .getElementById(
                                "college"
                            )
                            ?.value
                            .trim();


                    const department =
                        document
                            .getElementById(
                                "department"
                            )
                            ?.value;


                    const year =
                        document
                            .getElementById(
                                "year"
                            )
                            ?.value;


                    const phone =
                        document
                            .getElementById(
                                "phone"
                            )
                            ?.value
                            .trim();


                    const email =
                        document
                            .getElementById(
                                "email"
                            )
                            ?.value
                            .trim();


                    /* =========================================
                       PHONE VALIDATION
                       ========================================= */

                    if (
                        !phone ||
                        !/^\d{10}$/.test(
                            phone
                        )
                    ) {

                        showFormMessage(
                            "Please enter a valid 10-digit phone number.",
                            "error"
                        );

                        return;

                    }


                    /* =========================================
                       BASIC VALIDATION
                       ========================================= */

                    if (
                        !name ||
                        !college ||
                        !department ||
                        !year ||
                        !email
                    ) {

                        showFormMessage(
                            "Please fill in all required fields.",
                            "error"
                        );

                        return;

                    }


                    /* =========================================
                       EMAIL VALIDATION
                       ========================================= */

                    const emailRegex =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                    if (
                        !emailRegex.test(
                            email
                        )
                    ) {

                        showFormMessage(
                            "Please enter a valid email address.",
                            "error"
                        );

                        return;

                    }


                    /* =========================================
                       PAYMENT FILE
                       ========================================= */

                    const paymentFile =
                        paymentInput?.files?.[0];


                    if (!paymentFile) {

                        showFormMessage(
                            "Please upload your payment screenshot.",
                            "error"
                        );

                        return;

                    }


                    /* =========================================
                       PAYMENT FILE TYPE
                       ========================================= */

                    if (
                        ![
                            "image/jpeg",
                            "image/jpg",
                            "image/png"
                        ].includes(
                            paymentFile.type
                        )
                    ) {

                        showFormMessage(
                            "Please upload a JPG or PNG payment screenshot.",
                            "error"
                        );

                        return;

                    }


                    /* =========================================
                       PAYMENT FILE SIZE
                       ========================================= */

                    if (
                        paymentFile.size >
                        MAX_PAYMENT_FILE_SIZE
                    ) {

                        showFormMessage(
                            "Payment screenshot must be smaller than 5 MB.",
                            "error"
                        );

                        return;

                    }


                    /* =========================================
                       LOADING
                       ========================================= */

                    if (submitBtn) {

                        submitBtn.classList.add(
                            "loading"
                        );

                        submitBtn.disabled =
                            true;

                    }


                    hideFormMessage();


                    /* =========================================
                       SEND TO GOOGLE APPS SCRIPT
                       ========================================= */

                    try {

                        /* =====================================
                           COMPRESS IMAGE
                           ===================================== */

                        showFormMessage(
                            "Preparing payment screenshot...",
                            "success"
                        );


                        const compressedFile =
                            await compressPaymentImage(
                                paymentFile
                            );


                        /* =====================================
                           CONVERT TO BASE64
                           ===================================== */

                        const paymentBase64 =
                            await fileToBase64(
                                compressedFile
                            );


                        /* =====================================
                           CREATE REQUEST
                           ===================================== */

                        const googleData =
                            new URLSearchParams();


                        googleData.append(
                            "name",
                            name
                        );


                        googleData.append(
                            "college",
                            college
                        );


                        googleData.append(
                            "department",
                            department
                        );


                        googleData.append(
                            "year",
                            year
                        );


                        googleData.append(
                            "phone",
                            phone
                        );


                        googleData.append(
                            "email",
                            email
                        );


                        googleData.append(
                            "events",
                            selectedEvents.join(
                                ", "
                            )
                        );


                        /* =====================================
                           PAYMENT SCREENSHOT
                           ===================================== */

                        googleData.append(
                            "paymentScreenshotData",
                            paymentBase64
                        );


                        googleData.append(
                            "paymentScreenshotName",
                            paymentFile.name
                        );


                        /*
                         * Since the image is converted to JPEG,
                         * tell Apps Script it is JPEG.
                         */

                        googleData.append(
                            "paymentScreenshotType",
                            "image/jpeg"
                        );


                        console.log(
                            "Sending registration:",
                            {

                                name,

                                college,

                                department,

                                year,

                                phone,

                                email,

                                events:
                                    selectedEvents,

                                paymentScreenshot:
                                    paymentFile.name

                            }
                        );


                        /* =====================================
                           FETCH
                           ===================================== */

                        const response =
                            await fetch(
                                GOOGLE_SCRIPT_URL,
                                {

                                    method:
                                        "POST",

                                    body:
                                        googleData

                                }
                            );


                        /* =====================================
                           READ RESPONSE
                           ===================================== */

                        const responseText =
                            await response.text();


                        console.log(
                            "Google Apps Script response:",
                            responseText
                        );


                        let result;


                        try {

                            result =
                                JSON.parse(
                                    responseText
                                );

                        } catch (
                            parseError
                        ) {

                            console.error(
                                "Invalid Google Apps Script response:",
                                responseText
                            );


                            throw new Error(
                                "Invalid response received from Google Apps Script."
                            );

                        }


                        /* =====================================
                           SUCCESS
                           ===================================== */

                        if (
                            result.success
                        ) {

                            showSuccessModal(
                                result.registrationId
                            );


                            form.reset();


                            selectedEvents =
                                [];


                            eventCards.forEach(
                                card => {

                                    card.classList.remove(
                                        "selected"
                                    );

                                    card.classList.remove(
                                        "disabled"
                                    );

                                }
                            );


                            updateCounter();

                            updateFormEventList();

                            hideFormMessage();

                        }


                        /* =====================================
                           FAILED
                           ===================================== */

                        else {

                            showFormMessage(
                                result.message ||
                                "Registration failed. Please try again.",
                                "error"
                            );

                        }


                    } catch (
                        error
                    ) {

                        console.error(
                            "Registration Error:",
                            error
                        );


                        showFormMessage(
                            error.message ||
                            "Network error. Please check your connection and try again.",
                            "error"
                        );

                    }


                    /* =========================================
                       REMOVE LOADING
                       ========================================= */

                    finally {

                        if (submitBtn) {

                            submitBtn.classList.remove(
                                "loading"
                            );

                            submitBtn.disabled =
                                false;

                        }

                    }

                }
            );

        }


        /* =====================================================
           SMOOTH SCROLL
           ===================================================== */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                anchor => {

                    anchor.addEventListener(
                        "click",
                        function (e) {

                            const href =
                                this.getAttribute(
                                    "href"
                                );


                            if (
                                !href ||
                                href === "#"
                            ) {

                                return;

                            }


                            const target =
                                document.querySelector(
                                    href
                                );


                            if (!target) {
                                return;
                            }


                            e.preventDefault();


                            const offset =
                                80;


                            const targetPosition =
                                target
                                    .getBoundingClientRect()
                                    .top +
                                window.pageYOffset -
                                offset;


                            window.scrollTo(
                                {

                                    top:
                                        targetPosition,

                                    behavior:
                                        "smooth"

                                }
                            );

                        }
                    );

                }
            );


        /* =====================================================
           INPUT FOCUS EFFECT
           ===================================================== */

        const inputs =
            document.querySelectorAll(
                ".form-group input, .form-group select"
            );


        inputs.forEach(
            input => {

                input.addEventListener(
                    "focus",
                    () => {

                        if (
                            input.parentElement
                        ) {

                            input.parentElement.style.transform =
                                "scale(1.01)";

                        }

                    }
                );


                input.addEventListener(
                    "blur",
                    () => {

                        if (
                            input.parentElement
                        ) {

                            input.parentElement.style.transform =
                                "scale(1)";

                        }

                    }
                );

            }
        );


        /* =====================================================
           HERO PARALLAX
           ===================================================== */

        window.addEventListener(
            "scroll",
            () => {

                const scrolled =
                    window.pageYOffset;


                const heroContent =
                    document.querySelector(
                        ".hero-content"
                    );


                const heroGlow =
                    document.querySelector(
                        ".hero-glow"
                    );


                if (
                    heroContent &&
                    scrolled <
                        window.innerHeight
                ) {

                    heroContent.style.transform =
                        `translateY(${scrolled * 0.3}px)`;


                    heroContent.style.opacity =
                        1 -
                        (
                            scrolled /
                            window.innerHeight
                        ) *
                        0.8;

                }


                if (
                    heroGlow &&
                    scrolled <
                        window.innerHeight
                ) {

                    heroGlow.style.transform =
                        `translate(-50%, -50%) translateY(${scrolled * 0.2}px)`;

                }

            }
        );


        /* =====================================================
           PAUSE PARTICLES WHEN TAB HIDDEN
           ===================================================== */

        document.addEventListener(
            "visibilitychange",
            () => {

                if (!ctx) {
                    return;
                }


                if (
                    document.hidden
                ) {

                    cancelAnimationFrame(
                        animationId
                    );

                } else {

                    animateParticles();

                }

            }
        );


        /* =====================================================
           INITIAL EVENT STATE
           ===================================================== */

        updateCounter();

        updateFormEventList();

        updatePairStates();

    }
);