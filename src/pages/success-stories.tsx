import { PageHeader } from '../components/page-header'
import { ParentsTestimonialsCarousel } from '../components/testimonials'

export const SuccessStoriesPage = () => {
    return `
    ${PageHeader(
        'Success Stories',
        'Celebrating the achievements and inspiring journeys of our nursing professionals making a difference globally',
        '/static/images/success_hero.png',
        'Alumni & Achievements'
    )}

    <!-- Featured Success Story -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-2xl">
                <div class="grid lg:grid-cols-2 gap-0">
                    <div class="h-96 lg:h-auto overflow-hidden">
                        <img src="/static/images/home_hero.png" alt="University Rank Holder" class="w-full h-full object-cover">
                    </div>
                    <div class="p-12 flex flex-col justify-center">
                        <div class="inline-flex items-center bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6 w-fit">
                             UNIVERSITY TOPPER
                        </div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">Academic Excellence at Dr. MGR Medical University</h2>
                        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our students consistently secure top ranks in the university examinations, demonstrating our commitment to academic rigor and clinical excellence. We celebrate the dedication of our latest batch of nursing graduates who achieved a 100% pass rate.
                        </p>
                        <div class="flex items-center space-x-8 text-sm text-gray-500">
                             <div>
                                 <span class="block font-bold text-gray-900 text-xl">100%</span>
                                 <span>Pass Rate</span>
                             </div>
                             <div>
                                 <span class="block font-bold text-gray-900 text-xl">Rank Holders</span>
                                 <span>University Level</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Global Reach Section -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-16">Our Alumni Across the Globe</h2>
            <div class="grid md:grid-cols-3 gap-12">
                <div class="bg-white p-8 rounded-3xl shadow-sm text-center">
                    <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-globe-americas text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">USA & UK Placements</h3>
                    <p class="text-gray-600">Our graduates are serving in prestigious healthcare systems across the United States and the United Kingdom.</p>
                </div>
                <div class="bg-white p-8 rounded-3xl shadow-sm text-center">
                    <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                         <i class="fas fa-hospital-alt text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Leading Indian Hospitals</h3>
                    <p class="text-gray-600">Alumni working in top super-specialty hospitals like Apollo, Fortis, and Max Healthcare.</p>
                </div>
                <div class="bg-white p-8 rounded-3xl shadow-sm text-center">
                    <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                         <i class="fas fa-user-md text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Nursing Educators</h3>
                    <p class="text-gray-600">Many of our alumni have pursued higher education and are now shaping future nurses as educators.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-3xl font-bold mb-4">What Our Students & Parents Say</h2>
            </div>
            ${ParentsTestimonialsCarousel()}
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-blue-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Build Your Future with Us</h2>
            <p class="text-xl mb-8">Join the ranks of successful nursing professionals trained at SNS College of Nursing.</p>
            <a href="/admissions" class="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition inline-block">
                Start My Journey
            </a>
        </div>
    </section>
  `;
};
