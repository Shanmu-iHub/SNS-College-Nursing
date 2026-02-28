
import { PageHeader } from '../components/page-header'

export const BScNursingPage = () => {
    return `
    ${PageHeader(
        'Bachelor of Science (B.Sc.) Nursing',
        'A comprehensive four-year degree program transforming students into highly qualified nursing professionals',
        '/static/images/lab_hero.png',
        'B.Sc. Nursing Program'
    )}

    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Course Overview</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Empowering Future Healthcare Leaders</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        The B.Sc. Nursing program at SNS College of Nursing is designed to provide a strong foundation in nursing science, ethics, and clinical practice. We combine traditional medical knowledge with our unique Design Thinking approach to solve complex healthcare challenges.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Our graduates are prepared to excel in various healthcare settings, from super-specialty hospitals to community health centers, with a focus on compassionate patient care and clinical excellence.
                    </p>
                </div>
                <div class="relative">
                     <div class="absolute -top-4 -right-4 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                     <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                    <img src="/static/images/lab_hero.png" alt="Nursing Students" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                </div>
            </div>
        </div>
    </section>

    <!-- Design Thinking in Nursing (From Curriculum) -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div class="order-2 md:order-1 relative">
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                     <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <img src="/static/images/clinical_hero.png" alt="Nursing Students in Clinical Training" class="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]">
                </div>
                <div class="order-1 md:order-2">
                    <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Pedagogy</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Design Thinking in Nursing</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        SNS College of Nursing goes beyond the standard INC syllabus. We integrate our patented Design Thinking framework into the nursing curriculum to teach students how to empathize with patients and design innovative care solutions.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Students learn through a mix of classroom lectures, interactive lab sessions, and hands-on clinical assignments at our partner super-specialty hospitals.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Key Learning Domains (From Curriculum) -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gray-50 rounded-3xl p-12 shadow-sm border border-gray-100">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold text-gray-900">Key Learning Domains</h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 text-2xl"><i class="fas fa-atom"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Nursing Science</h3>
                        <p class="text-sm text-gray-500">Anatomy, Physiology, Micro-biology & Bio-chemistry</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600 text-2xl"><i class="fas fa-stethoscope"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Clinical Practice</h3>
                        <p class="text-sm text-gray-500">Medical-Surgical & Community Health Nursing</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-600 text-2xl"><i class="fas fa-users"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Behavioral Science</h3>
                        <p class="text-sm text-gray-500">Psychology & Sociology for patient empathy</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600 text-2xl"><i class="fas fa-lightbulb"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Innovation</h3>
                        <p class="text-sm text-gray-500">Design Thinking and Healthcare Entrepreneurship</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Admission Criteria -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Eligibility & Details</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to know about joining our B.Sc. Nursing program.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Duration -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-calendar-alt text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Course Duration</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        A full-time academic commitment ensuring comprehensive mastery of nursing skills.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>4 Academic Years</li>
                        <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>Including Internship</li>
                        <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>Clinical Rotations</li>
                    </ul>
                </div>

                <!-- Eligibility -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300 border-2 border-orange-500">
                    <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-user-graduate text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Standard requirements for admission as per University and Nursing Council norms.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-center"><i class="fas fa-check text-orange-500 mr-2"></i>10+2 with PCB (45% Aggregate)</li>
                        <li class="flex items-center"><i class="fas fa-check text-orange-500 mr-2"></i>English as a Subject</li>
                        <li class="flex items-center"><i class="fas fa-check text-orange-500 mr-2"></i>Minimum Age: 17 Years</li>
                    </ul>
                </div>

                <!-- Affiliation -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-university text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Affiliation</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Recognized certificates that open doors to global healthcare opportunities.
                    </p>
                    <ul class="space-y-3 text-sm text-gray-500">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>The TN Dr. M.G.R Medical University</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>INC & TNC Recognized</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Quality Checked</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Lab Facilities -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-16">State-of-the-Art Labs</h2>
            <div class="grid md:grid-cols-2 gap-16">
                <!-- Nursing Foundation Lab -->
                <div class="bg-blue-50 rounded-3xl p-10">
                    <div class="flex items-center mb-6">
                        <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <i class="fas fa-heartbeat text-2xl text-blue-600"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-gray-900">Nursing Foundation Lab</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-8">
                        Equipped with high-fidelity manikins and medical equipment to simulate a real hospital environment. Students practice fundamental procedures before patient interaction.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Patient care simulation modules</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Advanced CPR training units</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Sterile procedure simulation</span>
                        </li>
                    </ul>
                </div>

                <!-- Specialized Labs -->
                <div class="bg-green-50 rounded-3xl p-10">
                    <div class="flex items-center mb-6">
                        <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <i class="fas fa-baby text-2xl text-green-600"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-gray-900">Specialized Dept Labs</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-8">
                        Dedicated labs for Anatomy, Physiology, Nutrition, and Maternal & Child Health nursing to ensure deep subject-specific practical knowledge.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Obstetric & Gynaecology simulation</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Pediatric nursing care units</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Nutrition & Dietetics workspace</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Clinical Connect (Merged) -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Industry Exposure</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Bridging Theory and Practice</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Our Clinical Connect program ensures that students receive intensive practical training in real-world healthcare settings. Through strategic partnerships with leading hospitals in Coimbatore, we provide unmatched exposure to medical procedures and patient care.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Under the guidance of experienced medical professionals and senior nursing staff, our students develop the confidence and skills required to handle high-pressure clinical environments.
                    </p>
                </div>
                <div class="bg-blue-50 rounded-3xl p-10">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Key Training Areas</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">ICU & Critical Care Management</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Operation Theatre (OT) Protocols</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Pediatric & Neonatal Care</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Emergency & Trauma Care</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Hospital Partners Grid (Merged) -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Network Hospitals</h2>
                <p class="text-gray-600">Students undergo rotations at these premier institutions.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-hospital-alt text-4xl text-orange-600 mb-4"></i>
                    <h4 class="font-bold text-xl mb-2">KMCH Hospital</h4>
                    <p class="text-gray-500 text-sm">Super-specialty clinical training and ICU exposure.</p>
                </div>
                <div class="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-hospital-user text-4xl text-blue-600 mb-4"></i>
                    <h4 class="font-bold text-xl mb-2">G. Kuppuswamy Naidu Memorial Hospital</h4>
                    <p class="text-gray-500 text-sm">Advanced medical-surgical nursing experience.</p>
                </div>
                <div class="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-clinic-medical text-4xl text-green-600 mb-4"></i>
                    <h4 class="font-bold text-xl mb-2">Sri Ramakrishna Hospital</h4>
                    <p class="text-gray-500 text-sm">Comprehensive patient care and specialty clinics.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-orange-600 text-white relative overflow-hidden">
         <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Start Your Nursing Career Today</h2>
            <p class="text-xl mb-10 text-orange-100 font-light">
                Join India's first Design Thinking Nursing College and become a healthcare innovator.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
                <a href="/contact" class="bg-orange-700 border border-orange-500 hover:bg-orange-800 px-10 py-4 rounded-full font-bold text-lg transition shrink-0">
                    Enquire Now
                </a>
            </div>
        </div>
    </section>
  `;
};
