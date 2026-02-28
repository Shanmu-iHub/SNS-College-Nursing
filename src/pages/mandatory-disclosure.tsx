import { PageHeader } from '../components/page-header'

export const MandatoryDisclosurePage = () => {
    return `
    ${PageHeader(
        'Mandatory Disclosure',
        'Transparency and compliance with INC, TNNMC, and University guidelines',
        '/static/images/home_hero.png',
        'Information & Compliance'
    )}

    <!-- General Information -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">General Information</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-blue-50">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Category</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Name of the Institution</td>
                            <td class="border border-gray-300 px-4 py-3">SNS COLLEGE OF NURSING</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Affiliation</td>
                            <td class="border border-gray-300 px-4 py-3">The Tamil Nadu Dr. M.G.R. Medical University, Chennai</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Recognition</td>
                            <td class="border border-gray-300 px-4 py-3">Indian Nursing Council (INC) & Tamil Nadu Nurses and Midwives Council (TNNMC)</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Complete Address</td>
                            <td class="border border-gray-300 px-4 py-3">SNS Kalvi Nagar, Sathy Main Road (NH-209), Saravanampatti Post, Coimbatore - 641 035, Tamil Nadu</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Principal Name</td>
                            <td class="border border-gray-300 px-4 py-3">Principal, SNS College of Nursing</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Institution Email</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="mailto:snsnursing@snsgroups.com" class="text-blue-600 hover:underline">snsnursing@snsgroups.com</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Contact Details</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="tel:+917550316701" class="text-blue-600 hover:underline">+91 75503 16701</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- Documents -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">Compliance Documents</h2>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
                    <div>
                        <h4 class="font-bold text-gray-900">INC Recognition Letter</h4>
                        <p class="text-sm text-gray-500">Annual recognition from Indian Nursing Council</p>
                    </div>
                    <a href="#" class="text-blue-600 font-semibold hover:underline">View PDF</a>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
                    <div>
                        <h4 class="font-bold text-gray-900">University Affiliation Order</h4>
                        <p class="text-sm text-gray-500">Affiliation from Dr. M.G.R. Medical University</p>
                    </div>
                    <a href="#" class="text-blue-600 font-semibold hover:underline">View PDF</a>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
                    <div>
                        <h4 class="font-bold text-gray-900">Sanitary Certificate</h4>
                        <p class="text-sm text-gray-500">Valid health and sanitation certificate</p>
                    </div>
                    <a href="#" class="text-blue-600 font-semibold hover:underline">View PDF</a>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
                    <div>
                        <h4 class="font-bold text-gray-900">Building Safety Certificate</h4>
                        <p class="text-sm text-gray-500">Compliance with safety standards</p>
                    </div>
                    <a href="#" class="text-blue-600 font-semibold hover:underline">View PDF</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Academic Information -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">Academic & Infrastructure Information</h2>
            
            <div class="grid md:grid-cols-3 gap-8 text-center">
                <div class="p-8 bg-blue-50 rounded-2xl">
                    <div class="text-4xl font-bold text-blue-600 mb-2">100</div>
                    <div class="text-gray-700 font-medium">Approved Intake (Annual)</div>
                </div>
                <div class="p-8 bg-green-50 rounded-2xl">
                     <div class="text-4xl font-bold text-green-600 mb-2">100%</div>
                    <div class="text-gray-700 font-medium">Result (Latest Batch)</div>
                </div>
                <div class="p-8 bg-orange-50 rounded-2xl">
                     <div class="text-4xl font-bold text-orange-600 mb-2">6</div>
                    <div class="text-gray-700 font-medium">Clinical Labs</div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-blue-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Request Information</h2>
            <p class="text-xl mb-8">For any specific documentation or verification requests, please contact our administration.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="bg-white text-blue-900 hover:bg-gray-100 px-10 py-3 rounded-full font-bold transition">
                    Contact Office
                </a>
            </div>
        </div>
    </section>
  `;
};
