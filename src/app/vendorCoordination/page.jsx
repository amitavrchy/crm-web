import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/58.jpg";
import img2 from "../../../public/services/59.jpg";
import img3 from "../../../public/services/60.jpg";
import heroImg from "../../../public/about-us-wte/2.jpg";

const VendorServiceCoordination = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Vendor & Service Coordination Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Vendor & Service Coordination Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Effective vendor and service coordination is key to maintaining a smooth and efficient operation. Our services help organizations optimize vendor relationships, ensure smooth contract management, and streamline service delivery. By acting as an intermediary, we ensure that all vendors and service providers are aligned with your business objectives, improving collaboration and ensuring high-quality service.
          </p>
          <ul className="mt-4 space-y-3">
            {["Vendor selection & negotiation", "Contract management & compliance", "Service level agreement (SLA) monitoring", "Vendor performance evaluation"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Vendor & Service Coordination Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Vendor & Service Coordination Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Vendor & Service Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our vendor and service coordination services ensure that your business is always working with the right partners to meet its operational needs. We handle everything from identifying the right vendors, managing contracts, to monitoring service delivery and performance. Our goal is to ensure you get the best value from your vendor relationships while maintaining a high standard of service.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Vendor & Service Coordination?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Partnering with us helps your organization effectively manage and optimize vendor relationships. We offer expert guidance in vendor selection, contract management, and ongoing performance monitoring. Our comprehensive approach ensures that your organization maximizes vendor value while ensuring consistent service delivery and compliance with contracts.
            </p>
            <ul className="mt-4 space-y-4">
              {["Proven vendor management expertise", "Comprehensive service delivery oversight", "Effective contract negotiation & compliance", "Improved operational efficiency"].map((item, index) => (
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

export default VendorServiceCoordination;
