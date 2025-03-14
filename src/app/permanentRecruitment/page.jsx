import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/2.jpg";
import img2 from "../../../public/services/3.jpg";
import img3 from "../../../public/services/1.jpg";

const PermanentRecruitment = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Permanent Recruitment Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Approach to Permanent Recruitment</h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in helping businesses find top talent for permanent roles. Our permanent recruitment process focuses on matching candidates who are not just skilled, but also aligned with your company’s values, culture, and long-term goals. We ensure a seamless hiring experience that leads to long-term success for both your business and the candidates you hire.
          </p>
          <ul className="mt-4 space-y-3">
            {["In-depth candidate screening", "Cultural fit assessment", "Long-term hiring focus", "Tailored recruitment strategies"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Permanent Recruitment Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Permanent Recruitment Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Tailored Permanent Recruitment Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our recruitment services are designed to provide businesses with the best-fit candidates for permanent roles across various industries. We take a consultative approach to understand your unique needs and culture, ensuring that the talent we place will thrive in your organization. From executive search to specialized roles, we have the expertise to deliver top talent for your permanent recruitment needs.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Permanent Recruitment?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Choosing the right recruitment partner is key to securing the best permanent talent for your organization. With our deep industry expertise and extensive candidate network, we are committed to finding the right fit for your permanent staffing needs. We focus on long-term success, not just filling positions. Our solutions are designed to deliver talent that will thrive in your organization for years to come.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert recruitment consultants", "Custom recruitment strategies", "End-to-end recruitment support", "Commitment to finding the right long-term fit"].map((item, index) => (
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

export default PermanentRecruitment;
