import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/94.jpg";
import img2 from "../../../public/services/95.jpg";
import img3 from "../../../public/services/96.jpg";

const CleaningSanitizationServices = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Cleaning & Sanitization Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Comprehensive Cleaning Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in providing thorough and professional cleaning and sanitization services to ensure that your workplace or facility is spotless and hygienic. Our services are tailored to meet the unique needs of your business, providing a safe, clean, and healthy environment for your employees, customers, and visitors. We use the latest cleaning technologies and environmentally friendly products to ensure quality and sustainability.
          </p>
          <ul className="mt-4 space-y-3">
            {["High-standard cleaning protocols", "Eco-friendly cleaning products", "Comprehensive sanitization procedures", "Tailored cleaning schedules"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Cleaning Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Sanitization Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Tailored Cleaning & Sanitization Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our team of experienced cleaning professionals is equipped to handle all types of spaces, from offices to large commercial facilities. We offer customizable cleaning and sanitization solutions to meet your exact needs, ensuring your space remains hygienic and safe for everyone. Whether it’s regular cleaning, deep cleaning, or specialized sanitization, we are here to help.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Cleaning & Sanitization Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our cleaning and sanitization services are designed to provide peace of mind, knowing that your workplace is in safe hands. With years of experience in the industry, we use proven cleaning methods and eco-friendly products to deliver exceptional results. We pride ourselves on reliability, attention to detail, and a commitment to maintaining a healthy environment for all.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert cleaning professionals", "Tailored cleaning schedules", "Environmentally friendly solutions", "Proven sanitization techniques"].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <UsersIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image src={img3} alt="Why Choose Us" className="rounded-2xl shadow-2xl" placeholder="blur" />
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

export default CleaningSanitizationServices;
