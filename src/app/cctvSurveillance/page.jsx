import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/76.jpg";
import img2 from "../../../public/services/77.jpg";
import img3 from "../../../public/services/78.jpg";

const CCTVSurveillanceSecurityStaffing = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            CCTV Surveillance & Security Staffing Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Security Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Protecting your property, assets, and people is our top priority. Our CCTV surveillance and security staffing services provide tailored solutions that enhance your security infrastructure. From 24/7 surveillance monitoring to the staffing of professional security officers, we ensure that your premises are secure, your employees and visitors are safe, and that risks are minimized.
          </p>
          <ul className="mt-4 space-y-3">
            {["24/7 surveillance monitoring", "Professional security officers", "Tailored security solutions", "Risk mitigation and emergency response"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Security Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Security Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Security Staffing & Surveillance Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our CCTV surveillance and security staffing services are designed to provide comprehensive protection for your business, property, or event. We specialize in integrating advanced security systems with highly trained staff, offering monitoring, physical security, and emergency response services to mitigate risks and ensure a safe environment.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our CCTV & Security Staffing Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We offer reliable and scalable security solutions designed to fit your specific needs. Our team is committed to providing top-tier surveillance services and experienced security officers who are trained to handle any situation, ensuring the safety and security of your business, employees, and clients. With our comprehensive approach to security, you can have peace of mind knowing your assets are protected.
            </p>
            <ul className="mt-4 space-y-4">
              {["Experienced and professional security staff", "State-of-the-art surveillance technology", "Customized security solutions", "Rapid response to security breaches"].map((item, index) => (
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

export default CCTVSurveillanceSecurityStaffing;
