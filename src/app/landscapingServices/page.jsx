import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/73.jpg";
import img2 from "../../../public/services/74.jpg";
import img3 from "../../../public/services/75.jpg";

const LandscapingGroundskeeping = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Landscaping & Groundskeeping Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Landscaping Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            A well-maintained landscape not only enhances the beauty of your property but also adds value and curb appeal. Our landscaping and groundskeeping services focus on providing comprehensive care for your lawns, gardens, and outdoor spaces. We work with both residential and commercial properties, ensuring your outdoor areas are kept clean, healthy, and aesthetically pleasing year-round.
          </p>
          <ul className="mt-4 space-y-3">
            {["Lawn care and maintenance", "Landscape design and installation", "Seasonal cleanups", "Irrigation and drainage systems"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Landscaping Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Landscaping Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Landscaping Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From lawn mowing to garden design and tree care, our landscaping services are designed to meet all your outdoor needs. We specialize in creating beautiful, functional landscapes that complement your property and suit your lifestyle. Our team of experts ensures every aspect of your outdoor space is taken care of, with services ranging from regular maintenance to custom design projects.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us for Landscaping & Groundskeeping?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are committed to providing high-quality landscaping and groundskeeping services that enhance the beauty and value of your property. Our experienced team is dedicated to ensuring your outdoor spaces are well-maintained, healthy, and aesthetically pleasing. We use sustainable and environmentally-friendly practices to ensure your landscape thrives throughout the seasons.
            </p>
            <ul className="mt-4 space-y-4">
              {["Experienced landscaping professionals", "Custom solutions for every property", "Sustainable and eco-friendly practices", "Seasonal maintenance and cleanups"].map((item, index) => (
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

export default LandscapingGroundskeeping;
