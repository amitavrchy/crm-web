import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/7.jpg";
import img2 from "../../../public/services/8.jpg";
import img3 from "../../../public/services/9.jpg";

const ExecutiveSearchAndHeadhunting = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Executive Search & Headhunting Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Approach to Executive Search & Headhunting</h2>
          <p className="text-gray-600 leading-relaxed">
            Our executive search and headhunting services are designed to find high-level executives who can lead your organization to success. We use a combination of extensive industry knowledge, an expansive network, and thorough assessment tools to identify top candidates for senior roles. Our dedicated team ensures that your leadership needs are met with the best talent available.
          </p>
          <ul className="mt-4 space-y-3">
            {["Targeted search for senior executives", "Industry-specific expertise", "In-depth candidate assessments", "Global talent pool"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Executive Search Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Executive Search Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Executive Search Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our executive search service focuses on identifying and recruiting top-tier executives and senior professionals for your company. With a rigorous selection process and tailored approach, we ensure that each candidate we present meets your unique needs and leadership criteria. Whether you are looking for a C-suite executive, board member, or senior leader, we provide you with access to the best talent available in the market.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us for Executive Search & Headhunting?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our experienced team of recruiters specializes in executive search and headhunting to bring you only the best candidates for leadership positions. With our comprehensive, data-driven search process, we provide an in-depth analysis of each candidate’s background, leadership capabilities, and cultural fit. This ensures that you are hiring executives who will contribute to the long-term success of your organization.
            </p>
            <ul className="mt-4 space-y-4">
              {["Decades of industry experience", "Strong candidate network", "Customized search process", "Global reach and expertise"].map((item, index) => (
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

export default ExecutiveSearchAndHeadhunting;
