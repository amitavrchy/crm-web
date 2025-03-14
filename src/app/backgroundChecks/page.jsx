import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/22.jpg";
import img2 from "../../../public/services/23.jpg";
import img3 from "../../../public/services/24.jpg";
import heroImg from "../../../public/about-us-wte/2.jpg";

const BackgroundChecks = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Background Checks & Screening
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Screening Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Ensuring the integrity and reliability of your workforce starts with a comprehensive background screening process. Our meticulous approach combines advanced technology and industry expertise to verify credentials, employment history, and criminal records, helping businesses make informed hiring decisions while maintaining compliance with legal requirements.
          </p>
          <ul className="mt-4 space-y-3">
            {["Comprehensive background verification", "Criminal and credit history checks", "Employment and education verification", "Compliance with industry standards"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Screening Process" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Screening Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Screening Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our screening solutions go beyond simple background checks. We leverage cutting-edge verification methods to ensure candidates meet your organizational standards. From identity authentication to reference checks, we provide detailed reports that empower companies to build a trustworthy and secure workforce.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Trust Our Screening Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A thorough screening process is essential for mitigating risk and ensuring workplace security. Our team specializes in verifying credentials, conducting in-depth checks, and delivering timely insights to streamline your hiring decisions. We help businesses establish a reliable workforce while maintaining regulatory compliance and safeguarding company reputation.
            </p>
            <ul className="mt-4 space-y-4">
              {["Industry-leading screening accuracy", "Custom verification solutions", "Strict compliance with regulations", "Secure and confidential processes"].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <UsersIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image src={img3} alt="Why Choose Our Screening Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
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

export default BackgroundChecks;
