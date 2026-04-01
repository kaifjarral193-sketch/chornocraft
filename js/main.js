document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
        } else {
            header.style.padding = '15px 0';
        }
    });

    // Simple Cart Logic (UI Demo)
    let cartCount = 0;
    const cartCounter = document.querySelector('.cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            if (cartCounter) {
                cartCounter.textContent = cartCount;
            }
            alert('Item added to cart!');
        });
    });

    // Form Validation (if on contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message, ' + name + '! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
