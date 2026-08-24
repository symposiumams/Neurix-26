/* ============================================
   NEURIX'26 - JavaScript
   Particles | GSAP | Form Handling | Events
   Event Pair Selection System
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // LOADER
    // ============================================

    const loader = document.getElementById('loader');

    window.addEventListener('load', () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add('hidden');
            }

            initAnimations();

        }, 2200);

    });


    // ============================================
    // PARTICLE SYSTEM
    // ============================================

    const canvas = document.getElementById('particle-canvas');

    let ctx = null;
    let particles = [];
    let animationId;
    let mouseX = 0;
    let mouseY = 0;

    if (canvas) {

        ctx = canvas.getContext('2d');

        function resizeCanvas() {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

        }

        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);


        class Particle {

            constructor() {
                this.reset();
            }


            reset() {

                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                this.size = Math.random() * 2 + 0.5;

                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;

                this.opacity = Math.random() * 0.5 + 0.1;

                this.color =
                    Math.random() > 0.7
                        ? '212, 175, 55'
                        : '255, 255, 255';

            }


            update() {

                this.x += this.speedX;
                this.y += this.speedY;


                // Mouse interaction

                const dx = mouseX - this.x;
                const dy = mouseY - this.y;

                const distance =
                    Math.sqrt(dx * dx + dy * dy);


                if (distance < 150) {

                    const force =
                        (150 - distance) / 150;

                    this.x -= dx * force * 0.02;
                    this.y -= dy * force * 0.02;

                }


                // Reset when outside screen

                if (
                    this.x < 0 ||
                    this.x > canvas.width ||
                    this.y < 0 ||
                    this.y > canvas.height
                ) {

                    this.reset();

                }

            }


            draw() {

                if (!ctx) return;

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
                window.innerWidth < 768 ? 30 : 60;

            for (let i = 0; i < particleCount; i++) {

                particles.push(
                    new Particle()
                );

            }

        }


        function drawConnections() {

            if (!ctx) return;

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
                        Math.sqrt(dx * dx + dy * dy);


                    if (distance < 120) {

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
                                (1 - distance / 120)
                            })`;

                        ctx.lineWidth = 0.5;

                        ctx.stroke();

                    }

                }

            }

        }


        function animateParticles() {

            if (!ctx) return;

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );


            particles.forEach(particle => {

                particle.update();
                particle.draw();

            });


            drawConnections();


            animationId =
                requestAnimationFrame(
                    animateParticles
                );

        }


        initParticles();
        animateParticles();


        document.addEventListener(
            'mousemove',
            (e) => {

                mouseX = e.clientX;
                mouseY = e.clientY;

            }
        );

    }


    // ============================================
    // NAVIGATION
    // ============================================

    const navbar =
        document.getElementById('navbar');

    const navToggle =
        document.getElementById('navToggle');

    const navMenu =
        document.getElementById('navMenu');

    const navLinks =
        document.querySelectorAll('.nav-link');


    // Scroll effect

    window.addEventListener('scroll', () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add('scrolled');

        } else {

            navbar.classList.remove('scrolled');

        }

    });


    // Mobile toggle

    if (navToggle && navMenu) {

        navToggle.addEventListener(
            'click',
            () => {

                navToggle.classList.toggle(
                    'active'
                );

                navMenu.classList.toggle(
                    'active'
                );

                document.body.style.overflow =
                    navMenu.classList.contains('active')
                        ? 'hidden'
                        : '';

            }
        );

    }


    // Close mobile menu

    navLinks.forEach(link => {

        link.addEventListener('click', () => {

            if (navToggle) {
                navToggle.classList.remove(
                    'active'
                );
            }

            if (navMenu) {
                navMenu.classList.remove(
                    'active'
                );
            }

            document.body.style.overflow = '';

        });

    });


    // Active nav link on scroll

    const sections =
        document.querySelectorAll(
            'section[id]'
        );


    window.addEventListener('scroll', () => {

        let current = '';


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 100;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute('id');

            }

        });


        navLinks.forEach(link => {

            link.classList.remove('active');


            if (
                link.getAttribute('href') ===
                `#${current}`
            ) {

                link.classList.add('active');

            }

        });

    });


    // ============================================
    // GSAP ANIMATIONS
    // ============================================

    function initAnimations() {

        if (typeof gsap === 'undefined') {
            return;
        }


        if (
            typeof ScrollTrigger !==
            'undefined'
        ) {

            gsap.registerPlugin(
                ScrollTrigger
            );

        }


        // Hero

        gsap.to('.hero-badge', {

            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2

        });


        gsap.to('.hero-title', {

            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.4

        });


        gsap.to('.hero-tagline', {

            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.6

        });


        gsap.to('.hero-meta', {

            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.8

        });


        gsap.to('.hero-cta', {

            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 1.0

        });


        gsap.to('.hero-fee', {

            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 1.2

        });


        // Scroll animations

        const fadeUpElements =
            document.querySelectorAll(
                '[data-gsap="fade-up"]'
            );


        fadeUpElements.forEach(el => {

            const delay =
                parseFloat(
                    el.dataset.delay
                ) || 0;


            gsap.to(el, {

                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: delay,

                scrollTrigger: {

                    trigger: el,
                    start: 'top 85%',
                    toggleActions:
                        'play none none none'

                }

            });

        });


        // Fade right

        const fadeRightElements =
            document.querySelectorAll(
                '[data-gsap="fade-right"]'
            );


        fadeRightElements.forEach(el => {

            gsap.to(el, {

                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',

                scrollTrigger: {

                    trigger: el,
                    start: 'top 85%',
                    toggleActions:
                        'play none none none'

                }

            });

        });


        // Fade left

        const fadeLeftElements =
            document.querySelectorAll(
                '[data-gsap="fade-left"]'
            );


        fadeLeftElements.forEach(el => {

            gsap.to(el, {

                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',

                scrollTrigger: {

                    trigger: el,
                    start: 'top 85%',
                    toggleActions:
                        'play none none none'

                }

            });

        });


        // Timeline

        const timelineLine =
            document.querySelector(
                '.timeline-line'
            );


        const timeline =
            document.querySelector(
                '.timeline'
            );


        if (
            timelineLine &&
            timeline &&
            typeof ScrollTrigger !==
            'undefined'
        ) {

            gsap.to(
                timelineLine,
                {

                    scaleY: 1,
                    transformOrigin: 'top',
                    duration: 2,
                    ease: 'power2.out',

                    scrollTrigger: {

                        trigger: timeline,
                        start: 'top 70%',
                        toggleActions:
                            'play none none none'

                    }

                }
            );

        }

    }


    // ============================================
    // EVENT CARD SELECTION
    // ============================================

    const MAX_EVENTS = 5;

    let selectedEvents = [];


    const eventCards =
        document.querySelectorAll(
            '.event-card'
        );


    const selectedCountEl =
        document.getElementById(
            'selectedCount'
        );


    const eventWarning =
        document.getElementById(
            'eventWarning'
        );


    const formEventList =
        document.getElementById(
            'formEventList'
        );


    const formEventWarning =
        document.getElementById(
            'formEventWarning'
        );


    // ============================================
    // EVENT PAIR CONFIGURATION
    // ============================================

    /*
        ONLY ONE EVENT CAN BE SELECTED
        FROM EACH PAIR.

        Pair 1:
        Paper Presentation OR Treasure Hunt

        Pair 2:
        Debate OR Drawing

        Pair 3:
        Technical Quiz OR Find the BGM

        Pair 4:
        Debugging OR Photography

        Pair 5:
        Connections OR E-Sports
    */

    const EVENT_PAIRS = [

        [
            'Paper Presentation',
            'Treasure Hunt'
        ],

        [
            'Debate',
            'Drawing'
        ],

        [
            'Technical Quiz',
            'Find the BGM'
        ],

        [
            'Debugging',
            'Photography'
        ],

        [
            'Connections',
            'E-Sports'
        ]

    ];


    // ============================================
    // FIND EVENT PAIR
    // ============================================

    function getEventPair(eventName) {

        return EVENT_PAIRS.find(
            pair =>
                pair.includes(eventName)
        );

    }


    // ============================================
    // FIND OPPOSITE EVENT
    // ============================================

    function getOppositeEvent(eventName) {

        const pair =
            getEventPair(eventName);


        if (!pair) {
            return null;
        }


        return pair.find(
            event =>
                event !== eventName
        );

    }


    // ============================================
    // CARD MOUSE GLOW
    // ============================================

    eventCards.forEach(card => {

        card.addEventListener(
            'mousemove',
            (e) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    (
                        (e.clientX -
                            rect.left) /
                        rect.width
                    ) * 100;


                const y =
                    (
                        (e.clientY -
                            rect.top) /
                        rect.height
                    ) * 100;


                card.style.setProperty(
                    '--mouse-x',
                    `${x}%`
                );


                card.style.setProperty(
                    '--mouse-y',
                    `${y}%`
                );

            }
        );

    });


    // ============================================
    // EVENT CARD CLICK
    // ============================================

    eventCards.forEach(card => {

        card.addEventListener(
            'click',
            () => {

                const eventName =
                    card.dataset.event;


                const isSelected =
                    card.classList.contains(
                        'selected'
                    );


                // ==================================
                // IF CARD IS DISABLED
                // ==================================

                if (
                    card.classList.contains(
                        'disabled'
                    )
                ) {

                    showPairWarning(
                        eventName
                    );

                    shakeCard(card);

                    return;

                }


                // ==================================
                // DESELECT
                // ==================================

                if (isSelected) {

                    card.classList.remove(
                        'selected'
                    );


                    selectedEvents =
                        selectedEvents.filter(
                            event =>
                                event !==
                                eventName
                        );


                    hideWarning();


                    // Re-enable opposite
                    updatePairStates();

                }


                // ==================================
                // SELECT
                // ==================================

                else {

                    // Maximum 5

                    if (
                        selectedEvents.length >=
                        MAX_EVENTS
                    ) {

                        showMaxWarning();

                        shakeCard(card);

                        return;

                    }


                    // Select

                    card.classList.add(
                        'selected'
                    );


                    selectedEvents.push(
                        eventName
                    );


                    // Disable opposite

                    updatePairStates();


                    hideWarning();

                }


                updateCounter();
                updateFormEventList();

            }
        );

    });


    // ============================================
    // UPDATE PAIR STATES
    // ============================================

    function updatePairStates() {

        eventCards.forEach(card => {

            const eventName =
                card.dataset.event;


            // Selected card should
            // never be disabled

            if (
                selectedEvents.includes(
                    eventName
                )
            ) {

                card.classList.remove(
                    'disabled'
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


            // Check whether another
            // event in this pair
            // is selected

            const anotherSelected =
                pair.some(
                    event =>
                        selectedEvents.includes(
                            event
                        )
                );


            if (anotherSelected) {

                card.classList.add(
                    'disabled'
                );

            } else {

                card.classList.remove(
                    'disabled'
                );

            }

        });

    }


    // ============================================
    // MAXIMUM 5 WARNING
    // ============================================

    function showMaxWarning() {

        if (!eventWarning) {
            return;
        }


        eventWarning.innerHTML = `

            <svg width="18"
                 height="18"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2">

                <path d="
                    M10.29 3.86
                    L1.82 18
                    a2 2 0 0 0 1.71 3
                    h16.94
                    a2 2 0 0 0 1.71-3
                    L13.71 3.86
                    a2 2 0 0 0-3.42 0z
                "></path>

                <line
                    x1="12"
                    y1="9"
                    x2="12"
                    y2="13">
                </line>

                <line
                    x1="12"
                    y1="17"
                    x2="12.01"
                    y2="17">
                </line>

            </svg>

            You can select a maximum
            of 5 events only.

        `;


        eventWarning.classList.add(
            'visible'
        );


        if (formEventWarning) {

            formEventWarning.classList.add(
                'visible'
            );

        }


        setTimeout(() => {

            eventWarning.classList.remove(
                'visible'
            );


            if (formEventWarning) {

                formEventWarning.classList.remove(
                    'visible'
                );

            }

        }, 3000);

    }


    // ============================================
    // PAIR WARNING
    // ============================================

    function showPairWarning(eventName) {

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


        eventWarning.innerHTML = `

            <svg width="18"
                 height="18"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2">

                <path d="
                    M10.29 3.86
                    L1.82 18
                    a2 2 0 0 0 1.71 3
                    h16.94
                    a2 2 0 0 0 1.71-3
                    L13.71 3.86
                    a2 2 0 0 0-3.42 0z
                "></path>

                <line
                    x1="12"
                    y1="9"
                    x2="12"
                    y2="13">
                </line>

                <line
                    x1="12"
                    y1="17"
                    x2="12.01"
                    y2="17">
                </line>

            </svg>

            You already selected
            <strong>${oppositeEvent}</strong>.
            You can choose only one
            event from this pair.

        `;


        eventWarning.classList.add(
            'visible'
        );


        setTimeout(() => {

            eventWarning.classList.remove(
                'visible'
            );

        }, 3000);

    }


    // ============================================
    // HIDE WARNING
    // ============================================

    function hideWarning() {

        if (eventWarning) {

            eventWarning.classList.remove(
                'visible'
            );

        }


        if (formEventWarning) {

            formEventWarning.classList.remove(
                'visible'
            );

        }

    }


    // ============================================
    // SHAKE ANIMATION
    // ============================================

    function shakeCard(card) {

        if (!card) {
            return;
        }


        card.style.animation = 'none';


        // Force browser reflow

        card.offsetHeight;


        card.style.animation =
            'shake 0.5s ease';


        setTimeout(() => {

            card.style.animation = '';

        }, 500);

    }


    // ============================================
    // SHAKE CSS
    // ============================================

    const shakeStyle =
        document.createElement(
            'style'
        );


    shakeStyle.textContent = `

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


    // ============================================
    // COUNTER
    // ============================================

    function updateCounter() {

        if (!selectedCountEl) {
            return;
        }


        selectedCountEl.textContent =
            selectedEvents.length;


        if (typeof gsap !== 'undefined') {

            gsap.fromTo(

                selectedCountEl,

                {
                    scale: 1.5,
                    color: '#d4af37'
                },

                {
                    scale: 1,
                    color: '#d4af37',
                    duration: 0.3,
                    ease: 'power2.out'
                }

            );

        }

    }


    // ============================================
    // FORM EVENT LIST
    // ============================================

    function updateFormEventList() {

        if (!formEventList) {
            return;
        }


        if (
            selectedEvents.length === 0
        ) {

            formEventList.innerHTML = `

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
                .map(event => `

                    <span
                        class="form-event-tag"
                        data-event="${event}"
                    >

                        ${event}

                        <span
                            class="remove-tag"
                            onclick="removeEvent('${event}')"
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
                                    y2="18">
                                </line>

                                <line
                                    x1="6"
                                    y1="6"
                                    x2="18"
                                    y2="18">
                                </line>

                            </svg>

                        </span>

                    </span>

                `)
                .join('');

    }


    // ============================================
    // REMOVE EVENT FROM FORM
    // ============================================

    window.removeEvent = function(
        eventName
    ) {

        selectedEvents =
            selectedEvents.filter(
                event =>
                    event !== eventName
            );


        // Remove selected state

        eventCards.forEach(card => {

            if (
                card.dataset.event ===
                eventName
            ) {

                card.classList.remove(
                    'selected'
                );

            }

        });


        // Re-enable paired event

        updatePairStates();


        updateCounter();

        updateFormEventList();


        hideWarning();

    };


    // ============================================
    // FORM HANDLING
    // ============================================

    const form =
        document.getElementById(
            'registrationForm'
        );


    const submitBtn =
        document.getElementById(
            'submitBtn'
        );


    const formMessage =
        document.getElementById(
            'formMessage'
        );


    const successModal =
        document.getElementById(
            'successModal'
        );


    const modalClose =
        document.querySelector(
            '.modal-close'
        );


    // ============================================
    // GOOGLE APPS SCRIPT
    // ============================================

    const GOOGLE_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbwnAxoue7w2VfHLpYmaWDTE_lyD4O08AnM3T2DcrGagPbqpHn6MK3aWOk2FtZY-9PdbgQ/exec';


    // ============================================
    // FORM SUBMIT
    // ============================================

    if (form) {

        form.addEventListener(
            'submit',
            async (e) => {

                e.preventDefault();


                // ==================================
                // EVENT VALIDATION
                // ==================================

                if (
                    selectedEvents.length ===
                    0
                ) {

                    showFormMessage(
                        'Please select at least one event.',
                        'error'
                    );

                    return;

                }


                // ==================================
                // MAX EVENTS VALIDATION
                // ==================================

                if (
                    selectedEvents.length >
                    MAX_EVENTS
                ) {

                    showFormMessage(
                        `You can only select up to ${MAX_EVENTS} events.`,
                        'error'
                    );

                    return;

                }


                // ==================================
                // PAIR VALIDATION
                // ==================================

                let pairViolation =
                    false;


                EVENT_PAIRS.forEach(pair => {

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

                        pairViolation = true;

                    }

                });


                if (pairViolation) {

                    showFormMessage(
                        'Please select only one event from each pair.',
                        'error'
                    );

                    return;

                }


                // ==================================
                // PHONE VALIDATION
                // ==================================

                const phone =
                    document.getElementById(
                        'phone'
                    )?.value.trim();


                if (
                    !phone ||
                    !/^\d{10}$/.test(phone)
                ) {

                    showFormMessage(
                        'Please enter a valid 10-digit phone number.',
                        'error'
                    );

                    return;

                }


                // ==================================
                // FORM DATA
                // ==================================

                const formData = {

                    name:
                        document.getElementById(
                            'name'
                        )?.value.trim(),

                    college:
                        document.getElementById(
                            'college'
                        )?.value.trim(),

                    department:
                        document.getElementById(
                            'department'
                        )?.value,

                    year:
                        document.getElementById(
                            'year'
                        )?.value,

                    phone:
                        phone,

                    email:
                        document.getElementById(
                            'email'
                        )?.value.trim(),

                    events:
                        selectedEvents

                };


                // ==================================
                // LOADING STATE
                // ==================================

                if (submitBtn) {

                    submitBtn.classList.add(
                        'loading'
                    );

                    submitBtn.disabled = true;

                }


                hideFormMessage();


                // ==================================
                // SEND TO GOOGLE SHEETS
                // ==================================

                try {

                    const response =
                        await fetch(
                            GOOGLE_SCRIPT_URL,
                            {

                                method: 'POST',

                                headers: {

                                    'Content-Type':
                                        'application/json'

                                },

                                body:
                                    JSON.stringify(
                                        formData
                                    )

                            }
                        );


                    const result =
                        await response.json();


                    // ==================================
                    // SUCCESS
                    // ==================================

                    if (result.success) {

                        showSuccessModal();


                        // Reset form

                        form.reset();


                        // Clear events

                        selectedEvents = [];


                        eventCards.forEach(
                            card => {

                                card.classList.remove(
                                    'selected'
                                );

                                card.classList.remove(
                                    'disabled'
                                );

                            }
                        );


                        updateCounter();

                        updateFormEventList();

                    }


                    // ==================================
                    // FAILED
                    // ==================================

                    else {

                        showFormMessage(

                            result.message ||
                            'Registration failed. Please try again.',

                            'error'

                        );

                    }

                }


                // ==================================
                // NETWORK ERROR
                // ==================================

                catch (error) {

                    console.error(
                        'Registration Error:',
                        error
                    );


                    showFormMessage(
                        'Network error. Please check your connection and try again.',
                        'error'
                    );

                }


                // ==================================
                // REMOVE LOADING
                // ==================================

                finally {

                    if (submitBtn) {

                        submitBtn.classList.remove(
                            'loading'
                        );

                        submitBtn.disabled =
                            false;

                    }

                }

            }
        );

    }


    // ============================================
    // FORM MESSAGE
    // ============================================

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
            'block';


        if (
            typeof gsap !==
            'undefined'
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


    // ============================================
    // HIDE FORM MESSAGE
    // ============================================

    function hideFormMessage() {

        if (!formMessage) {
            return;
        }


        formMessage.className =
            'form-message';


        formMessage.style.display =
            'none';

    }


    // ============================================
    // SUCCESS MODAL
    // ============================================

    function showSuccessModal() {

        if (!successModal) {
            return;
        }


        successModal.classList.add(
            'active'
        );


        document.body.style.overflow =
            'hidden';

    }


    function hideSuccessModal() {

        if (!successModal) {
            return;
        }


        successModal.classList.remove(
            'active'
        );


        document.body.style.overflow =
            '';

    }


    if (modalClose) {

        modalClose.addEventListener(
            'click',
            hideSuccessModal
        );

    }


    if (successModal) {

        const backdrop =
            successModal.querySelector(
                '.modal-backdrop'
            );


        if (backdrop) {

            backdrop.addEventListener(
                'click',
                hideSuccessModal
            );

        }

    }


    // ============================================
    // SMOOTH SCROLL
    // ============================================

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                'click',
                function(e) {

                    e.preventDefault();


                    const target =
                        document.querySelector(
                            this.getAttribute(
                                'href'
                            )
                        );


                    if (target) {

                        const offset = 80;


                        const targetPosition =
                            target.getBoundingClientRect()
                                .top +
                            window.pageYOffset -
                            offset;


                        window.scrollTo({

                            top:
                                targetPosition,

                            behavior:
                                'smooth'

                        });

                    }

                }
            );

        });


    // ============================================
    // INPUT FOCUS EFFECTS
    // ============================================

    const inputs =
        document.querySelectorAll(
            '.form-group input, .form-group select'
        );


    inputs.forEach(input => {

        input.addEventListener(
            'focus',
            () => {

                if (
                    input.parentElement
                ) {

                    input.parentElement.style
                        .transform =
                        'scale(1.01)';

                }

            }
        );


        input.addEventListener(
            'blur',
            () => {

                if (
                    input.parentElement
                ) {

                    input.parentElement.style
                        .transform =
                        'scale(1)';

                }

            }
        );

    });


    // ============================================
    // HERO PARALLAX
    // ============================================

    window.addEventListener(
        'scroll',
        () => {

            const scrolled =
                window.pageYOffset;


            const heroContent =
                document.querySelector(
                    '.hero-content'
                );


            const heroGlow =
                document.querySelector(
                    '.hero-glow'
                );


            if (
                heroContent &&
                scrolled <
                window.innerHeight
            ) {

                heroContent.style.transform =
                    `translateY(${
                        scrolled * 0.3
                    }px)`;


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
                    `translate(-50%, -50%)
                     translateY(${
                         scrolled * 0.2
                     }px)`;

            }

        }
    );


    // ============================================
    // VISIBILITY API
    // Pause particles when tab hidden
    // ============================================

    document.addEventListener(
        'visibilitychange',
        () => {

            if (!ctx) return;


            if (document.hidden) {

                cancelAnimationFrame(
                    animationId
                );

            } else {

                animateParticles();

            }

        }
    );


    // ============================================
    // INITIAL EVENT STATE
    // ============================================

    updateCounter();

    updateFormEventList();

    updatePairStates();

});