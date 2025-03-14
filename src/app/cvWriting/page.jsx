import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/30.jpg";
import img2 from "../../../public/services/29.jpg";
import img3 from "../../../public/services/28.jpg";

const CVWritingAndInterviewCoaching = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            CV Writing & Interview Coaching
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our CV Writing Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            A strong CV and effective interview skills are critical in today’s competitive job market. Our expert CV writing services help you highlight your strengths and experience, while our tailored interview coaching prepares you for success in any interview scenario. We offer personalized services that ensure you stand out to potential employers and achieve your career goals.
          </p>
          <ul className="mt-4 space-y-3">
            {["Tailored CV writing", "Interview simulation sessions", "Personal branding strategies", "In-depth career coaching"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="CV Writing Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Interview Coaching" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Coaching Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our CV writing service ensures that your resume stands out from the competition by showcasing your skills, achievements, and experiences in the most impactful way. We also provide expert coaching for interviews, focusing on building confidence, mastering key questions, and developing your personal presentation style. Together, these services create a powerful combination that accelerates your job search success.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Partnering with us for CV writing and interview coaching gives you access to expert advice and a personalized approach to your job search. We help you craft a CV that captures the attention of recruiters, while our interview coaching equips you with the tools to succeed in any interview. With a proven track record and a deep understanding of industry trends, we provide services that give you a competitive edge.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert CV writing", "Tailored interview strategies", "Personalized career guidance", "Proven success in job placements"].map((item, index) => (
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

export default CVWritingAndInterviewCoaching;
