import { PageHeader } from '../components/page-header'

// Gallery Page
export const GalleryPage = () => {
    return `
    ${PageHeader(
        'Campus Gallery',
        'Explore our clinical labs, campus infrastructure, and student activities',
        '/static/images/facilities_hero.png',
        'Gallery'
    )}

    <!-- Life at SNS College of Nursing -->
    <section class="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4 text-gray-900">Life @ SNS College of Nursing</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Nurturing compassionate healthcare professionals in a vibrant environment</p>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/clinical_hero.png" alt="Clinical Training" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-user-nurse text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Clinical Excellence</h3>
                        <p class="text-gray-600">Students during their hands-on clinical rotation at super-specialty hospitals.</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/innovation_hero.png" alt="Innovation Hub" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-lightbulb text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Healthcare Innovation</h3>
                        <p class="text-gray-600">Developing patient-centric solutions at the first Design Thinking Nursing College.</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/home_hero.png" alt="Happy Environment" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-smile-beam text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Student Well-being</h3>
                        <p class="text-gray-600">Holistic development and active student life at the SNS SPINE Center.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Campus Infrastructure -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Our Campus</h2>
            <div class="grid md:grid-cols-4 gap-6">
                <div class="bg-gray-50 rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-hospital text-4xl text-blue-600 mb-3"></i>
                    <h4 class="font-bold">Nursing Foundations Lab</h4>
                </div>
                <div class="bg-gray-50 rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-dna text-4xl text-blue-600 mb-3"></i>
                    <h4 class="font-bold">Anatomy Lab</h4>
                </div>
                <div class="bg-gray-50 rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-microscope text-4xl text-blue-600 mb-3"></i>
                    <h4 class="font-bold">Microbiology Lab</h4>
                </div>
                <div class="bg-gray-50 rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-utensils text-4xl text-blue-600 mb-3"></i>
                    <h4 class="font-bold">Nutrition Lab</h4>
                </div>
            </div>
        </div>
    </section>
  `;
};

// Sports & Clubs Page
export const SportsClubsPage = () => {
    return `
    ${PageHeader(
        'Sports & Clubs',
        'Building champions in sports, arts, and life skills',
        '/static/images/sports_hero.png',
        'Beyond Academics'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Sports For Life</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Well-developed play fields with specialized physical instructors to bring out the best in every student
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Football -->
                <div class="bg-green-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-futbol text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Football</h3>
                    <p class="text-gray-600 text-sm">Full-sized field with professional coaching</p>
                </div>
                
                <!-- Tennis & TT -->
                <div class="bg-yellow-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-table-tennis text-3xl text-yellow-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Tennis & TT</h3>
                    <p class="text-gray-600 text-sm">Professional tennis court and table tennis facility</p>
                </div>

                <!-- Cricket -->
                <div class="bg-red-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-baseball-ball text-3xl text-red-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Cricket</h3>
                    <p class="text-gray-600 text-sm">All-weather indoor cricket center with nets</p>
                </div>

                <!-- Basketball -->
                <div class="bg-orange-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-basketball-ball text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Basketball</h3>
                    <p class="text-gray-600 text-sm">Full court with modern equipment</p>
                </div>

                <!-- Volleyball -->
                <div class="bg-blue-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-volleyball-ball text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Volleyball</h3>
                    <p class="text-gray-600 text-sm">Indoor and outdoor courts available</p>
                </div>

                <!-- Athletics -->
                <div class="bg-purple-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-running text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Athletics</h3>
                    <p class="text-gray-600 text-sm">Track events and field sports training</p>
                </div>

                <!-- Swimming -->
                <div class="bg-cyan-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-swimmer text-3xl text-cyan-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Swimming</h3>
                    <p class="text-gray-600 text-sm">Ozonized professional pool</p>
                </div>

                <!-- Gym & Fitness -->
                <div class="bg-pink-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-dumbbell text-3xl text-pink-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Gym & Fitness</h3>
                    <p class="text-gray-600 text-sm">Modern fitness center for students</p>
                </div>

                <!-- Kabaddi & Kho-Kho -->
                <div class="bg-yellow-100/50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-medal text-3xl text-yellow-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Kabaddi & Kho-Kho</h3>
                    <p class="text-gray-600 text-sm">Traditional sports training</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Student Clubs -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Clubs & Activities</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    25+ extra-curricular options for holistic development
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                <!-- Music Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-music text-3xl text-purple-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Music Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Vocal & instrumental training</p>
                </div>

                <!-- Dance Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-theater-masks text-3xl text-pink-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Dance Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Classical, western, and folk forms</p>
                </div>

                <!-- Art Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-palette text-3xl text-orange-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Art Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Painting, drawing, and crafts</p>
                </div>

                <!-- Drama Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-microphone-alt text-3xl text-red-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Drama Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Theater and public speaking</p>
                </div>

                <!-- Robotics Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-robot text-3xl text-blue-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Robotics Club</h4>
                    <p class="text-xs text-gray-500 mt-1">STEM and innovation projects</p>
                </div>

                <!-- Chess Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-chess text-3xl text-gray-800 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Chess Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Strategic thinking and tournaments</p>
                </div>

                <!-- Literary Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-book-reader text-3xl text-green-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Literary Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Reading, writing, and debates</p>
                </div>

                <!-- Science Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-flask text-3xl text-yellow-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Science Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Experiments and exhibitions</p>
                </div>

                <!-- Eco Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-leaf text-3xl text-green-500 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Eco Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Environmental awareness activities</p>
                </div>

                <!-- Language Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-language text-3xl text-indigo-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Language Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Hindi, Tamil, French learning</p>
                </div>

                <!-- Photography Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-camera text-3xl text-gray-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Photography Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Visual arts and documentation</p>
                </div>

                <!-- Student Council -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-users text-3xl text-blue-800 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Student Council</h4>
                    <p class="text-xs text-gray-500 mt-1">Leadership and governance</p>
                </div>

                <!-- Toastmasters Club -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-microphone text-3xl text-red-500 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Toastmasters Club</h4>
                    <p class="text-xs text-gray-500 mt-1">Public speaking & leadership skills</p>
                </div>

                <!-- MUN -->
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                    <i class="fas fa-globe-americas text-3xl text-cyan-600 mb-3"></i>
                    <h4 class="font-bold text-gray-900">Model United Nations</h4>
                    <p class="text-xs text-gray-500 mt-1">Diplomacy, debate & global issues</p>
                </div>
            </div>
        </div>
    </section>
  `;
};

// Brochure Page
export const BrochurePage = () => {
    return `
    ${PageHeader(
        'Digital Brochure',
        'Download our complete prospectus to learn more about the B.Sc. Nursing program',
        '/static/images/innovation_hero.png',
        'Admissions'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 text-center shadow-xl">
                <i class="fas fa-file-pdf text-8xl text-red-600 mb-8"></i>
                <h2 class="text-3xl font-bold mb-4">SNS College of Nursing Prospectus</h2>
                <p class="text-xl text-gray-700 mb-8 font-light">
                    Learn about our curriculum, clinical partners, faculty expertise, and placement opportunities.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <a href="https://snscnursing.org/bscnursingsnscn/" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-download mr-2"></i>
                        Download Brochure
                    </a>
                </div>
                
                <p class="text-sm text-gray-600">
                    Admission Helpline: <a href="tel:+917550316701" class="text-blue-600 hover:underline font-bold">+91 75503 16701</a>
                </p>
            </div>
        </div>
    </section>
  `;
};
