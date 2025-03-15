"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "animate.css";
import Footer from "@/components/Footer";
import ContactUsHomePage from "@/components/ContactHomePage";
import Image from "next/image";

const facilityServices = [
    {
        category: "Building & Property Maintenance",
        icon: "fas fa-tools",
        services: [
            { name: "Preventative Maintenance & Repairs", link: "/preventativeMaintenance" },
            { name: "Janitorial & Housekeeping Services", link: "/janitorialServices" },
            { name: "Landscaping & Groundskeeping", link: "/landscapingServices" },
        ],
    },
    {
        category: "Security & Safety Management",
        icon: "fas fa-shield-alt",
        services: [
            { name: "CCTV Surveillance & Security Staffing", link: "/cctvSurveillance" },
            { name: "Fire Safety & Emergency Response", link: "/fireSafety" },
            { name: "Access Control & Visitor Management", link: "/accessControl" },
        ],
    },
    {
        category: "Utility & Energy Management",
        icon: "fas fa-lightbulb",
        services: [
            { name: "HVAC, Electrical, & Plumbing Services", link: "/hvacServices" },
            { name: "Energy Efficiency & Sustainability Consulting", link: "/energyEfficiency" },
            { name: "Waste Management & Recycling Solutions", link: "/wasteManagement" },
        ],
    },
    {
        category: "Workplace & Office Support",
        icon: "fas fa-building",
        services: [
            { name: "Office Space Planning & Setup", link: "/officeSetup" },
            { name: "Cleaning & Sanitization Services", link: "/cleaningSanitization" },
            { name: "IT & Technical Support", link: "/itTechStaffing" },
        ],
    },
];

export default function FacilityManagement() {
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observerOptions = { threshold: 0 };
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
                    <h1 className="text-6xl font-extrabold">Facility Management</h1>
                </div>
            </div>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-700">
                            Ensuring Safe, Efficient, and Sustainable Facilities
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Facility management is key to maintaining safe, comfortable, and efficient spaces. From
                            building maintenance and security to energy management and office support, our comprehensive
                            services help organizations optimize their environments for productivity and sustainability.

                            At [Your Organization Name], we are dedicated to delivering top-tier facility solutions,
                            ensuring operational efficiency, safety, and comfort for every space.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-16 -right-16 w-72 h-72 bg-orange-400 opacity-30 rounded-full blur-3xl z-0"></div>
                        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl z-0"></div>
                        <Image
                            src="/facility.jpg"
                            alt="Facility Management"
                            className="relative rounded-2xl shadow-2xl z-10"
                            width="600"
                            height="300"
                        />
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {facilityServices.map((section, index) => (
                        <div
                            key={index}
                            id={`section-${index}`}
                            ref={(el) => (sectionRefs.current[index] = el)}
                            className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ${visibleSections[`section-${index}`]
                                ? "animate__animated animate__fadeInUp"
                                : "opacity-0 translate-y-10"
                                }`}
                        >
                            <h2 className="text-2xl font-semibold mb-2 text-orange-500">
                                <i className={`${section.icon} mr-2`}></i> {section.category}
                            </h2>
                            <ul className="space-y-2">
                                {section.services.map((service, idx) => (
                                    <li key={idx}>
                                        <Link href={service.link} className="flex items-center p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-orange-500 hover:text-white transition duration-300 shadow-sm">
                                            <i className="fas fa-check-circle mr-2"></i> {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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