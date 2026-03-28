import { PageHeader } from '../components/page-header'

export const EventsPage = () => {
    return `
    ${PageHeader(
        'Events & Celebrations',
        'Fostering community, professional growth, and cultural heritage at SNS College of Nursing',
        '/static/images/events_hero.png',
        'Campus Life'
    )}

    <!-- Event Grid -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Event 1: Lamp Lighting Ceremony -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition duration-300">
                    <div class="h-64 bg-gray-200 overflow-hidden relative">
                         <img src="/static/images/events_hero.png" alt="Lamp Lighting Ceremony" class="w-full h-full object-cover">
                         <div class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Professional</div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Lamp Lighting Ceremony</h3>
                        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                            A solemn event marking the formal entry of first-year nursing students into the healthcare profession, honoring the legacy of Florence Nightingale.
                        </p>
                        <div class="flex items-center text-gray-400 text-xs">
                             <i class="fas fa-calendar-alt mr-2"></i> Annual Event
                        </div>
                    </div>
                </div>

                <!-- Event 2: Health Camps & Community Service -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition duration-300">
                    <div class="h-64 bg-gray-200 overflow-hidden relative">
                         <img src="/static/images/clinical_hero.png" alt="Health Camp" class="w-full h-full object-cover">
                         <div class="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Community</div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Community Health Camps</h3>
                        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                            Organizing health awareness programs and screening camps in rural areas, fostering a spirit of service and hands-on public health training.
                        </p>
                        <div class="flex items-center text-gray-400 text-xs">
                             <i class="fas fa-calendar-alt mr-2"></i> Monthly Activity
                        </div>
                    </div>
                </div>

                <!-- Event 3: Cultural Fest -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition duration-300">
                    <div class="h-64 bg-gray-200 overflow-hidden relative">
                         <img src="/static/images/sports_hero.png" alt="Cultural Fest" class="w-full h-full object-cover">
                         <div class="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">Cultural</div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">SNS Cultural Extravaganza</h3>
                        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                            A celebration of talent, art, and diversity where students showcase their creativity through dance, music, and theater.
                        </p>
                        <div class="flex items-center text-gray-400 text-xs">
                             <i class="fas fa-calendar-alt mr-2"></i> Biennial Event
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Professional Workshops Section -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Continuous Learning Workshops</h2>
                    <p class="text-lg text-gray-600 mb-8">
                        We regularly host international speakers, medical experts, and nursing leaders to conduct workshops on modern healthcare practices and technology.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                             <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                             <span class="text-gray-700">Advanced Cardiac Life Support (ACLS) Workshops</span>
                        </li>
                        <li class="flex items-start">
                             <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                             <span class="text-gray-700">Digital Healthcare & Patient Monitoring Seminars</span>
                        </li>
                         <li class="flex items-start">
                             <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                             <span class="text-gray-700">Design Thinking in Patient Care Facilitation</span>
                        </li>
                    </ul>
                </div>
                <div class="rounded-3xl overflow-hidden shadow-2xl">
                     <img src="/static/images/innovation_hero.png" alt="Workshops at SNS Nursing" class="w-full h-auto">
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-blue-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Stay Connected</h2>
            <p class="text-xl mb-8">Follow our official social media channels to stay updated on latest events and health tips.</p>
            <div class="flex justify-center space-x-6">
                <a href="https://instagram.com/snsinstitutions" target="_blank" class="text-4xl hover:scale-110 transition"><i class="fab fa-instagram"></i></a>
                <a href="https://facebook.com/snsinstitutions" target="_blank" class="text-4xl hover:scale-110 transition"><i class="fab fa-facebook-f"></i></a>
                <a href="https://youtube.com/@snsinstitutions" target="_blank" class="text-4xl hover:scale-110 transition"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </section>
  `;
};
