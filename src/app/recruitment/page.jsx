import Navbar from '@/components/Navbar';
import Link from 'next/link';

const recruitmentServices = [
    {
        category: 'Job Placement & Staffing',
        services: [
            'Permanent Recruitment',
            'Temporary & Contract Staffing',
            'Executive Search & Headhunting',
            'Managed Service Provider - Managed Services',
            'Staffing Solution Company',
            'Staffing Bank Solutions',
            'Referral : Refer a Friend'
        ]
    },
    {
        category: 'Employer Support',
        services: [
            'Talent Acquisition & Workforce Planning',
            'Background Checks & Screening',
            'Diversity & Inclusion Hiring Solutions'
        ]
    },
    {
        category: 'Candidate Services',
        services: [
            'CV Writing & Interview Coaching',
            'Career Counseling & Job Matching',
            'Skill Development & Training'
        ]
    },
    {
        category: 'Specialized Recruitment',
        services: [
            'IT & Tech Staffing',
            'Healthcare & Nursing Placement',
            'Finance & Accounting Recruitment',
            'Engineering & Construction Recruitment'
        ]
    }
];

export default function Recruitment() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Recruitment Services</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {recruitmentServices.map((section, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 text-orange-500">{section.category}</h2>
                        <ul className="space-y-2">
                            {section.services.map((service, idx) => (
                                <li key={idx} className="text-gray-700">● {service}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/contactUs">
                    <span className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg transition cursor-pointer">Get in Touch</span>
                </Link>
            </div>
        </div>
        </>
    );
}
