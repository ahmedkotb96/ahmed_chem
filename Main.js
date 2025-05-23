// Move translations to the top
const translations = {
    en: {
        home: "Home",
        products: "Products",
        about: "About Us",
        clients: "Our Clients",
        contact: "Contact",
        heroTitle: "Premium Chemical Solutions",
        heroSubtitle: "Delivering high-quality chemical products for industries worldwide.",
        getQuote: "Get a Quote",
        ourProducts: "Our Products",
        product1: "Industrial and Lab Chemicals",
        product1Desc: "High-quality chemicals for industrial and laboratory use.",
        product2: "Glassware",
        product2Desc: "Premium laboratory glassware and accessories.",
        product3: "Media",
        product3Desc: "Complete range of culture media and supplements.",
        aboutUs: "About Us",
        whoWeAre: "Who We Are",
        aboutText1: "Ahmed Chem is a leading supplier of high-quality chemical products, serving industries across Egypt. With over 6 years of experience, we pride ourselves on reliability, and excellence.",
        aboutText2: "Our sales experts ensure that every product meets the highest industry standards.",
        contactUs: "Contact us to learn more →",
        trustedBy: "Trusted By Industry Leaders",
        client1: {
            name: "Ezz Steel",
            logo: "./ezzsteel.png"
        },
        client2: {
            name: "Aqua Delta",
            logo: "./aquadelta.png"
        },
        client3: {
            name: "Atco Pharma",
            logo: "./atco_pharma.png"
        },
        client4: {
            name: "Pharaonia",
            logo: "./Pharaonia.png"
        },
        clientTestimonials: "What Our Clients Say",
        testimonial1: "\"Ahmed Chem delivered exceptional quality chemicals on time. Highly recommended!\"",
        testimonial2: "\"Reliable supplier with excellent customer service.\"",
        contactUs: "Contact Us",
        getInTouch: "Get in Touch",
        contactText: "Have questions or need a price quotation? Reach out to our team.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendMessage: "Send Message",
        address: "Sadat city , Monofiya",
        footerTagline: "Quality Chemicals, Reliable Solutions",
        copyright: "© 2025 Ahmed Kotb. All rights reserved.",
        nav: {
            home: "Home",
            products: "Products",
            about: "About Us",
            clients: "Clients",
            contact: "Contact"
        },
        sending: "Sending...",
        messageSent: "Message sent successfully!",
        messageError: "Failed to send message. Please try again."
    },
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        clients: "عملاؤنا",
        contact: "اتصل بنا",
        heroTitle: "حلول كيميائية عالية الجودة",
        heroSubtitle: "نقدم منتجات كيميائية عالية الجودة للصناعات حول العالم.",
        getQuote: "احصل على عرض سعر",
        ourProducts: "منتجاتنا",
        product1: "كيماويات صناعية",
        product1Desc: "كيماويات عالية النقاء للتصنيع والمعالجة.",
        product2: "كواشف مختبرية",
        product2Desc: "كواشف بجودة ممتازة للبحث والاختبار.",
        product3: "حلول متخصصة",
        product3Desc: "خلطات كيميائية مخصصة لاحتياجات صناعية فريدة.",
        aboutUs: "من نحن",
        whoWeAre: "من نحن",
        aboutText1: "احمد كيم هي مورد رائد للمنتجات الكيميائية عالية الجودة، تخدم الصناعات في جميع أنحاء العالم. مع أكثر من 10 سنوات من الخبرة، نفتخر بالموثوقية والابتكار والتميز.",
        aboutText2: "يضمن فريق الخبراء لدينا أن كل منتج يلبي أعلى معايير الصناعة.",
        contactUs: "اتصل بنا لمعرفة المزيد →",
        trustedBy: "موثوق به من قبل قادة الصناعة",
        client1: {
            name: "عز للصلب",
            logo: "./ezzsteel.png"
        },
        client2: {
            name: "أكوا دلتا",
            logo: "./aquadelta.png"
        },
        client3: {
            name: "أتكو فارما",
            logo: "./atco_pharma.png"
        },
        client4: {
            name: "فرعونية",
            logo: "./Pharaonia.png"
        },
        clientTestimonials: "ما يقوله عملاؤنا",
        testimonial1: "\"قدمت احمد كيم منتجات كيميائية عالية الجودة في الوقت المحدد. موصى به للغاية!\"",
        testimonial2: "\"مورد موثوق مع خدمة عملاء ممتازة.\"",
        contactUs: "اتصل بنا",
        getInTouch: "ابقى على تواصل",
        contactText: "هل لديك أسئلة أو تحتاج إلى عرض سعر؟ تواصل مع فريقنا.",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        messagePlaceholder: "رسالتك",
        sendMessage: "إرسال الرسالة",
        address: "123 شارع الكيماويات، مدينة الصناعة",
        footerTagline: "كيماويات عالية الجودة، حلول موثوقة",
        copyright: "© 2025 Ahmed Kotb. All rights reserved.",
        nav: {
            home: "الرئيسية",
            products: "المنتجات",
            about: "من نحن",
            clients: "عملاؤنا",
            contact: "اتصل بنا"
        },
        sending: "جاري الإرسال...",
        messageSent: "تم إرسال الرسالة بنجاح!",
        messageError: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى."
    }
};

// Global language state
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

// Simplified language handling
function updateLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferredLanguage', lang);

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keyPath = key.split('.');
        let translation = translations[lang];
        
        keyPath.forEach(part => {
            translation = translation?.[part];
        });

        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update language toggle buttons
    const langButtons = document.querySelectorAll('#languageToggle, #mobileLangToggle');
    langButtons.forEach(button => {
        button.textContent = currentLanguage === 'en' ? 'العربية (AR)' : 'English (EN)';
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle listeners
    const themeButtons = document.querySelectorAll('#themeToggle, #mobileThemeToggle');
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        });
    });

    // Language toggle listeners
    const langButtons = document.querySelectorAll('#languageToggle, #mobileLangToggle');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'ar' : 'en';
            updateLanguage(newLang);
        });
    });

    // Mobile menu button listener
    const menuButton = document.querySelector('.mobile-menu-button');
    menuButton.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });

    // Initialize language
    updateLanguage(currentLanguage);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language Switcher (English ↔ Arabic)
const languageToggle = document.getElementById('languageToggle');

console.log('Script loading...'); // Debug loading

// Wrap in IIFE to avoid global scope pollution
(function() {
    // Initialize animation function
    function initAnimation() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;
        
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const particles = [];
        
        // Setup canvas
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "0";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.prepend(canvas);

        // Gas particle settings
        const PARTICLE_COUNT = 12;
        const MAX_SPEED = 2;
        const MIN_SIZE = 7;
        const MAX_SIZE = 12;
        const INTERACTION_DISTANCE = 200; // Increased interaction distance
        const PARTICLE_COLOR = 'rgba(64, 64, 64,'; // Dark gray base color

        // Create gas-like particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 500,
                size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE,
                vx: (Math.random() - 0.5) * MAX_SPEED,
                vy: (Math.random() - 0.5) * MAX_SPEED,
                vz: (Math.random() - 0.5) * MAX_SPEED
            });
        }

        function animate() {
            if (window.scrollY >= aboutSection.offsetTop) {
                canvas.style.opacity = '0';
            } else {
                canvas.style.opacity = '1';
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Find particle clusters first
                const clusters = [];
                particles.forEach((p1, i) => {
                    const closeParticles = particles.filter((p2, j) => {
                        if (i === j) return false;
                        const dx = p2.x - p1.x;
                        const dy = p2.y - p1.y;
                        const dz = p2.z - p1.z;
                        return Math.sqrt(dx * dx + dy * dy + dz * dz) < INTERACTION_DISTANCE;
                    });

                    if (closeParticles.length >= 2) {
                        clusters.push({
                            center: p1,
                            connected: closeParticles
                        });
                    }
                });

                // Draw network connections for clusters
                clusters.forEach(cluster => {
                    // Draw lines from center to all connected particles
                    cluster.connected.forEach(p2 => {
                        const dx = p2.x - cluster.center.x;
                        const dy = p2.y - cluster.center.y;
                        const dz = p2.z - cluster.center.z;
                        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                        const opacity = (1 - dist / INTERACTION_DISTANCE) * 0.4;

                        ctx.beginPath();
                        ctx.moveTo(cluster.center.x, cluster.center.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(64, 64, 64, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();

                        // Draw lines between connected particles
                        cluster.connected.forEach((p3, i) => {
                            if (p2 !== p3) {
                                const d = Math.sqrt(
                                    Math.pow(p3.x - p2.x, 2) + 
                                    Math.pow(p3.y - p2.y, 2) + 
                                    Math.pow(p3.z - p2.z, 2)
                                );
                                if (d < INTERACTION_DISTANCE) {
                                    ctx.beginPath();
                                    ctx.moveTo(p2.x, p2.y);
                                    ctx.lineTo(p3.x, p3.y);
                                    ctx.strokeStyle = `rgba(64, 64, 64, ${opacity * 0.7})`;
                                    ctx.lineWidth = 1;
                                    ctx.stroke();
                                }
                            }
                        });
                    });
                });

                // Update and draw particles
                const sortedParticles = [...particles].sort((a, b) => b.z - a.z);
                sortedParticles.forEach(p1 => {
                    // Update particle position
                    p1.x += p1.vx;
                    p1.y += p1.vy;
                    p1.z += p1.vz;

                    // Bounce off walls with energy conservation
                    if (p1.x < 0 || p1.x > canvas.width) {
                        p1.vx *= -0.98; // Slight energy loss
                        p1.x = p1.x < 0 ? 0 : canvas.width;
                    }
                    if (p1.y < 0 || p1.y > canvas.height) {
                        p1.vy *= -0.98;
                        p1.y = p1.y < 0 ? 0 : canvas.height;
                    }
                    if (p1.z < 0 || p1.z > 500) {
                        p1.vz *= -0.98;
                        p1.z = p1.z < 0 ? 0 : 500;
                    }

                    // Calculate perspective scale
                    const scale = 0.5 + (p1.z / 1000);
                    const size = p1.size * scale;
                    const alpha = 0.4 + (p1.z / 1000) * 0.6;

                    // Draw particle with solid color instead of gradient
                    ctx.beginPath();
                    ctx.arc(p1.x, p1.y, size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(64, 64, 64, ${alpha})`;
                    ctx.fill();
                });
            }

            requestAnimationFrame(animate);
        }

        animate();

        // Efficient resize handler
        let resizeTimeout;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, 100);
        });
    }

    // Main initialization
    function init() {
        console.log('Initializing...');
        // initLanguage();
        initAnimation();
    }

    // Ensure proper loading
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();


// Theme management class
class ThemeManager {
    constructor() {
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        if (this.darkMode) {
            document.documentElement.classList.add('dark');
        }

        this.themeToggle?.addEventListener('click', () => this.toggleTheme());

        // Watch system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (localStorage.getItem('darkMode') === null) {
                this.darkMode = e.matches;
                this.updateTheme();
            }
        });
    }

    toggleTheme() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', this.darkMode);
        this.updateTheme();
    }

    updateTheme() {
        if (this.darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}

// Contact Form Handler
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = translations[currentLanguage].sending || 'Sending...';
    submitButton.disabled = true;

    const templateParams = {
        to_email: 'ahmedabdelhakiem95@gmail.com',
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams
    )
    .then(() => {
        alert(translations[currentLanguage].messageSent || 'Message sent successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Failed to send message:', error);
        alert(translations[currentLanguage].messageError || 'Failed to send message. Please try again.');
    })
    .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    // ...existing initialization code...
});