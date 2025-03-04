'use client';
import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

function ContactUsHomePage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
        <>
            {/* Contact Details & Form */}
            < div className="container mx-auto px-4 py-10" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="text-3xl font-bold mb-6 text-gray-700">Get In Touch</h2>
                        <p className="text-lg mb-4">
                            If you have any questions, feel free to contact us. We’d love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <FaPhoneAlt className="text-orange-500 text-xl" />
                                <a href="tel:+1234567890" className="text-lg hover:underline">
                                    +1 234 567 890
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-orange-500 text-xl" />
                                <a href="mailto:contact@yourdomain.com" className="text-lg hover:underline">
                                    contact@yourdomain.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-orange-500 text-xl" />
                                <p className="text-lg">123 Main Street, City, Country</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
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
            </div >
        </>
    )
}

export default ContactUsHomePage