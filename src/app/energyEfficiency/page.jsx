import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/2.jpg";
import img2 from "../../../public/services/3.jpg";
import img3 from "../../../public/services/4.jpg";

const EnergyEfficiencySustainabilityConsulting = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Energy Efficiency & Sustainability Consulting
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Approach to Energy Efficiency & Sustainability</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide expert consulting services focused on energy efficiency and sustainability, helping organizations reduce their environmental footprint and operational costs. Our solutions include energy audits, sustainable building practices, and tailored recommendations for improving energy performance. By embracing sustainability, we enable companies to enhance efficiency, reduce waste, and foster a positive environmental impact.
          </p>
          <ul className="mt-4 space-y-3">
            {["Energy audits and assessments", "Sustainable building practices", "Renewable energy solutions", "Cost-saving energy strategies"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Energy Efficiency & Sustainability Consulting" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Energy Efficiency & Sustainability Consulting" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Energy Efficiency & Sustainability Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our consulting services provide comprehensive solutions aimed at improving energy efficiency and sustainability. We offer everything from energy audits to strategic planning for renewable energy integration, helping your business reduce costs and meet sustainability goals. Our expert team is dedicated to guiding you through every step of the process to implement effective, long-term solutions that benefit both your bottom line and the environment.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Energy Efficiency & Sustainability Consulting?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our energy efficiency and sustainability consulting services are designed to help businesses meet their environmental goals while reducing operational costs. Our team brings extensive expertise in energy management, sustainability practices, and renewable energy technologies. By choosing us as your partner, you'll have access to actionable insights, customized strategies, and innovative solutions that drive long-term sustainability.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert energy audits and assessments", "Custom sustainability strategies", "Integration of renewable energy sources", "Cost-effective and eco-friendly solutions"].map((item, index) => (
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

export default EnergyEfficiencySustainabilityConsulting;
