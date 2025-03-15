import ContactUsHomePage from "@/components/ContactHomePage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const OurSupport = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                    Our Support
                    </h1>
                    <p className="text-lg text-white mt-5">
                        We're here to assist you every step of the way. Explore our support services and resources.
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16 animate__animated animate__fadeIn">
                {/* Support Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Customer Assistance */}
                    <div
                        className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-gray-800"
                        data-aos="fade-up"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Assistance</h2>
                        <p className="text-gray-600 mb-4">
                            Get 24/7 support for any issues or inquiries. Our dedicated team is ready to help via phone, email, or live chat.
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Phone Support: 1-800-123-4567</li>
                            <li>Email Support: support@example.com</li>
                            <li>Live Chat: Available 24/7</li>
                        </ul>
                    </div>

                    {/* Resource Center */}
                    <div
                        className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-gray-800"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resource Center</h2>
                        <p className="text-gray-600 mb-4">
                            Access guides, FAQs, and best practices to make the most of our services. Our knowledge base is continually updated.
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Step-by-Step Guides</li>
                            <li>FAQs and Troubleshooting</li>
                            <li>Product Feature Articles</li>
                        </ul>
                    </div>

                    {/* Engagement & Feedback */}
                    <div
                        className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-gray-800"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Engagement & Feedback</h2>
                        <p className="text-gray-600 mb-4">
                            We value your feedback. Share your experience and help us improve our support services. Your opinion matters!
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Customer Satisfaction Surveys</li>
                            <li>Product Improvement Suggestions</li>
                            <li>Feedback Forums</li>
                        </ul>
                    </div>
                </div>

                {/* Additional Support Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {/* Technical Support */}
                    <div
                        className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-gray-800"
                        data-aos="fade-up"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Support</h2>
                        <p className="text-gray-600 mb-4">
                            Need help with technical issues? Our team of experts is available to assist with troubleshooting and resolving technical problems.
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Software Installations</li>
                            <li>Network Configuration</li>
                            <li>Bug Reporting</li>
                        </ul>
                    </div>

                    {/* Community Support */}
                    <div
                        className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-gray-800"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Support</h2>
                        <p className="text-gray-600 mb-4">
                            Join our community forum to share experiences, ask questions, and collaborate with other users.
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Discussion Boards</li>
                            <li>Peer-to-Peer Help</li>
                            <li>Community Events</li>
                        </ul>
                    </div>

                    {/* Live Webinars */}
                    <div
                        className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-gray-800"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Webinars</h2>
                        <p className="text-gray-600 mb-4">
                            Attend our live webinars for in-depth sessions on product usage, best practices, and expert insights.
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Monthly Webinars</li>
                            <li>Product Demo Sessions</li>
                            <li>Q&A with Experts</li>
                        </ul>
                    </div>
                </div>
                <ContactUsHomePage />
            </div>
            <Footer />
        </>
    );
};

export default OurSupport;
