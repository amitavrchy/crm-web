import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/37.jpg";
import img2 from "../../../public/services/38.jpg";
import img3 from "../../../public/services/39.jpg";

const HealthcareNursingPlacement = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Healthcare & Nursing Placement Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Healthcare Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Healthcare & Nursing Placement services focus on connecting healthcare organizations with top-tier nursing professionals. We understand the importance of quality care and work tirelessly to provide hospitals, clinics, and other healthcare providers with skilled nurses and healthcare staff. Our process is designed to ensure that the right professionals are placed in the right roles, contributing to better patient care and smoother operational workflows.
          </p>
          <ul className="mt-4 space-y-3">
            {["Specialized recruitment for healthcare professionals", "Rigorous vetting process", "Commitment to high-quality patient care", "Flexible staffing solutions for healthcare settings"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Healthcare Staffing Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Healthcare Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Healthcare & Nursing Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We specialize in placing healthcare professionals in a wide range of roles, including registered nurses, nurse practitioners, and other healthcare staff. Whether your organization needs short-term or long-term staffing solutions, we have the expertise to provide skilled individuals who are dedicated to improving patient outcomes and contributing to the success of your healthcare facility.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Healthcare & Nursing Placement Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our healthcare staffing team is deeply committed to providing high-quality services that meet the diverse needs of healthcare providers. With a thorough understanding of the challenges faced by healthcare organizations, we are able to match skilled professionals with roles where they can make the most impact, ensuring better care for patients and more efficient healthcare systems.
            </p>
            <ul className="mt-4 space-y-4">
              {["Dedicated healthcare recruitment experts", "Comprehensive screening and background checks", "Access to a large pool of qualified healthcare professionals", "Flexible staffing options for every healthcare setting"].map((item, index) => (
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

export default HealthcareNursingPlacement;
