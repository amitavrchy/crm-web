import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/55.jpg";
import img2 from "../../../public/services/56.jpg";
import img3 from "../../../public/services/57.jpg";

const LeaseRentalManagement = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Lease & Rental Management Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Lease & Rental Management Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Lease & Rental Management services provide comprehensive solutions to streamline and enhance the leasing process for property owners, tenants, and investors. We focus on creating a seamless experience by offering expert advice, managing rental agreements, and ensuring compliance with all regulations. Our goal is to maximize rental income while minimizing operational headaches.
          </p>
          <ul className="mt-4 space-y-3">
            {["Tenant screening & selection", "Rent collection and payment management", "Lease renewal & term management", "Property inspections & maintenance"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Lease & Rental Management Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Lease & Rental Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Lease & Rental Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We provide full-service lease and rental management that includes everything from marketing your property to managing the day-to-day operations. Our services cover property listings, tenant communication, maintenance management, and handling disputes. We ensure that both property owners and tenants have a positive experience and that the rental process runs smoothly.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Lease & Rental Management?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Partnering with us for lease and rental management ensures that your property is professionally managed, your tenants are well taken care of, and your rental income is maximized. We are committed to delivering top-notch services that benefit both owners and renters, providing peace of mind for all parties involved.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert property management", "Maximized rental income", "Efficient tenant management", "Compliant with laws and regulations"].map((item, index) => (
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

export default LeaseRentalManagement;
