import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/25.jpg";
import img2 from "../../../public/services/26.jpg";
import img3 from "../../../public/services/27.jpg";

const diversityInclusion = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Diversity & Inclusion Hiring Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Inclusive Hiring Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Building a diverse and inclusive workforce is more than a corporate initiative; it’s a strategic advantage. Our inclusive hiring solutions are designed to help businesses attract, hire, and retain a workforce that represents a variety of backgrounds, experiences, and perspectives. By embracing diversity, organizations can foster innovation, improve employee engagement, and enhance their employer brand.
          </p>
          <ul className="mt-4 space-y-3">
            {["Equitable recruitment processes", "Unbiased candidate evaluations", "Diversity-driven talent sourcing", "Inclusion-focused workplace strategies"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Diversity Hiring Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Inclusive Hiring Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Diversity Hiring Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our comprehensive hiring solutions are tailored to ensure businesses achieve their diversity goals. We leverage inclusive job descriptions, structured interviews, and data-driven hiring practices to eliminate bias and create equal opportunities for all candidates. Our goal is to build strong, inclusive teams that drive business success.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition">
              <a href="/contactUs">Get Started</a>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Why Invest in Diversity & Inclusion?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Organizations that prioritize diversity and inclusion experience increased innovation, better decision-making, and higher employee satisfaction. Our expertise in inclusive hiring enables businesses to create equitable work environments, eliminate hiring biases, and improve overall team performance.
            </p>
            <ul className="mt-4 space-y-4">
              {["Proven diversity hiring strategies", "Cultural competence training", "Bias-free recruitment processes", "Enhanced employer reputation"].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <UsersIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image src={img3} alt="Diversity & Inclusion Impact" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
        </div>
      </section>

      {/* Testimonials & Achievements */}
      <Testimonials />
      <Achievements />
      
      <Footer />
    </div>
  );
}

export default diversityInclusion;
