import { PageHeader } from '../components/page-header'

export const FacilitiesPage = () => {
    return `
    ${PageHeader(
        'Nursing Excellence Infrastructure',
        'Advanced clinical laboratories and holistic development centers designed for the next generation of healthcare leaders',
        '/static/images/facilities_hero.png',
        'Facilities'
    )}

    <!-- Nursing Labs -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Clinical Excellence</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">State-of-the-Art Nursing Laboratories</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Practice makes perfect. Our labs are equipped with high-fidelity simulators and modern medical equipment to provide hands-on experience before clinical rotations. 
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Nursing Foundations Lab -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/lab_hero.png" alt="Nursing Foundations Lab" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Foundations Lab</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            The heart of nursing education. Students learn basic nursing procedures and patient care techniques using anatomical models and simulators.
                        </p>
                    </div>
                </div>

                <!-- Nutrition Lab -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/nutrition_lab.png" alt="Nutrition Lab" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Nutrition Lab</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Students explore the science of dietetics and therapeutic nutrition, learning to prepare specialized diets for various patient conditions.
                        </p>
                    </div>
                </div>

                <!-- Anatomy Museum -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/clinical_hero.png" alt="Anatomy & Physiology Museum" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Anatomy Museum</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            A comprehensive collection of models, specimens, and charts to facilitate the deep understanding of human anatomy and physiology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- Support Infrastructure -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-bold text-gray-900 mb-6">Learning & Support</h2>
            </div>
            
            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-book-medical text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Digital Library</h3>
                    <p class="text-sm text-gray-600">Access to international nursing journals</p>
                </div>
                <div class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-wifi text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Hi-Speed Campus</h3>
                    <p class="text-sm text-gray-600">Full Wi-Fi enabled academic block</p>
                </div>
                <div class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-bus text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Transport</h3>
                    <p class="text-sm text-gray-600">Fleet of buses covering the city</p>
                </div>
                <div class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition">
                    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                         <i class="fas fa-bed text-3xl text-red-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Safe Hostel</h3>
                    <p class="text-sm text-gray-600">Secure residential facilities for girls</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-orange-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Take the First Step</h2>
            <p class="text-xl lg:text-2xl mb-10 text-orange-100 font-light">
                Join our nursing community and build your career in healthcare.
            </p>
            <a href="/contact" class="bg-white text-orange-900 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-block">
                Visit Campus
            </a>
        </div>
    </section>
  `;
};
