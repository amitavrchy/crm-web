"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUsHomePage from "@/components/ContactHomePage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const EmployerBenefits = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const benefits = [
        { icon: "📈", text: "Increased Productivity & Engagement" },
        { icon: "💼", text: "Access to a Skilled Workforce" },
        { icon: "💰", text: "Tax Incentives & Subsidies" },
        { icon: "🎯", text: "Improved Retention Rates" },
        { icon: "🧠", text: "Ongoing Professional Development" },
        { icon: "🔍", text: "Better Talent Acquisition" },
        { icon: "🏆", text: "Enhanced Employer Branding" },
        { icon: "🌍", text: "Diversity & Inclusion Benefits" },
        { icon: "🤝", text: "Stronger Employee Loyalty" },
        { icon: "⚖️", text: "Work-Life Balance for Employees" },
        { icon: "🚀", text: "Boosted Innovation & Creativity" },
        { icon: "🏡", text: "Flexible & Remote Work Options" },
    ];

    return (
        <>
            <Navbar />
            <section className="px-16 pt-16 mb-16 flex flex-col lg:flex-row items-center gap-12 animate__animated animate__fadeInLeft" data-aos="fade-up">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 pl-4 border-l-4 border-orange-400">
                        Solution
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We’re passionate about placing people, but it doesn’t have to be complicated. With investment into
                        the onboarding journey of a candidate, we can ensure improved engagement, attendance, and overall
                        retention of staff. We partner an understanding of how your business works, your expectations, and
                        culture with our resourcing Toolbox, to guarantee a bespoke recruitment experience for both you
                        and our candidates.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src="/services/10.jpg" alt="Recruitment Solution" className="w-full rounded-xl shadow-lg" />
                </div>
            </section>

            <section className="mb-16 mt-16 animate__animated animate__fadeInRight" data-aos="fade-up">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
                    Employer Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all"
                            data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200"
                        >
                            <span className="text-3xl">{benefit.icon}</span>
                            <p className="text-lg">{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-16 animate__animated animate__fadeInUp px-10" data-aos="fade-up">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
                    Our Recruitment Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center text-center space-y-4 hover:shadow-2xl transition-all"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <span className="text-4xl">{step.icon}</span>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <ContactUsHomePage />
            <Footer />
        </>
    );
};
const steps = [
    {
        icon: "🎯",
        title: "Attract",
        description:
            "We promote innovative and targeted advertising campaigns, bespoke to our partnership, across a myriad of platforms.",
    },
    {
        icon: "🔍",
        title: "Screen",
        description:
            "Our comprehensive screening and interview process gives us detailed insight into our applicants, ensuring we nail talent matching every time.",
    },
    {
        icon: "🚀",
        title: "Onboard",
        description:
            "Our service is an extension of your business, and first impressions count. We’re passionate about delivering the perfect introduction to you and the role, and we are hands-on in providing that experience.",
    },
    {
        icon: "💡",
        title: "Engage",
        description:
            "As recruitment experts, our service doesn’t stop at resourcing talent. We are invested in the retention of staff and in managing the aspects that achieve this.",
    },
];

export default EmployerBenefits;
