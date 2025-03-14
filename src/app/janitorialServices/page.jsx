import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/70.jpg";
import img2 from "../../../public/services/71.jpg";
import img3 from "../../../public/services/72.jpg";

const JanitorialHousekeepingServices = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Janitorial & Housekeeping Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Housekeeping Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Maintaining a clean and sanitary environment is essential for both health and productivity. Our janitorial and housekeeping services provide thorough cleaning solutions tailored to the needs of your workplace or home. We use eco-friendly products and modern techniques to ensure high standards of cleanliness and hygiene across all areas.
          </p>
          <ul className="mt-4 space-y-3">
            {["Daily cleaning and sanitization", "Eco-friendly cleaning products", "Flexible scheduling to fit your needs", "Disinfection and deep cleaning services"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Housekeeping Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Housekeeping Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Janitorial & Housekeeping Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our services cover a wide range of cleaning needs, from daily maintenance to deep cleaning and post-construction cleanup. We customize our offerings to meet the specific requirements of your space, whether it’s a commercial office, residential building, or specialized environment. Our team is committed to delivering exceptional results every time.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us for Janitorial & Housekeeping Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are dedicated to providing the highest standards of cleanliness and customer satisfaction. Our professional cleaning team is trained to ensure your environment remains spotless and hygienic. With a focus on detail and customer care, we deliver results that exceed expectations, all while using sustainable and safe cleaning products.
            </p>
            <ul className="mt-4 space-y-4">
              {["Highly trained cleaning staff", "Flexible scheduling and cleaning plans", "Commitment to customer satisfaction", "Use of eco-friendly cleaning solutions"].map((item, index) => (
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

export default JanitorialHousekeepingServices;
