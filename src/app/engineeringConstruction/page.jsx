import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/43.jpg";
import img2 from "../../../public/services/44.jpg";
import img3 from "../../../public/services/45.jpg";

const EngineeringConstructionRecruitment = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Engineering & Construction Recruitment Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Engineering Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Engineering & Construction Recruitment services connect leading organizations with top-tier professionals in the engineering and construction sectors. We understand that these industries demand highly skilled candidates who can ensure quality, safety, and efficiency in every project. Our recruitment process focuses on identifying individuals who excel in their technical expertise and possess the leadership qualities necessary for the complex demands of these industries.
          </p>
          <ul className="mt-4 space-y-3">
            {["Specialized recruitment for engineering and construction roles", "Comprehensive candidate screening and vetting", "Industry-specific knowledge and expertise", "Tailored recruitment for both project-based and permanent positions"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Engineering & Construction Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Engineering & Construction Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Engineering & Construction Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our recruitment services cover a wide range of engineering and construction roles, including civil engineers, architects, project managers, quantity surveyors, and skilled tradespeople. Whether you need professionals for a single project or require long-term staffing solutions, we have the expertise to deliver the right talent that will help your company meet its project goals, deadlines, and budget.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Engineering & Construction Recruitment Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With our in-depth knowledge of the engineering and construction sectors, we provide specialized recruitment services to connect you with professionals who are capable of delivering results in these high-demand industries. Our approach focuses on quality, efficiency, and matching candidates who are a perfect fit for your company's culture and goals.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert recruiters with deep engineering & construction industry knowledge", "Rigorous screening and background checks", "Access to a large network of qualified professionals", "Customized recruitment solutions tailored to your needs"].map((item, index) => (
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

export default EngineeringConstructionRecruitment;
