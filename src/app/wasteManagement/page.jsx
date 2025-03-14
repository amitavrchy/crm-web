import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/88.jpg";
import img2 from "../../../public/services/89.jpg";
import img3 from "../../../public/services/90.jpg";
const WasteManagementRecyclingSolutions = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Waste Management & Recycling Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Approach to Waste Management & Recycling</h2>
          <p className="text-gray-600 leading-relaxed">
            We offer innovative waste management and recycling solutions designed to help businesses and communities reduce waste, increase recycling rates, and promote sustainability. Our services include waste audits, customized recycling programs, and sustainable waste disposal practices. By partnering with us, you can optimize your waste management processes, minimize environmental impact, and meet regulatory compliance requirements.
          </p>
          <ul className="mt-4 space-y-3">
            {["Comprehensive waste audits", "Customized recycling programs", "Eco-friendly waste disposal", "Sustainability-focused solutions"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Waste Management & Recycling" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Waste Management & Recycling" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Waste Management & Recycling Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our waste management and recycling solutions provide businesses and organizations with the tools they need to handle waste in an environmentally responsible manner. We work closely with clients to implement efficient recycling programs, reduce landfill waste, and ensure compliance with local and international waste management regulations. Our services help organizations save costs, reduce their environmental footprint, and meet sustainability goals.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Waste Management & Recycling Solutions?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our waste management and recycling solutions are designed to help businesses streamline their waste processes while minimizing their environmental impact. We bring a wealth of experience, cutting-edge technologies, and a commitment to sustainability, ensuring that your organization stays ahead of waste management challenges. By partnering with us, you'll have access to tailored waste reduction strategies that improve operational efficiency and help you achieve your environmental goals.
            </p>
            <ul className="mt-4 space-y-4">
              {["Sustainable waste reduction strategies", "Regulatory compliance expertise", "Efficient recycling solutions", "Cost-effective waste management"].map((item, index) => (
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

export default WasteManagementRecyclingSolutions;
