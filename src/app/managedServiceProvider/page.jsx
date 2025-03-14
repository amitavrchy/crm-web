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

const ManagedServiceProvider = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Managed Service Provider Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Approach to Managed Services</h2>
          <p className="text-gray-600 leading-relaxed">
            As a leading Managed Service Provider (MSP), we specialize in delivering comprehensive IT support, cloud management, and other critical business functions. Our proactive approach ensures that your systems run efficiently, secure your infrastructure, and scale with your business. Let us manage your technology so you can focus on growing your business.
          </p>
          <ul className="mt-4 space-y-3">
            {["24/7 IT Support", "Cloud Infrastructure Management", "Proactive Monitoring", "Cybersecurity and Compliance"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Managed Service Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Managed Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Managed Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our managed services ensure that your business operations run smoothly, providing everything from IT infrastructure management to comprehensive support and cloud services. By outsourcing these critical functions to us, your business can remain agile, competitive, and focused on growth while we handle the complexities of technology management.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us for Managed Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Partnering with our Managed Service Provider gives you access to cutting-edge technology, a highly skilled team, and unparalleled support. We offer tailored solutions that align with your business goals and ensure that you maintain operational continuity and security at all times.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert IT Team", "Scalable Solutions", "Custom IT Management", "Cutting-Edge Technology"].map((item, index) => (
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

export default ManagedServiceProvider;
