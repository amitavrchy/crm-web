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

const SkillDevelopmentAndTraining = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Skill Development & Training
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Skill Development Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Empowering individuals and teams with the right skills is critical for achieving success in today’s fast-paced job market. Our skill development and training programs are designed to enhance both technical and soft skills, enabling professionals to advance in their careers. Through tailored learning paths, we provide comprehensive training solutions that address specific skill gaps and prepare individuals for the challenges of tomorrow.
          </p>
          <ul className="mt-4 space-y-3">
            {["Customized training programs", "Soft skills and leadership development", "Technical skills enhancement", "Continuous learning and upskilling"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Skill Development Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Training Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Training Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our skill development and training services cater to individuals and organizations alike. From foundational training to advanced skill enhancement, our programs are designed to foster growth and improve performance. We collaborate with clients to create specialized training sessions that meet the unique needs of their workforce, whether it’s for leadership development, technical expertise, or career advancement.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Skill Development & Training Services?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With our expertise in skill development and training, we empower professionals to reach their full potential. Our tailored programs not only equip individuals with the latest skills but also inspire confidence and leadership. Whether you're looking to improve your technical abilities, leadership skills, or overall career trajectory, we have the right solution for you.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert-led training programs", "Customizable learning paths", "Practical and hands-on experience", "Long-term career development focus"].map((item, index) => (
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

export default SkillDevelopmentAndTraining;
