"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQImage from "../../../public/FAQ.jpg";
import Chat from "@/components/Chat";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "About our profile?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "News and topics?",
            answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "How to use?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "What services do we offer?",
            answer: "We provide a range of web development and design solutions tailored to your needs.",
        },
        {
            question: "How can I contact support?",
            answer: "You can reach out to our support team via the contact form on our website or email us at support@example.com.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit cards, PayPal, and other common payment methods.",
        },
    ];

    const filteredFAQs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
            <Navbar />
            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Search question here"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-4 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                        <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="space-y-4">
                        {filteredFAQs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden"
                            >
                                <button
                                    className="w-full flex justify-between items-center p-4 text-left text-gray-700 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : "rotate-0"
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 text-gray-600 bg-gray-50">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Image
                        src={FAQImage}
                        alt="FAQ Illustration"
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
            <Chat />
            <Footer />
        </div>
    );
}

export default FAQ;