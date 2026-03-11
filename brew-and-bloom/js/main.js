// ===================================
// Navigation Functionality
// ===================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Update active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Menu Tabs Functionality
// ===================================

const menuTabs = document.querySelectorAll('.menu-tab');
const menuCategories = document.querySelectorAll('.menu-category');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and categories
        menuTabs.forEach(t => t.classList.remove('active'));
        menuCategories.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding category
        tab.classList.add('active');
        const targetCategory = document.getElementById(tab.dataset.tab);
        targetCategory.classList.add('active');
    });
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation delay for grid items
            if (entry.target.classList.contains('feature-card') || 
                entry.target.classList.contains('plant-card') ||
                entry.target.classList.contains('menu-item') ||
                entry.target.classList.contains('testimonial-card')) {
                
                const parent = entry.target.parentElement;
                const siblings = Array.from(parent.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Also observe cards for animation
document.querySelectorAll('.feature-card, .plant-card, .menu-item, .testimonial-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Show success message (in real app, you'd send to server)
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ===================================
// Newsletter Form Handling
// ===================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        showNotification('Thanks for subscribing! Welcome to the Brew & Bloom family.', 'success');
        
        newsletterForm.reset();
    });
}

// ===================================
// Notification System
// ===================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        padding: '1rem 2rem',
        background: type === 'success' ? 'var(--color-primary)' : 'var(--color-text)',
        color: 'white',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '9999',
        transform: 'translateY(100px)',
        opacity: '0',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ===================================
// Dynamic Year in Footer
// ===================================

const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Brew & Bloom. All rights reserved.`;
}

// ===================================
// Parallax Effect for Hero Section
// ===================================

const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroContent = hero.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ===================================
// Plant Card Hover Sound Effect (Optional Fun Feature)
// ===================================

const plantCards = document.querySelectorAll('.plant-card');

plantCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Subtle visual feedback is already handled by CSS
        // This is just showing where you could add more interactivity
    });
});

// ===================================
// Performance: Lazy Loading Images
// ===================================

// Note: In this demo we're using emoji instead of images,
// but here's how you'd implement lazy loading for real images

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ===================================
// Console Easter Egg
// ===================================

console.log('%c☕🌿 Welcome to Brew & Bloom!', 'font-size: 20px; color: #2d5a3d; font-weight: bold;');
console.log('%cBuilt with love and lots of coffee', 'font-size: 12px; color: #6b6b6b;');
console.log('%cInterested in the code? Check out our source!', 'font-size: 12px; color: #6b6b6b;');

// ===================================
// Initialize Everything When DOM is Ready
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Brew & Bloom is ready to serve! ☕🌿');
    
    // Add loaded class to body for any initial animations
    document.body.classList.add('loaded');
});

// ===================================
// Keyboard Navigation Enhancement
// ===================================

document.addEventListener('keydown', (e) => {
    // Press 'Esc' to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});
