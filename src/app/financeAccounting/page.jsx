import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/40.jpg";
import img2 from "../../../public/services/41.jpg";
import img3 from "../../../public/services/42.jpg";

const FinanceAccountingRecruitment = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Finance & Accounting Recruitment Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Finance Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Finance & Accounting Recruitment services are designed to connect top-tier finance professionals with leading organizations. We understand that the financial industry requires precision, expertise, and strategic insight. Our recruitment process ensures that only the best candidates are matched with roles where they can help optimize financial operations, compliance, and profitability.
          </p>
          <ul className="mt-4 space-y-3">
            {["Specialized recruitment for finance and accounting roles", "Comprehensive candidate screening and vetting", "In-depth understanding of the financial industry", "Providing skilled professionals for both temporary and permanent roles"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Finance & Accounting Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Finance & Accounting Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Finance & Accounting Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our recruitment services span a wide range of finance and accounting positions, including financial analysts, auditors, accountants, CFOs, and more. Whether your company needs experienced professionals for long-term roles or temporary staffing solutions for special projects, we have the expertise to deliver the right candidates for your business.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Finance & Accounting Recruitment Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With our extensive industry knowledge and specialized recruitment strategies, we are committed to delivering exceptional finance and accounting talent. We understand the specific needs of the financial sector and provide personalized recruitment solutions that align with your business goals, ensuring that you get professionals who can drive financial performance and compliance.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert recruiters with deep financial industry knowledge", "Rigorous screening and background checks", "Access to a large network of qualified finance professionals", "Flexible recruitment solutions tailored to your needs"].map((item, index) => (
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

export default FinanceAccountingRecruitment;
