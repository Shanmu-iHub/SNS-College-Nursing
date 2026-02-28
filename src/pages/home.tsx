import { ParentsTestimonialsCarousel } from '../components/testimonials'

export const HomePage = () => {
    return `
    <!-- Hero Section with Nursing Content -->
    <section class="relative text-white py-24 lg:py-32 overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="/static/images/home_hero.png" alt="SNS College of Nursing Campus" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                        <i class="fas fa-stethoscope text-orange-400 mr-2"></i>
                        <span class="text-sm font-semibold tracking-wide">First Indian Institute to implement Design Thinking in Nursing</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight font-display">
                        Empowering <br/>
                        <span class="text-orange-500 text-6xl lg:text-8xl whitespace-nowrap">Caring Hands</span>
                    </h1>
                    
                    <div class="h-1 w-24 bg-orange-500 mb-8 rounded-full"></div>

                    <p class="text-xl lg:text-2xl mb-6 text-gray-200 leading-relaxed max-w-xl font-medium">
                        Building <strong class="text-white underline decoration-orange-500 decoration-2">Clinical Excellence</strong> and an Entrepreneurial Mindset through our patented Design Thinking framework.
                    </p>

                    <p class="text-sm lg:text-base mb-8 text-gray-200 leading-relaxed max-w-xl">
                        Transform your passion for care into a professional nursing career with world-class hospital tie-ups and hands-on training at Coimbatore's most innovative nursing college.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="/admissions" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition transform hover:-translate-y-1 flex items-center justify-center">
                            Admissions 2026-27
                            <i class="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                        <a href="/about" class="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
                            <i class="fas fa-info-circle mr-2 text-sm"></i>
                            Why SNS Nursing?
                        </a>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 text-xs text-gray-200 uppercase tracking-widest font-bold">
                        <div class="inline-flex items-center">
                            <i class="fas fa-university text-orange-400 mr-2"></i>
                            M.G.R University Affiliated
                        </div>
                        <div class="inline-flex items-center">
                            <i class="fas fa-certificate text-orange-400 mr-2"></i>
                            INC & TNNMC Recognized
                        </div>
                        <div class="inline-flex items-center">
                            <i class="fas fa-hospital text-orange-400 mr-2"></i>
                            200+ Bedded Clinical Tie-ups
                        </div>
                    </div>
                </div>
                
                <div class="hidden lg:block relative">
                    <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white/10 border border-white/10 rounded-xl p-6 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">60</div>
                                <div class="text-xs text-orange-200 mt-1 uppercase font-bold">Annual Intake</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-6 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">8</div>
                                <div class="text-xs text-orange-200 mt-1 uppercase font-bold">Semesters</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-6 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">100%</div>
                                <div class="text-xs text-orange-200 mt-1 uppercase font-bold">Placement Support</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-6 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">879</div>
                                <div class="text-xs text-orange-200 mt-1 uppercase font-bold">Counselling Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Bar -->
    <section class="py-10 bg-white border-b shadow-inner">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-gray-100">
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">INC</div>
                    <div class="text-xs text-orange-600 font-bold uppercase tracking-widest">Recognized</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">300+</div>
                    <div class="text-xs text-orange-600 font-bold uppercase tracking-widest">Clinical Beds</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">Design</div>
                    <div class="text-xs text-orange-600 font-bold uppercase tracking-widest">Thinking Hub</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">M.G.R</div>
                    <div class="text-xs text-orange-600 font-bold uppercase tracking-widest">Affiliated</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why SNS Nursing -->
    <section class="py-24 bg-gray-50 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-orange-600">Why Choose SNS?</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We redefine education by integrating Design Thinking and a holistic approach to prepare future-ready global citizens.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-lightbulb text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Design Thinking Education</h3>
                    <p class="text-gray-600 leading-relaxed">
                        India's first school with GenAI-Powered Design Thinking Framework (Patented). Built on Empathy, every child learns to solve problems creatively using AI-enhanced methodologies from an early age.
                    </p>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-users text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">3P Culture Framework</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Purpose, Process, People—our holistic approach ensures every child develops academically, socially, emotionally, and ethically.
                    </p>
                </div>
                
                <!-- Card 3 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-hand-holding-heart text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">10:1 Clinical Mentorship</h3>
                    <p class="text-gray-600 leading-relaxed">
                        We ensure personalized attention with a 1:10 faculty-student ratio during clinical training. Our students get hands-on experience in 300+ bedded multi-specialty hospitals.
                    </p>
                </div>
                
                <!-- Card 4 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-rocket text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">SNS Innovation Hub</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Access to SNS iHub—India's Y-Combinator equivalent. Students work with AI, IoT, Robotics, AR/VR labs preparing them for future careers.
                    </p>
                </div>
                
                <!-- Card 5 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-building text-3xl text-pink-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">World-Class SPINE Center</h3>
                    <p class="text-gray-600 leading-relaxed">
                        5-level activity center with swimming pool, indoor cricket, gym, music studio, dance studio, theater, and more—everything under one roof.
                    </p>
                </div>
                
                <!-- Card 6 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-trophy text-3xl text-indigo-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">5 Pillars Development</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Learning, Upskilling, Innovation, Networking, Character Building—comprehensive development for future leaders.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Academic Programs Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                 <span class="text-orange-600">Our Professional Programs</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience a curriculum that balances rigorous medical theory with extensive clinical practice and innovative Design Thinking.
                </p>
            </div>
            
            <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Primary Program: B.Sc Nursing -->
                <div class="lg:col-span-2 group rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition duration-500 flex flex-col md:flex-row bg-white border border-gray-100">
                    <div class="md:w-1/2 h-72 md:h-auto overflow-hidden relative">
                        <img src="/static/images/lab_hero.png" alt="Nursing Lab" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                        <div class="absolute top-4 left-4">
                            <span class="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Most Popular</span>
                        </div>
                    </div>
                    <div class="p-8 md:w-1/2">
                        <h3 class="text-3xl font-bold text-gray-900 mb-2">B.Sc. Nursing</h3>
                        <p class="text-orange-600 font-bold text-lg mb-4">4 Years | 8 Semesters</p>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            A comprehensive degree program designed to provide high-quality education and clinical excellence. Students gain hands-on experience in our super-specialty parent hospital.
                        </p>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center text-sm text-gray-700"><i class="fas fa-check-circle text-green-500 mr-2"></i> INC & TNNMC Recognized</li>
                            <li class="flex items-center text-sm text-gray-700"><i class="fas fa-check-circle text-green-500 mr-2"></i> Affiliated to M.G.R Medical University</li>
                            <li class="flex items-center text-sm text-gray-700"><i class="fas fa-check-circle text-green-500 mr-2"></i> Intensive Clinical Postings</li>
                        </ul>
                        <a href="/admissions" class="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition">
                            Apply for B.Sc. Nursing <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Secondary Info Block -->
                <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border border-orange-200 shadow-lg">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Course Eligibility</h3>
                    <div class="space-y-6">
                        <div>
                            <p class="font-bold text-gray-900 mb-1">Educational Requirement</p>
                            <p class="text-sm text-gray-600">Pass in 10+2 with Physics, Chemistry, Biology & English.</p>
                        </div>
                        <div>
                            <p class="font-bold text-gray-900 mb-1">Minimum Marks</p>
                            <p class="text-sm text-gray-600">45% aggregate in PCB (General Category) as per M.G.R University norms.</p>
                        </div>
                        <div class="pt-4 border-t border-orange-200">
                             <p class="text-center font-bold text-orange-600 text-lg">Counselling Code: 879</p>
                        </div>
                        <div class="mt-4">
                            <a href="/contact" class="block text-center text-gray-700 hover:text-orange-600 font-bold underline transition">
                                Download Admission Brochure
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    ${ParentsTestimonialsCarousel()}

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl lg:text-5xl font-bold mb-4">
                Begin Your Journey in Healthcare Excellence
            </h2>
            <p class="text-xl opacity-90 mb-8 font-medium">
                Admissions open for Academic Year 2026-27. Secure your seat at Coimbatore's premier nursing college.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                    <i class="fas fa-pen-to-square mr-2"></i>
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                    <i class="fas fa-hospital mr-2"></i>
                    Visit Clinical Campus
                </a>
            </div>
        </div>
    </section>
  `;
};
