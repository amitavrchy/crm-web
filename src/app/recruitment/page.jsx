"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "animate.css";
import Footer from "@/components/Footer";
import ContactUsHomePage from "@/components/ContactHomePage";

const recruitmentServices = [
    {
        category: "Job Placement & Staffing",
        description: "Helping businesses find the right talent and individuals secure their dream jobs.",
        services: [
            { name: "Permanent Recruitment", link: "/permanentRecruitment" },
            { name: "Temporary & Contract Staffing", link: "/temporary" },
            { name: "Executive Search & Headhunting", link: "/searchHunting" },
            { name: "Managed Service Provider - Managed Services", link: "/managedServiceProvider" },
            { name: "Staffing Solution Company", link: "/staffingSolution" },
            { name: "Staffing Bank Solutions", link: "/staffingBank" },
            { name: "Referral: Refer a Friend", link: "/referral" },
        ],
    },
    {
        category: "Employer Support",
        description: "Enhancing hiring processes with comprehensive support solutions for employers.",
        services: [
            { name: "Talent Acquisition & Workforce Planning", link: "/talentAcquisition" },
            { name: "Background Checks & Screening", link: "/backgroundChecks" },
            { name: "Diversity & Inclusion Hiring Solutions", link: "/diversityInclusion" },
        ],
    },
    {
        category: "Candidate Services",
        description: "Providing guidance and resources to job seekers for a successful career.",
        services: [
            { name: "CV Writing & Interview Coaching", link: "/cvWriting" },
            { name: "Career Counseling & Job Matching", link: "/careerCounseling" },
            { name: "Skill Development & Training", link: "/skillDevelopment" },
        ],
    },
    {
        category: "Specialized Recruitment",
        description: "Industry-specific recruitment solutions to match top talent with the right opportunities.",
        services: [
            { name: "IT & Tech Staffing", link: "/itTechStaffing" },
            { name: "Healthcare & Nursing Placement", link: "/healthcareNursing" },
            { name: "Finance & Accounting Recruitment", link: "/financeAccounting" },
            { name: "Engineering & Construction Recruitment", link: "/engineeringConstruction" },
        ],
    },
];

const Recruitment = () => {
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3, // Trigger when 30% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
                }
            });
        }, observerOptions);

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative w-full h-44 mb-8">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-6xl font-extrabold">Recruitment Services</h1>
                </div>
            </div>
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {recruitmentServices.map((section, index) => (
                        <div
                            key={index}
                            id={`section-${index}`}
                            ref={(el) => (sectionRefs.current[index] = el)}
                            className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ${
                                visibleSections[`section-${index}`]
                                    ? "animate__animated animate__fadeInUp"
                                    : "opacity-0 translate-y-10"
                            }`}
                        >
                            <h2 className="text-2xl font-semibold mb-2 text-orange-500">{section.category}</h2>
                            <p className="text-gray-600 mb-4">{section.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {section.services.map((service, idx) => (
                                    <Link key={idx} href={service.link}>
                                        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer text-center shadow-sm">
                                            {service.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/contactUs">
                        <span className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg transition cursor-pointer shadow-lg animate__animated animate__pulse animate__infinite">
                            Get in Touch
                        </span>
                    </Link>
                </div>
            </div>
            <ContactUsHomePage />
            <Footer />
        </>
    );
}
export default Recruitment
