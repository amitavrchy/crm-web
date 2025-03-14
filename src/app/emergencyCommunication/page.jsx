import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/67.jpg";
import img2 from "../../../public/services/68.jpg";
import img3 from "../../../public/services/69.jpg";

const EmergencyCrisisCommunication = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Emergency & Crisis Communication
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Emergency & Crisis Communication Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Effective communication during emergencies and crises is essential to protect your organization and its stakeholders. We help businesses craft and implement communication strategies that ensure clear, concise, and timely messaging when it matters most. Our approach focuses on managing both internal and external communication to mitigate risks and maintain trust during critical situations.
          </p>
          <ul className="mt-4 space-y-3">
            {["Crisis management communication", "Real-time communication solutions", "Stakeholder engagement in emergencies", "Proactive risk mitigation"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Crisis Communication" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Crisis Communication Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Crisis Communication Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our emergency and crisis communication services are designed to ensure your organization is prepared for the unexpected. We help you develop communication protocols, crisis messaging, and media relations strategies to safeguard your reputation and maintain stakeholder confidence during a crisis. From natural disasters to PR crises, we have you covered.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Emergency & Crisis Communication?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Having a reliable crisis communication partner can make all the difference when it comes to handling high-pressure situations. Our team of experts works with you to establish clear communication plans that help mitigate the impact of crises. Whether it’s dealing with the media, communicating with employees, or ensuring customers receive timely updates, we help manage the narrative and keep your brand reputation intact.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert crisis communication planning", "Clear and timely messaging", "Effective media relations", "Stakeholder communication management"].map((item, index) => (
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

export default EmergencyCrisisCommunication;
