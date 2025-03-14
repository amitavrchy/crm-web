import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/10.jpg";
import img2 from "../../../public/services/11.jpg";
import img3 from "../../../public/services/12.jpg";

const StaffingSolutionCompany = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Comprehensive Staffing Solutions for Your Business
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Staffing Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide tailored staffing solutions that meet the unique needs of your business. Our experienced recruiters specialize in sourcing, screening, and placing top talent across a wide range of industries. Whether you need temporary, contract, or permanent staffing solutions, we deliver skilled professionals that align with your company's goals.
          </p>
          <ul className="mt-4 space-y-3">
            {["Comprehensive candidate screening", "Industry-specific expertise", "Flexible staffing options", "Timely and reliable placements"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Staffing Approach" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Staffing Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Our Staffing Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our staffing solutions cover a wide spectrum of industries, from technology and healthcare to finance and retail. We partner with your organization to understand your unique needs and provide highly skilled professionals who can help drive success and growth.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Our Staffing Solutions?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our staffing solutions are designed to deliver results. By partnering with us, you get access to a wide talent pool, industry expertise, and flexible staffing options. We are committed to finding the right fit for your organization, ensuring a seamless experience from start to finish.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expertise across diverse industries", "Comprehensive recruitment process", "Flexibility in staffing needs", "Focus on long-term success"].map((item, index) => (
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

export default StaffingSolutionCompany;
