import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/31.jpg";
import img2 from "../../../public/services/32.jpg";
import img3 from "../../../public/services/33.jpg";

const CareerCounselingAndJobMatching = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Career Counseling & Job Matching
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Strategic Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Finding the right career path is more than just selecting a job. It’s about aligning your skills, aspirations, and values with the right opportunities. Our career counseling services provide expert guidance to help you discover the best path forward. Through our job matching system, we pair you with opportunities that not only match your qualifications but also align with your long-term career goals.
          </p>
          <ul className="mt-4 space-y-3">
            {["Personalized career assessments", "Skill gap analysis", "Career path planning", "Tailored job matching services"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Career Counseling Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Job Matching Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Counseling & Job Matching</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our career counseling services provide expert advice on job searches, interview preparation, and career development. We help you identify your skills and interests, set career goals, and explore potential career paths. Our job matching service ensures that you’re paired with opportunities that are the best fit for your profile, ensuring long-term success in your professional journey.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Career Counseling & Job Matching Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Partnering with us for career counseling gives you access to professional guidance that helps you navigate the job market with confidence. Our job matching system ensures that you’re not just finding a job, but the right job that fits your career goals. We work with both individuals and organizations to provide tailored solutions that foster success.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert career counseling", "Personalized job matching", "Ongoing career support", "Proven success with job placements"].map((item, index) => (
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

export default CareerCounselingAndJobMatching;
