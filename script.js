/* ============================================
   NEURIX'26 - JavaScript
   Particles | GSAP | Form Handling | Events
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // LOADER
    // ============================================
    const loader = document.getElementById('loader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            initAnimations();
        }, 2200);
    });

    // ============================================
    // PARTICLE SYSTEM
    // ============================================
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouseX = 0;
    let mouseY = 0;

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
            this.color = Math.random() > 0.7 ? '212, 175, 55' : '255, 255, 255';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Mouse interaction
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const force = (150 - distance) / 150;
                this.x -= dx * force * 0.02;
                this.y -= dy * force * 0.02;
            }

            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const particleCount = window.innerWidth < 768 ? 30 : 60;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        animationId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // ============================================
    // NAVIGATION
    // ============================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // GSAP ANIMATIONS
    // ============================================
    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
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

        // Scroll-triggered animations
        const fadeUpElements = document.querySelectorAll('[data-gsap="fade-up"]');
        fadeUpElements.forEach((el, index) => {
            const delay = parseFloat(el.dataset.delay) || 0;

            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: delay,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });

        const fadeRightElements = document.querySelectorAll('[data-gsap="fade-right"]');
        fadeRightElements.forEach(el => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });

        const fadeLeftElements = document.querySelectorAll('[data-gsap="fade-left"]');
        fadeLeftElements.forEach(el => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Timeline line animation
        gsap.to('.timeline-line', {
            scaleY: 1,
            transformOrigin: 'top',
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // ============================================
    // EVENT CARD SELECTION
    // ============================================
    const MAX_EVENTS = 5;
    let selectedEvents = [];
    const eventCards = document.querySelectorAll('.event-card');
    const selectedCountEl = document.getElementById('selectedCount');
    const eventWarning = document.getElementById('eventWarning');
    const formEventList = document.getElementById('formEventList');
    const formEventWarning = document.getElementById('formEventWarning');

    // Mouse glow effect on cards
    eventCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    eventCards.forEach(card => {
        card.addEventListener('click', () => {
            const eventName = card.dataset.event;
            const isSelected = card.classList.contains('selected');

            if (isSelected) {
                // Deselect
                card.classList.remove('selected');
                selectedEvents = selectedEvents.filter(e => e !== eventName);
                hideWarning();
            } else {
                // Select
                if (selectedEvents.length >= MAX_EVENTS) {
                    showWarning();
                    shakeCard(card);
                    return;
                }
                card.classList.add('selected');
                selectedEvents.push(eventName);
                hideWarning();
            }

            updateCounter();
            updateFormEventList();
        });
    });

    function showWarning() {
        eventWarning.classList.add('visible');
        formEventWarning.classList.add('visible');

        setTimeout(() => {
            eventWarning.classList.remove('visible');
            formEventWarning.classList.remove('visible');
        }, 3000);
    }

    function hideWarning() {
        eventWarning.classList.remove('visible');
        formEventWarning.classList.remove('visible');
    }

    function shakeCard(card) {
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = 'shake 0.5s ease';

        setTimeout(() => {
            card.style.animation = '';
        }, 500);
    }

    // Add shake animation dynamically
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
        }
    `;
    document.head.appendChild(shakeStyle);

    function updateCounter() {
        selectedCountEl.textContent = selectedEvents.length;

        // Animate counter
        gsap.fromTo(selectedCountEl, 
            { scale: 1.5, color: '#d4af37' },
            { scale: 1, color: '#d4af37', duration: 0.3, ease: 'power2.out' }
        );
    }

    function updateFormEventList() {
        if (selectedEvents.length === 0) {
            formEventList.innerHTML = '<p class="no-events">No events selected. Please select events from the Events section above.</p>';
            return;
        }

        formEventList.innerHTML = selectedEvents.map(event => `
            <span class="form-event-tag" data-event="${event}">
                ${event}
                <span class="remove-tag" onclick="removeEvent('${event}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </span>
            </span>
        `).join('');
    }

    // Global function for removing events from form
    window.removeEvent = function(eventName) {
        selectedEvents = selectedEvents.filter(e => e !== eventName);

        // Update card state
        eventCards.forEach(card => {
            if (card.dataset.event === eventName) {
                card.classList.remove('selected');
            }
        });

        updateCounter();
        updateFormEventList();
    };

    // ============================================
    // FORM HANDLING
    // ============================================
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    const successModal = document.getElementById('successModal');
    const modalClose = document.querySelector('.modal-close');

    // IMPORTANT: Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwnAxoue7w2VfHLpYmaWDTE_lyD4O08AnM3T2DcrGagPbqpHn6MK3aWOk2FtZY-9PdbgQ/exec';     

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validation
        if (selectedEvents.length === 0) {
            showFormMessage('Please select at least one event.', 'error');
            return;
        }

        if (selectedEvents.length > MAX_EVENTS) {
            showFormMessage(`You can only select up to ${MAX_EVENTS} events.`, 'error');
            return;
        }

        // Phone validation
        const phone = document.getElementById('phone').value;
        if (!/^\d{10}$/.test(phone)) {
            showFormMessage('Please enter a valid 10-digit phone number.', 'error');
            return;
        }

        // Prepare data
        const formData = {
            name: document.getElementById('name').value.trim(),
            college: document.getElementById('college').value.trim(),
            department: document.getElementById('department').value,
            year: document.getElementById('year').value,
            phone: phone,
            email: document.getElementById('email').value.trim(),
            events: selectedEvents
        };

        // Show loading
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        hideFormMessage();

        try {
            // Send to Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                showSuccessModal();
                form.reset();
                selectedEvents = [];
                eventCards.forEach(card => card.classList.remove('selected'));
                updateCounter();
                updateFormEventList();
            } else {
                showFormMessage(result.message || 'Registration failed. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        gsap.fromTo(formMessage, 
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.3 }
        );
    }

    function hideFormMessage() {
        formMessage.className = 'form-message';
        formMessage.style.display = 'none';
    }

    function showSuccessModal() {
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideSuccessModal() {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', hideSuccessModal);
    successModal.querySelector('.modal-backdrop').addEventListener('click', hideSuccessModal);

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // INPUT FOCUS EFFECTS
    // ============================================
    const inputs = document.querySelectorAll('.form-group input, .form-group select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.01)';
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });

    // ============================================
    // PARALLAX EFFECT ON HERO
    // ============================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroGlow = document.querySelector('.hero-glow');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
        }

        if (heroGlow && scrolled < window.innerHeight) {
            heroGlow.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.2}px)`;
        }
    });

    // ============================================
    // VISIBILITY API - Pause particles when hidden
    // ============================================
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animateParticles();
        }
    });
});
