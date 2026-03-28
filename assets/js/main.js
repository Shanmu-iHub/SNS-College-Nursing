// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Testimonials Carousel (if present on page)
const track = document.getElementById('testimonials-track');
if (track) {
    let currentIndex = 0;
    const dots = document.querySelectorAll('.testimonial-dot');
    const totalSlides = dots.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.remove('bg-gray-300');
                dot.classList.add('bg-orange-600');
            } else {
                dot.classList.remove('bg-orange-600');
                dot.classList.add('bg-gray-300');
            }
        });
    }

    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('next-testimonial'); // Note: index.html has prev/next button IDs

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });
    }

    const prevBtnReal = document.getElementById('prev-testimonial');
    if (prevBtnReal) {
        prevBtnReal.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.dataset.index);
            updateCarousel();
        });
    });

    // Auto-advance
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 5000);
}
