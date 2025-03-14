import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/13.jpg";
import img2 from "../../../public/services/14.jpg";
import img3 from "../../../public/services/15.jpg";

const StaffingBankSolutions = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Your Trusted Partner for Staffing Bank Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Staffing Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in providing innovative staffing solutions for the banking and financial services industry. Our goal is to support financial institutions by sourcing highly skilled professionals who can drive efficiency, security, and growth within their operations. From temporary to permanent staffing solutions, we offer tailored approaches that meet your organizational needs.
          </p>
          <ul className="mt-4 space-y-3">
            {["Banking sector expertise", "Access to a vast talent pool", "Quick and reliable placements", "Flexible staffing solutions"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Staffing Approach" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Staffing Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Banking Staffing Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our staffing solutions are designed to meet the unique challenges of the banking and financial services sector. We provide both temporary and permanent staffing options, ensuring your business has the right talent at the right time. Whether you need specialized roles in compliance, risk management, or customer service, we can help.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Staffing Bank Solutions?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              As a trusted partner to the banking industry, we are committed to delivering high-quality staffing solutions. Our expertise in the financial sector, combined with our in-depth understanding of the unique requirements of banking institutions, allows us to provide you with top-tier candidates who can contribute to your success and growth.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expertise in banking and finance", "Tailored staffing solutions", "Quick response and reliable candidates", "Commitment to excellence"].map((item, index) => (
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

export default StaffingBankSolutions;
