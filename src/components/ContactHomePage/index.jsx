'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import 'animate.css';

function ContactUsHomePage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate__animated", "animate__fadeInUp");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/enquire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Your message has been sent.",
                    icon: "success",
                    confirmButtonColor: "#F97316",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: data.message || "Something went wrong.",
                    icon: "error",
                    confirmButtonColor: "#F97316",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to send message. Try again later.",
                icon: "error",
                confirmButtonColor: "#F97316",
            });
        }
    };

    return (
        <div ref={sectionRef} className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="space-y-6 animate-on-scroll">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                        <p className="mt-4 text-lg">We’re here to assist you. Feel free to reach out!</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaPhoneAlt className="text-orange-500 text-xl" />
                        <a href="tel:+1234567890" className="text-lg hover:underline">
                            02038761531
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-orange-500 text-xl" />
                        <a href="mailto:contact@yourdomain.com" className="text-lg hover:underline">
                            info@demandrecruitmentservices.co.uk
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-orange-500 text-xl text-left font-bold">Operating Address:</p>
                        <p className="text-lg w-2/3">Demand Recruitment Services Ltd, First Floor Office 3, Ealing House, 33 Hanger Lane, London - W5 3HJ</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-orange-500 text-xl font-bold">Registered Office Address:</p>
                        <p className="text-lg w-2/3">Demand Recruitment Services Ltd
                            20-22 Wenlock Road ,  London England - N1 7GU
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-orange-500 text-xl font-bold">Business Hours:</p>
                        <p className="text-lg">123 Main Street, City, Country</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="animate-on-scroll">
                    <h2 className="text-3xl font-bold mb-6 text-gray-700">Send Us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-700">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsHomePage;
