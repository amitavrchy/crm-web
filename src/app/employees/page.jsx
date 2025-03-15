"use client"
import { useState, useEffect } from "react";
import "animate.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import ContactUsHomePage from "@/components/ContactHomePage";

export default function Employees() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
                        Join Our Team
                    </h1>
                    <p className="text-xl text-center text-white animate__animated animate__fadeInUp">
                        Be part of an exciting and growing company. We offer a range of benefits and career opportunities.
                    </p>
                </div>
            </div>
            <div className="container mx-auto p-6 lg:p-12 bg-gray-50 min-h-screen">
                <section
                    className="mb-16 animate__animated animate__fadeInLeft bg-gradient-to-r from-gray-50 to-white rounded-lg p-8 shadow-lg"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Our Hiring Process</h2>
                    <ul className="list-none space-y-8">
                        {/* Step 1 */}
                        <li className="flex items-start space-x-4 hover:bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300" data-aos="fade-up" data-aos-duration="1500">
                            <span className="text-4xl text-green-500">📞</span>
                            <div>
                                <p className="text-xl font-semibold text-gray-800">Application</p>
                                <p className="text-gray-600 text-lg">Call, email, or apply online.</p>
                            </div>
                        </li>
                        {/* Step 2 */}
                        <li className="flex items-start space-x-4 hover:bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                            <span className="text-4xl text-green-500">☕</span>
                            <div>
                                <p className="text-xl font-semibold text-gray-800">Intro Chat</p>
                                <p className="text-gray-600 text-lg">Informal discussion to understand fit.</p>
                            </div>
                        </li>
                        {/* Step 3 */}
                        <li className="flex items-start space-x-4 hover:bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                            <span className="text-4xl text-green-500">📝</span>
                            <div>
                                <p className="text-xl font-semibold text-gray-800">Interview</p>
                                <p className="text-gray-600 text-lg">Meet our team and discuss your skills.</p>
                            </div>
                        </li>
                        {/* Step 4 */}
                        <li className="flex items-start space-x-4 hover:bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                            <span className="text-4xl text-green-500">🎉</span>
                            <div>
                                <p className="text-xl font-semibold text-gray-800">Offer</p>
                                <p className="text-gray-600 text-lg">Join the team and begin your journey with us!</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="mb-16 animate__animated animate__fadeInRight" data-aos="fade-up" data-aos-duration="1200">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Employee Benefits</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Benefit Items */}
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500">
                            <span className="text-3xl">💰</span>
                            <p className="text-lg">Competitive Salary & Bonuses</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                            <span className="text-3xl">🏡</span>
                            <p className="text-lg">Hybrid & Remote Work Options</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                            <span className="text-3xl">📚</span>
                            <p className="text-lg">Professional Growth & Learning Support</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                            <span className="text-3xl">🎉</span>
                            <p className="text-lg">Team Events & Socials</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                            <span className="text-3xl">🏥</span>
                            <p className="text-lg">Private Healthcare Plans</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                            <span className="text-3xl">🌴</span>
                            <p className="text-lg">Paid Time Off & Holidays</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                            <span className="text-3xl">💼</span>
                            <p className="text-lg">Commission Earning from Day One</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">
                            <span className="text-3xl">🔓</span>
                            <p className="text-lg">No Threshold on Commission</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
                            <span className="text-3xl">⏰</span>
                            <p className="text-lg">4pm Finishes</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
                            <span className="text-3xl">🍹</span>
                            <p className="text-lg">Companywide Incentives & Competitions</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
                            <span className="text-3xl">📈</span>
                            <p className="text-lg">Training & Subsidised Courses</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1100">
                            <span className="text-3xl">🏆</span>
                            <p className="text-lg">Awards Evening with 'Winners Trip'</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1200">
                            <span className="text-3xl">🛡️</span>
                            <p className="text-lg">Life Cover</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1300">
                            <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            <p className="text-lg">Annual Family Day</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1400">
                            <span className="text-3xl">📅</span>
                            <p className="text-lg">Work with Days</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500">
                            <span className="text-3xl">🔗</span>
                            <p className="text-lg">LinkedIn Premium</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1600">
                            <span className="text-3xl">🏡</span>
                            <p className="text-lg">Cottage Breaks</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1700">
                            <span className="text-3xl">✈️</span>
                            <p className="text-lg">Sabbatical - Take Time to Travel</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1800">
                            <span className="text-3xl">🎗️</span>
                            <p className="text-lg">Charity Day - Day Off</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1900">
                            <span className="text-3xl">💼</span>
                            <p className="text-lg">Holiday Trading - Buy/Sell a Week</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="2000">
                            <span className="text-3xl">🏠</span>
                            <p className="text-lg">Day Off to Move Home</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="2100">
                            <span className="text-3xl">👥</span>
                            <p className="text-lg">All Staff Meetings (Wider Team Access)</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="2200">
                            <span className="text-3xl">🍻</span>
                            <p className="text-lg">Monthly Socials</p>
                        </div>
                    </div>
                </section>

                {/* Redesigned Steps Section */}
                <section id="steps" className="w-full bg-[#0070BA] text-white py-16 px-5 relative overflow-hidden rounded-2xl">
                    {/* Background Shapes */}
                    <div className="absolute top-0 left-0 w-full h-44 bg-blue-500 opacity-30 rounded-br-full"></div>
                    <div className="absolute bottom-0 right-0 w-full h-44 bg-blue-500 opacity-30 rounded-tl-full"></div>

                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                We Believe in Keeping It Simple
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300">
                                Let’s get to know each other and make your journey effortless.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    className="relative flex flex-col md:flex-row items-center md:items-start border-l-4 border-blue-500 pl-5 py-6 bg-gray-800 rounded-xl shadow-lg"
                                >
                                    {/* Step Number */}
                                    <div className="absolute -left-5 w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-3xl font-bold text-white">
                                        {feature.step}
                                    </div>

                                    {/* Content Section */}
                                    <div className="md:flex-1 ml-16">
                                        <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-lg font-light text-white">
                                Ready to take the next step? We’re here to make it smooth and exciting.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <ContactUsHomePage />
            <Footer />
        </>
    );
}

const features = [
    {
        step: "01",
        title: "Apply",
        description:
            "You can call us for a confidential chat- 01604 704 058, email us your CV - info@acsrecruitment.co.uk, or pop in to our branches to discuss what opportunities we have. We also advertise all our roles on our website, so keep an eye out.",
    },
    {
        step: "02",
        title: "Coffee chat",
        description:
            "We have a chat over a coffee either in person or Zoom and see if we’re a potential match for each other…",
    },
    {
        step: "03",
        title: "Interview process",
        description:
            "A slightly more formalized version of the coffee chat. We want to know the real you, not just what's on your CV. What makes you tick and how can we ensure your next career move is right for us and we are right for you. Depending on the position will depend on the format but we will make sure you have everything you need.",
    },
    {
        step: "04",
        title: "Offer and start – exciting times – we want each other",
        description:
            "A formal offer is sent through and once we have agreed start dates, we will get your onboarding into the ACS Family organised. This is where the real fun begins.",
    },
];
