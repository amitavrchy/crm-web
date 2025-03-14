import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/4.jpg";
import img2 from "../../../public/services/5.jpg";
import img3 from "../../../public/services/6.jpg";

const TemporaryContractStaffing = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Temporary & Contract Staffing Solutions
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Temporary & Contract Staffing Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Whether you need temporary workers to fill in for seasonal peaks or skilled contractors for project-based work, we provide flexible staffing solutions tailored to meet your business's needs. Our process ensures that we find the right talent quickly, allowing you to stay focused on your business priorities while we manage your staffing requirements.
          </p>
          <ul className="mt-4 space-y-3">
            {["Flexible and scalable staffing", "Quick access to qualified professionals", "Cost-effective workforce solutions", "Seamless integration with your team"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Temporary Staffing" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Contract Staffing" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Tailored Staffing Solutions for Your Needs</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We understand the diverse requirements of businesses when it comes to temporary and contract staffing. Our services are designed to provide you with candidates who can seamlessly integrate into your teams, work efficiently, and deliver results. From skilled contractors to temporary replacements, we have the perfect solution for every need.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Temporary & Contract Staffing Solutions?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our temporary and contract staffing solutions are designed to help businesses quickly scale their workforce while maintaining flexibility. With access to a wide talent pool, we help you find the right people to meet project deadlines, seasonal demands, or even fill short-term vacancies without the long-term commitment.
            </p>
            <ul className="mt-4 space-y-4">
              {["Access to top talent for short-term or long-term projects", "Flexible contracts that meet your needs", "Streamlined hiring process for quick placements", "Dedicated support to ensure seamless integration"].map((item, index) => (
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

export default TemporaryContractStaffing;
