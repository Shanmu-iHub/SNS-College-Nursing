import { PageHeader } from '../components/page-header'

// Transport Page
export const TransportPage = () => {
    return `
    ${PageHeader(
        'Our Transport Services',
        'Safe, comfortable, and punctual transportation for our students',
        '/static/images/transport_hero.png',
        'Transport'
    )}

    <!-- Why Choose Our Transport -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-gray-900">Why Trust Our Transport</h2>
                <p class="text-xl text-gray-600">Fleet of 20 buses covering major areas of Coimbatore</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Card 1 -->
                <div class="bg-orange-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-bus text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">20 Buses</h3>
                    <p class="text-gray-600 text-sm">Full fleet of air-conditioned buses</p>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-green-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-map-marked-alt text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">GPS Tracking</h3>
                    <p class="text-gray-600 text-sm">Real-time location monitoring</p>
                </div>
                
                <!-- Card 3 -->
                <div class="bg-purple-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-id-card text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">RFID Cards</h3>
                    <p class="text-gray-600 text-sm">Safe boarding system</p>
                </div>

                <!-- Card 4 -->
                <div class="bg-red-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="fas fa-snowflake text-3xl text-red-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900">Air Conditioned</h3>
                    <p class="text-gray-600 text-sm">All buses fully AC</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Bus Route Coverage Areas -->
    <section class="py-24 bg-orange-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-gray-900">Bus Route Coverage Areas</h2>
                <p class="text-xl text-gray-600 mb-4">We cover major areas across Coimbatore</p>
                <p class="text-orange-600 font-semibold"><i class="fas fa-file-pdf mr-2"></i>Check if your area is covered before admission!</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Central Coimbatore -->
                <div class="bg-white rounded-2xl p-8 shadow-md">
                    <h3 class="text-xl font-bold mb-6 text-blue-600 flex items-center">
                        <i class="fas fa-map-pin mr-2"></i> Central Coimbatore
                    </h3>
                    <ul class="space-y-3 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> RS Puram</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Race Course</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Town Hall</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Gandhipuram</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Saibaba Colony</li>
                    </ul>
                </div>

                <!-- East Coimbatore -->
                <div class="bg-white rounded-2xl p-8 shadow-md">
                    <h3 class="text-xl font-bold mb-6 text-purple-600 flex items-center">
                        <i class="fas fa-map-pin mr-2"></i> East Coimbatore
                    </h3>
                    <ul class="space-y-3 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Peelamedu</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Hopes College</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Singanallur</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Ramanathapuram</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Ganapathy</li>
                    </ul>
                </div>

                <!-- West & South -->
                <div class="bg-white rounded-2xl p-8 shadow-md">
                    <h3 class="text-xl font-bold mb-6 text-green-600 flex items-center">
                        <i class="fas fa-map-pin mr-2"></i> West & South
                    </h3>
                    <ul class="space-y-3 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Vadavalli</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Thudiyalur</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Podanur</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Ukkadam</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2 text-sm"></i> Kuniyamuthur</li>
                    </ul>
                </div>
            </div>

            <!-- Coverage CTA -->
            <div class="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                    <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <i class="fas fa-exclamation text-3xl text-white"></i>
                    </div>
                    <h3 class="text-3xl font-bold mb-4">Not Sure If Your Area Is Covered?</h3>
                    <p class="text-xl mb-8 max-w-2xl mx-auto text-white/90">Contact our transport coordinator to check route availability for your specific location.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+919629937861" class="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center justify-center">
                            <i class="fas fa-phone mr-2"></i> Call: +91 96299 37861
                        </a>
                        <a href="mailto:info@snsacademy.org" class="bg-orange-700/50 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition flex items-center justify-center border border-white/30">
                            <i class="fas fa-envelope mr-2"></i> Send Inquiry
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Safety Features -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-gray-900">Safety Features</h2>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Safety 1 -->
                <div class="bg-red-50 rounded-2xl p-6 border border-red-100">
                    <i class="fas fa-tachometer-alt text-3xl text-red-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Speed Governor</h3>
                    <p class="text-gray-600 text-sm">All buses fitted with speed limiters for safety</p>
                </div>
                
                <!-- Safety 2 -->
                <div class="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <i class="fas fa-satellite-dish text-3xl text-blue-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">GPS Tracking</h3>
                    <p class="text-gray-600 text-sm">Real-time location monitoring system</p>
                </div>

                <!-- Safety 3 -->
                <div class="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                    <i class="fas fa-id-badge text-3xl text-orange-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">RFID System</h3>
                    <p class="text-gray-600 text-sm">Smart cards for secure boarding</p>
                </div>

                <!-- Safety 4 -->
                <div class="bg-green-50 rounded-2xl p-6 border border-green-100">
                    <i class="fas fa-first-aid text-3xl text-green-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">First Aid Box</h3>
                    <p class="text-gray-600 text-sm">Fully equipped medical kit in every bus</p>
                </div>

                <!-- Safety 5 -->
                <div class="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
                    <i class="fas fa-user-shield text-3xl text-yellow-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Trained Staff</h3>
                    <p class="text-gray-600 text-sm">Caretakers on every bus for student safety</p>
                </div>

                <!-- Safety 6 -->
                <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <i class="fas fa-video text-3xl text-gray-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">CCTV Cameras</h3>
                    <p class="text-gray-600 text-sm">Video surveillance for complete security</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Timings -->
    <section class="py-24 bg-orange-50 text-center">
        <div class="max-w-4xl mx-auto px-4">
             <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-white text-3xl">
                 <i class="fas fa-clock"></i>
             </div>
             <h2 class="text-3xl font-bold text-gray-900 mb-4">College Timing</h2>
             <p class="text-gray-600 mb-8">Buses are scheduled to ensure students arrive by <span class="font-bold text-blue-600">8:15 AM</span> daily</p>
             <p class="text-gray-500 mb-10 text-sm">Routes are designed to minimize transit time and provide comfortable journeys</p>
             
             <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                <i class="fas fa-download mr-2"></i> Get Route Schedule
             </a>
        </div>
    </section>

    <!-- Bottom CTA -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-4">Need Transport Information?</h2>
            <p class="text-xl mb-10 text-blue-100">Contact our transport coordinator for route details, availability, and fees</p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919629937861" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold transition hover:bg-gray-100 flex items-center justify-center">
                    <i class="fas fa-phone mr-3"></i> +91 96299 37861
                </a>
                <a href="mailto:info@snsacademy.org" class="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-bold transition flex items-center justify-center border border-blue-400">
                    <i class="fas fa-envelope mr-3"></i> info@snsacademy.org
                </a>
            </div>
        </div>
    </section>
    `;
};

