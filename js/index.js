// Typing effect
const textElement = document.getElementById("typing-text");
const textArray = [
    "Backend ve CRM sistemleri için çözümler üretiyorum.",
    "İş süreçlerini dijitalleştiren CRM çözümleri ile değer katıyorum.",
    "Modern web uygulamaları geliştiriyorum."
];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[index % textArray.length];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 50;

    if (isDeleting) typeSpeed /= 2;
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Son karakterden sonra bekle
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
        typeSpeed = 500; // Yeni kelimeye başlamadan önce bekle
    }

    setTimeout(typeEffect, typeSpeed);
}

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });

            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 80;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.');
    this.reset();
});

// Start typing effect
typeEffect();