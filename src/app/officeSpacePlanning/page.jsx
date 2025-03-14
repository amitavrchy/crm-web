import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/91.jpg";
import img2 from "../../../public/services/92.jpg";
import img3 from "../../../public/services/93.jpg";

const OfficeSpacePlanningSetup = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Office Space Planning & Setup
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Approach to Office Space Planning</h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in creating efficient, functional, and inspiring office spaces that enhance productivity and employee well-being. Our office space planning services include layout design, furniture selection, space optimization, and a focus on company culture. We ensure that your office environment aligns with your team’s needs, fosters collaboration, and enhances overall business operations.
          </p>
          <ul className="mt-4 space-y-3">
            {["Tailored office layouts", "Space optimization strategies", "Employee-centric design", "Collaboration-enhancing environments"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Office Planning" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Office Setup" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Office Space Setup Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our office setup services ensure that your space is ready for work with minimal disruption. From furnishing and technology integration to ergonomic design, we focus on all aspects of office setup. We offer a full-service approach that includes project management, coordination, and support, ensuring that your new office setup meets your team’s expectations and operational needs.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Office Space Planning & Setup Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A well-planned and designed office space is key to maximizing employee productivity and fostering a positive work environment. Our team of experts combines industry knowledge with a deep understanding of your business goals to create office layouts that support efficient workflows and boost employee morale. With our experience and attention to detail, we ensure your office space meets both functional and aesthetic needs.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert space planning services", "Tailored design for functionality", "Employee-focused environments", "End-to-end office setup solutions"].map((item, index) => (
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

export default OfficeSpacePlanningSetup;
