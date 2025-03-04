"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import img1 from "../../../public/about_service.jpg";
import img2 from "../../../public/about-us/about-2.jpg";
import Chat from "@/components/Chat";

function ContactUs() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Submitting form:", formData); // Debug log

        try {
            const response = await fetch("/api/enquire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Response from server:", data); // Debug log

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
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* Breadcrumb Section */}
                <div className="relative w-full h-96 mb-8">
                    <Image
                        src={img1}
                        alt="Breadcrumb Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-4xl font-bold">Contact Us</h1>
                        <p className="mt-4 text-lg">We’re here to assist you. Feel free to reach out!</p>
                    </div>
                </div>



                {/* Contact Details & Form */}
                <div className="container mx-auto px-4 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Details */}
                        <div className="flex flex-col justify-center items-start">
                            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                            <p className="text-lg mb-4">
                                If you have any questions, feel free to contact us. We’d love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <FaPhoneAlt className="text-orange-500 text-xl" />
                                    <a href="tel:+1234567890" className="text-lg hover:underline">
                                        +00000000000
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
                            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium mb-2">
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
                                    <label htmlFor="email" className="block text-lg font-medium mb-2">
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
                                    <label htmlFor="message" className="block text-lg font-medium mb-2">
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

                {/*Section */}
                <div className="relative w-full h-96 my-8">
                    <Image
                        src={img2}
                        alt="Team collaboration"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <h2 className="text-3xl font-bold text-white mb-4 text-center">
                            Come and register with us today
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
                                <a href="allJobs">
                                    Find a job
                                </a>
                            </button>
                            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
                                <a href="postJob">
                                    Hire talent
                                </a>
                            </button>
                            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
                                <a href="/signUp">
                                    Work for us
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="relative w-full h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091865!2d144.95592831568143!3d-37.817209979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611818997208!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </main>
            <Chat />
            <Footer />
        </div>
    );
}

export default ContactUs;
