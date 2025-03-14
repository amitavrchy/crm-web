import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/85.jpg";
import img2 from "../../../public/services/86.jpg";
import img3 from "../../../public/services/87.jpg";

const HVACElectricalPlumbingServices = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            HVAC, Electrical, & Plumbing Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Approach to HVAC, Electrical, & Plumbing Solutions</h2>
          <p className="text-gray-600 leading-relaxed">
            We offer top-notch HVAC, electrical, and plumbing services to ensure that your systems run smoothly and efficiently. Our team of experts provides reliable installation, maintenance, and repair services to keep your systems performing at their best. Whether you're looking to upgrade your HVAC system, address electrical issues, or maintain your plumbing, we provide a wide range of solutions to meet your needs, ensuring comfort and safety in your home or business.
          </p>
          <ul className="mt-4 space-y-3">
            {["Efficient HVAC installation and maintenance", "Comprehensive electrical services", "Reliable plumbing solutions", "24/7 emergency services"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="HVAC, Electrical & Plumbing Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="HVAC, Electrical & Plumbing Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive HVAC, Electrical, & Plumbing Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our team specializes in HVAC, electrical, and plumbing services that ensure your systems function efficiently and effectively. From installing energy-efficient HVAC systems to providing reliable electrical troubleshooting and plumbing solutions, we’ve got you covered. We prioritize safety, quality, and customer satisfaction in every project we undertake.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our HVAC, Electrical, & Plumbing Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are committed to providing the highest level of HVAC, electrical, and plumbing services, ensuring the comfort and safety of your home or business. Our team is highly trained and experienced, offering efficient solutions tailored to meet your specific needs. With a focus on quality workmanship and customer satisfaction, we are the trusted choice for all your HVAC, electrical, and plumbing needs.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert HVAC installations and repairs", "Certified electrical technicians", "Comprehensive plumbing solutions", "24/7 emergency services"].map((item, index) => (
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

export default HVACElectricalPlumbingServices;
