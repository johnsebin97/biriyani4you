// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

// Reveal elements on scroll
sr.reveal('.about-content', {});
sr.reveal('.chef-content', {});
sr.reveal('.testimonial-card', { interval: 200 });
sr.reveal('.step-card', { interval: 200 });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Add fade-in class to elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Pre-order form handling
const preOrderForm = document.querySelector('#pre-order-form');
if (preOrderForm) {
    preOrderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your pre-order! We will contact you shortly.');
    });
}

// WhatsApp group join handling
const whatsappLinks = document.querySelectorAll('a[href="#whatsapp"]');
whatsappLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your WhatsApp group link
        window.open('https://wa.me/yourphonenumber', '_blank');
    });
});

// Email subscription handling
const emailForm = document.querySelector('#email-form');
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your email subscription logic here
        alert('Thank you for subscribing! You will receive updates about our next biriyani event.');
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Enhanced parallax effects
document.addEventListener('DOMContentLoaded', function() {
    const parallaxImages = document.querySelectorAll('.parallax-image');
    const chefImage = document.querySelector('.chef-img');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Parallax effect for gallery images
        parallaxImages.forEach(image => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            image.style.transform = `translateY(${yPos}px)`;
        });
        
        // Parallax effect for chef image
        if (chefImage) {
            const chefSpeed = 0.2;
            const chefYPos = -(scrolled * chefSpeed);
            chefImage.style.transform = `translateY(${chefYPos}px)`;
        }
    });
});

// Smooth reveal for parallax sections
const parallaxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.parallax-container').forEach(container => {
    parallaxObserver.observe(container);
});

// Add hover effect for parallax images
document.querySelectorAll('.parallax-image').forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    let autoSlideInterval;
    let isAnimating = false;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            if (!isAnimating) goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateSlider() {
        isAnimating = true;
        sliderTrack.style.transform = `translateX(-${currentSlide * 33.333}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    function goToSlide(index) {
        if (isAnimating) return;
        currentSlide = index;
        updateSlider();
        resetAutoSlide();
    }
    
    function nextSlide() {
        if (isAnimating) return;
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }
    
    function prevSlide() {
        if (isAnimating) return;
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            if (!isAnimating) nextSlide();
        }, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        if (!isAnimating) {
            prevSlide();
            resetAutoSlide();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (!isAnimating) {
            nextSlide();
            resetAutoSlide();
        }
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderTrack.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderTrack.addEventListener('touchend', e => {
        if (isAnimating) return;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
        resetAutoSlide();
    }
    
    // Start auto-sliding
    startAutoSlide();
    
    // Pause auto-slide when hovering over slider
    sliderTrack.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    sliderTrack.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}); 