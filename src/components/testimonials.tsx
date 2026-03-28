export const ParentsTestimonialsCarousel = () => {
    const avatarIcon = `
    <svg aria-hidden="true" viewBox="0 0 24 24" class="w-9 h-9 text-white/95">
      <path fill="currentColor" d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-3.866 0-7 3.134-7 7v1h14v-1c0-3.866-3.134-7-7-7Z" />
    </svg>
  `;

    return `
    <!-- Parents Testimonials Section -->
    <section class="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Voice of SNS College of Nursing</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hear from our students and partners about their experience with India's first Design Thinking Nursing college.
                </p>
            </div>

            <!-- Carousel Container -->
            <div class="relative">
                <div id="testimonials-carousel" class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out" id="testimonials-track">
                        
                        <!-- Testimonial 1 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Ms. Keerthana R.</h4>
                                        <p class="text-gray-600">Final Year B.Sc Nursing Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "The Design Thinking framework at SNS College of Nursing has completely changed my perspective on patient care. Instead of just learning procedures, we focus on empathy and problem-solving. My project on 'Patient-Centric Ward Design' was selected for the Innovation Showcase. It's truly a professional environment."
                                </p>
                                <div class="flex items-center text-orange-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Student Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 2 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Mr. Karthik S.</h4>
                                        <p class="text-gray-600">Alumnus (Batch 2023)</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "The rigorous clinical training at SNS prepared me for the high-pressure environment of an ICU. The hands-on experience with advanced simulation labs and the 200+ bedded tie-ups gave me the confidence to handle critical cases from day one. I'm proud to be an SNS alumnus."
                                </p>
                                <div class="flex items-center text-orange-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Alumni Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 3 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Ms. Ananya M.</h4>
                                        <p class="text-gray-600">2nd Year B.Sc Nursing Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "What I love most is the holistic development through the SPINE program. Whether it's yoga for mental wellness or the various cultural clubs, there's always something to keep us balanced. The faculty are incredibly supportive and treat us like future colleagues."
                                </p>
                                <div class="flex items-center text-orange-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Student Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 4 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Mr. Rahul P.</h4>
                                        <p class="text-gray-600">3rd Year B.Sc Nursing Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "Access to the SNS iHub has been a game-changer. I never thought nursing students could be involved in tech innovation! I'm currently working with engineering students on a smart-monitoring device for elderly care. This interdisciplinary exposure is unique to SNS."
                                </p>
                                <div class="flex items-center text-orange-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Student Review</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Navigation Buttons -->
                <button id="prev-testimonial" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-orange-600 text-gray-900 hover:text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all z-10">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button id="next-testimonial" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-orange-600 text-gray-900 hover:text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all z-10">
                    <i class="fas fa-chevron-right"></i>
                </button>

                <!-- Dots Indicator -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-orange-600 transition-all" data-index="0"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-orange-400 transition-all" data-index="1"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-orange-400 transition-all" data-index="2"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-orange-400 transition-all" data-index="3"></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Carousel Script -->
    <script>
        (function() {
            let currentIndex = 0;
            const track = document.getElementById('testimonials-track');
            const dots = document.querySelectorAll('.testimonial-dot');
            const totalSlides = 4;

            function updateCarousel() {
                track.style.transform = \`translateX(-\${currentIndex * 100}%)\`;
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

            document.getElementById('next-testimonial').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            });

            document.getElementById('prev-testimonial').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });

            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    currentIndex = parseInt(dot.dataset.index);
                    updateCarousel();
                });
            });

            // Auto-advance every 5 seconds
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }, 5000);
        })();
    </script>
  `;
};
