import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/79.jpg";
import img2 from "../../../public/services/80.jpg";
import img3 from "../../../public/services/81.jpg";

const FireSafetyEmergencyResponse = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Fire Safety & Emergency Response Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Fire Safety & Emergency Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our fire safety and emergency response services are designed to protect your business, employees, and assets from fire hazards and emergencies. We provide proactive fire prevention strategies, comprehensive emergency response plans, and the latest fire safety equipment to ensure a safe and compliant environment. Our experts are trained to handle all aspects of fire safety, from prevention to emergency management.
          </p>
          <ul className="mt-4 space-y-3">
            {["Fire risk assessments and audits", "Emergency response planning", "Fire safety training and drills", "Compliance with fire safety regulations"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Fire Safety Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Fire Safety Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Fire Safety & Emergency Response Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We provide a wide range of fire safety and emergency response services that cover everything from fire prevention strategies to crisis management. Our team is experienced in assessing risks, implementing fire safety measures, and offering training programs to ensure that your staff is prepared in case of an emergency. With our services, you can rest assured that you are fully prepared to deal with any fire-related incident.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Fire Safety & Emergency Response Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our fire safety and emergency response solutions are designed to help you protect your property, personnel, and customers. We offer customized services that meet your specific needs, ensuring you remain compliant with fire safety regulations and prepared for emergencies. Whether you're looking for fire prevention, training, or emergency response solutions, we provide the expertise and resources needed to safeguard your business.
            </p>
            <ul className="mt-4 space-y-4">
              {["Experienced fire safety experts", "Comprehensive emergency response plans", "Fire safety compliance", "Emergency drills and staff training"].map((item, index) => (
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

export default FireSafetyEmergencyResponse;
