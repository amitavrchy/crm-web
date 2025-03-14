"use client"
import React from "react";
import Vendors from "@/components/vendors";
import Image from "next/image";
import { useState, useEffect } from "react";
import img1 from "../../../public/about-us/about-1.jpg";
import img4 from "../../../public/about-us-wte/4.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import SmallMighty from "@/components/SmallMighty";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [gradient, setGradient] = useState(
    "bg-gradient-to-r from-blue-50 to-blue-100"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(
        gradient === "bg-gradient-to-r from-blue-50 to-blue-100"
          ? "bg-gradient-to-r from-blue-100 to-blue-200"
          : "bg-gradient-to-r from-blue-50 to-blue-100"
      );
    }, 3000); // Smooth transition every 3s

    return () => clearInterval(interval);
  }, [gradient]);
  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-16 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            About Us
          </h1>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Bubble Animation Container */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="bubble"
              style={{
                "--i": Math.random() * (30 - 10) + 10, // Random size
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * (15 - 8) + 8}s`, // Random speed
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="mt-6 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Demand Recruitment Services Ltd started as a recruitment company with a vision to bridge the gap between businesses and skilled professionals. Over the years, we have grown into a comprehensive staffing solutions provider, offering Managed Service Provision, Facility Management, and Community Services staffing.
          </motion.p>
        </div>

        {/* Styles */}
        <style jsx>{`
        .bubble {
          position: absolute;
          bottom: -50px;
          width: calc(var(--i) * 1px);
          height: calc(var(--i) * 1px);
          background: rgba(173, 216, 230, 0.6);
          border-radius: 50%;
          opacity: 0.9;
          animation: floatBubble linear infinite;
        }

        @keyframes floatBubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-50vh) scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Vision & Mission</h2>
          <p className="text-gray-600">
            Our mission is to simplify hiring by providing businesses with reliable workforce solutions and empowering job seekers with meaningful career opportunities. We strive to be the leading staffing partner known for quality, efficiency, and innovation in workforce solutions
          </p>

          <p className="text-gray-600">
            <span className="font-bold">Why Demand Recruitment Services Ltd?</span><br />
            In today’s competitive job market, businesses need the right talent to thrive, and job seekers need opportunities that match their skills and aspirations. That’s where Demand Recruitment Services Ltd comes in—a trusted partner in connecting top talent with the right opportunities.

          </p>
        </div>
        <div>
          <Image
            src={img1}
            alt="Our Mission and Vision"
            className="rounded-2xl shadow-2xl"
            placeholder="blur"
          />
        </div>
      </section>

      {/* Trustable Recruitment Section */}
      <section className="bg-white py-16">
        <div className="mx-auto px-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 text-center">
              The Need for Demand Recruitment Services
            </h2>
            <ol className="mt-6 list-decimal list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>
                <span className="font-semibold text-[#F97316]">Access to the Best Talent:</span> Companies often struggle to find skilled professionals who align with their needs. Demand Recruitment Services Ltd has an extensive network of pre-screened candidates, ensuring businesses hire the best.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Time and Cost Efficiency:</span> Recruiting can be time-consuming and expensive. Our streamlined recruitment process saves organizations valuable time and resources by handling sourcing, screening, and initial interviews.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Industry Expertise:</span> With deep knowledge of various sectors, Demand Recruitment Services Ltd understands industry-specific hiring challenges and tailors recruitment strategies accordingly.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Quality and Compliance Assurance:</span> We ensure that all placements meet industry standards, legal requirements, and company expectations, reducing hiring risks.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Flexible Recruitment Solutions:</span> Whether businesses need permanent staff, temporary workers, or contract-based professionals, we offer customized solutions to fit their workforce needs.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide top-tier workforce solutions designed to help businesses grow efficiently.
              Whether you need staffing solutions, facility management, or community services, we are here to support you with expertise and dedication.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Recruitment Service */}
              <div className="p-6 bg-white shadow-lg rounded-2xl transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-[#F97316] mb-3">Recruitment Service</h3>
                <p className="text-gray-700">
                  We specialize in connecting businesses with highly skilled professionals, ensuring the right talent meets the right opportunities.
                </p>
              </div>

              {/* Community Management */}
              <div className="p-6 bg-white shadow-lg rounded-2xl transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-[#F97316] mb-3">Community Management</h3>
                <p className="text-gray-700">
                  Our team fosters engagement and collaboration within communities, providing support and management to create a positive environment.
                </p>
              </div>

              {/* Facility Management */}
              <div className="p-6 bg-white shadow-lg rounded-2xl transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-[#F97316] mb-3">Facility Management</h3>
                <p className="text-gray-700">
                  We handle the maintenance and operations of facilities, ensuring seamless functionality and optimal efficiency for businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={img4}
              alt="Why Choose Us"
              className="rounded-2xl shadow-2xl"
              placeholder="blur"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
            <ul className="mt-6 list-disc list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>
                <span className="font-semibold text-[#F97316]">Proven Track Record:</span> A strong history of successful placements across multiple industries.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Client-Focused Approach:</span> We prioritize understanding both employer and candidate needs to ensure the right match.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Efficiency and Reliability:</span> Our hiring process delivers top talent quickly and effectively.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Long-Term Partnerships:</span> We build lasting relationships, providing ongoing support and career development.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Comprehensive Expertise:</span> Deep industry knowledge, a vast talent pool, and strategic recruitment solutions.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Cost-Effective Hiring:</span> Our efficient strategies help businesses optimize recruitment budgets.
              </li>
              <li>
                <span className="font-semibold text-[#F97316]">Commitment to Diversity and Inclusion:</span> We promote inclusive hiring practices and workforce development.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <SmallMighty />
      <Testimonials />
      <Achievements />
      <Vendors />
      <Footer />
    </div>
  );
}

export default AboutUs;