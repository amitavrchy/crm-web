import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/about-us-wte/2.jpg";
import img2 from "../../../public/about-us-wte/3.jpg";
import img3 from "../../../public/about-us-wte/2.jpg";
import heroImg from "../../../public/about-us-wte/2.jpg";

const TemporaryAndContractStaffing = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative text-white py-24 text-center">
        <Image
          src={heroImg}
          alt="Temporary & Contract Staffing"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0"
        />
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
          <h2 className="text-4xl font-bold text-gray-800">Our Approach to Temporary & Contract Staffing</h2>
          <p className="text-gray-600 leading-relaxed">
            Whether you need short-term support for a project or require specialized contract staff, we provide businesses with the flexibility to meet their staffing needs. Our temporary and contract staffing solutions ensure you have access to the best talent when and where you need it, enabling your company to stay agile and meet evolving business demands.
          </p>
          <ul className="mt-4 space-y-3">
            {["Short-term project support", "Specialized contract talent", "Flexible staffing solutions", "Quick deployment of skilled professionals"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Temporary & Contract Staffing Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Temporary & Contract Staffing Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Staffing Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our staffing services are designed to meet the specific requirements of businesses seeking temporary or contract workers. We provide highly skilled professionals with the expertise needed to seamlessly integrate into your team. Whether you need seasonal support, project-based talent, or contract employees, we offer flexible, customized solutions to meet your unique needs.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us for Temporary & Contract Staffing?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our approach to temporary and contract staffing ensures that you can meet the dynamic needs of your business with confidence. We work closely with our clients to understand their needs and provide the right professionals who can deliver results from day one. Our network of experienced candidates allows us to quickly find talent that fits your requirements, helping you maintain productivity and efficiency.
            </p>
            <ul className="mt-4 space-y-4">
              {["Fast placement of qualified talent", "Access to a diverse pool of professionals", "Flexible contracts to suit your needs", "Industry-specific expertise"].map((item, index) => (
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

export default TemporaryAndContractStaffing;
