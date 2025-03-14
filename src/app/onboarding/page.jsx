import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/46.jpg";
import img2 from "../../../public/services/47.jpg";
import img3 from "../../../public/services/48.jpg";

const OnboardingWelcomeServices = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Onboarding & Welcome Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Onboarding Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            A seamless and engaging onboarding process is key to ensuring new hires feel welcomed, informed, and ready to contribute. Our Onboarding & Welcome Services focus on creating a structured experience for new employees, guiding them through every step from offer acceptance to their first day at work. We ensure that your new hires are equipped with the tools, knowledge, and connections they need to succeed within your organization.
          </p>
          <ul className="mt-4 space-y-3">
            {["Personalized onboarding programs", "Introduction to company culture and values", "Training and development resources", "Interactive welcome activities"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Onboarding Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Onboarding Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Onboarding & Welcome Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our onboarding and welcome services cover all aspects of the new hire experience, from the initial welcome message to the completion of their first month. We provide a variety of tools and resources, including welcome kits, access to training platforms, and dedicated support to ensure a smooth transition for new employees. With a structured and personalized approach, we help new hires feel empowered and motivated as they begin their journey with your company.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Onboarding?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our Onboarding & Welcome Services are designed to create an experience that is not only efficient but also welcoming and engaging for new hires. By partnering with us, you’ll be able to ensure that every new employee feels valued and equipped to contribute to your company’s success from day one. We focus on seamless communication, training, and support to boost retention and accelerate employee productivity.
            </p>
            <ul className="mt-4 space-y-4">
              {["Customized onboarding journeys for every new hire", "Timely and relevant information delivery", "Fostering connection with company culture", "Boosting new hire productivity and engagement"].map((item, index) => (
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

export default OnboardingWelcomeServices;
