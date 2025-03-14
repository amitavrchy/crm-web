import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/about-us-wte/2.jpg";
import img2 from "../../../public/about-us-wte/3.jpg";
import img3 from "../../../public/about-us-wte/2.jpg";

const PolicyImplementationCompliance = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Policy Implementation & Compliance Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Policy Implementation & Compliance Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Ensuring that your business adheres to internal policies and external regulations is critical for long-term success. Our Policy Implementation & Compliance services are designed to help organizations navigate complex legal frameworks, ensuring full compliance while minimizing risks. We focus on aligning your policies with current regulations, implementing effective controls, and continuously monitoring compliance.
          </p>
          <ul className="mt-4 space-y-3">
            {["Regulatory compliance auditing", "Internal policy development", "Risk management & mitigation", "Ongoing monitoring & reporting"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Policy Implementation & Compliance Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Policy & Compliance Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Policy & Compliance Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We provide end-to-end solutions for implementing and maintaining robust compliance frameworks. From initial policy creation and risk assessments to ongoing training and audits, our services ensure that your organization remains in full compliance with industry regulations. We help your team understand compliance requirements and implement the necessary actions to meet those standards.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Policy & Compliance?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Partnering with us ensures that your organization stays on top of policy implementation and compliance. We bring extensive experience in regulatory frameworks, a proactive approach to risk management, and a commitment to making compliance a seamless part of your operations. With our expertise, you can reduce compliance risks, avoid penalties, and strengthen your organization’s reputation.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert regulatory knowledge", "Custom compliance frameworks", "Proactive risk management", "Efficient audits & assessments"].map((item, index) => (
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

export default PolicyImplementationCompliance;
