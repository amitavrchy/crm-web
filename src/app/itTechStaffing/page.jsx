import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/34.jpg";
import img2 from "../../../public/services/35.jpg";
import img3 from "../../../public/services/36.jpg";

const ITTechStaffing = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            IT & Tech Staffing Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Strategic Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Our IT & Tech staffing services provide businesses with the right talent to meet their ever-evolving technological needs. We specialize in sourcing top-tier IT professionals for a wide range of roles, from software developers to cybersecurity experts. Through a comprehensive understanding of your business requirements, we deliver staffing solutions that drive innovation, enhance operational efficiency, and ensure long-term success.
          </p>
          <ul className="mt-4 space-y-3">
            {["Tech talent sourcing for all roles", "Specialized recruitment for niche technologies", "Agile and scalable staffing solutions", "Focused on long-term business growth"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="IT Staffing Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="IT & Tech Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive IT & Tech Staffing Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We offer tailored staffing solutions to meet the specific needs of IT departments and technology companies. Whether you require short-term project-based staffing or long-term full-time placements, our services ensure that you gain access to qualified professionals who are equipped with the necessary skills and experience. From IT support roles to highly specialized positions, we cover all areas of IT staffing.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our IT & Tech Staffing Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our experience in the IT & Tech staffing sector sets us apart. We understand the complexities of the tech industry and are committed to matching the best talent with the most challenging roles. Our network of highly skilled professionals spans across the most in-demand technologies, ensuring that your company stays ahead of the curve in a rapidly evolving landscape.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert recruiters with deep industry knowledge", "Comprehensive vetting and interview process", "Access to a broad network of tech talent", "Scalable staffing to match your needs"].map((item, index) => (
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

export default ITTechStaffing;
