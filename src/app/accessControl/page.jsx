import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/82.jpg";
import img2 from "../../../public/services/83.jpg";
import img3 from "../../../public/services/84.jpg";

const AccessControlVisitorManagement = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Access Control & Visitor Management Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Access Control & Visitor Management Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our access control and visitor management solutions help you monitor and manage who enters your premises, ensuring a secure and safe environment. By leveraging cutting-edge technologies like biometric scanners, smart ID cards, and real-time tracking, we provide you with the tools necessary to enhance security and streamline visitor management. From managing authorized personnel to tracking visitor activities, we offer tailored solutions that meet your specific needs.
          </p>
          <ul className="mt-4 space-y-3">
            {["Seamless access control systems", "Visitor tracking and management", "Real-time entry/exit monitoring", "Customized security solutions"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Access Control Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Access Control Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Access Control & Visitor Management Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our comprehensive solutions provide businesses with advanced access control and visitor management systems designed to enhance security and improve operational efficiency. Whether you're looking to restrict access to certain areas, monitor visitor movement, or manage employee credentials, we provide customizable options to fit your requirements. Our solutions integrate seamlessly with your existing infrastructure, ensuring both ease of use and enhanced protection.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Access Control & Visitor Management Solutions?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our access control and visitor management systems are designed to provide your organization with the highest level of security. With our solutions, you can control and monitor who enters your premises, ensuring that only authorized individuals gain access to critical areas. Our user-friendly systems integrate seamlessly with your infrastructure, ensuring smooth operations. We offer comprehensive support to help you optimize your access and visitor management processes, creating a secure and compliant environment.
            </p>
            <ul className="mt-4 space-y-4">
              {["Advanced security protocols", "Customizable access solutions", "Real-time monitoring", "Comprehensive visitor management"].map((item, index) => (
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

export default AccessControlVisitorManagement;
