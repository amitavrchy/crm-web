import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/49.jpg";
import img2 from "../../../public/services/50.jpg";
import img3 from "../../../public/services/51.jpg";

const ConflictResolutionMediation = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Conflict Resolution & Mediation Services
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Conflict Resolution Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Navigating conflicts in the workplace or personal matters can be challenging. Our Conflict Resolution & Mediation services provide a structured and neutral approach to resolving disputes in a constructive and professional manner. We offer mediation sessions and techniques that facilitate effective communication, understanding, and compromise to help individuals and teams find mutually agreeable solutions.
          </p>
          <ul className="mt-4 space-y-3">
            {["Mediation with trained experts", "Open and honest communication", "Neutral and unbiased facilitation", "Timely resolution of disputes"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Conflict Resolution Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Conflict Resolution Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Effective Conflict Resolution & Mediation Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mediation services go beyond simply resolving disputes. We focus on creating long-term solutions that foster positive relationships and cooperation among parties. By using a collaborative approach, we address the root causes of conflicts and help parties come to mutually beneficial agreements. Our goal is to create a healthier, more productive work environment or personal situation by addressing and resolving conflicts swiftly and effectively.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us for Mediation?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Resolving conflicts requires a balance of empathy, professionalism, and neutrality. Our experienced mediators are equipped with the skills to handle sensitive situations with discretion and care. By choosing our Conflict Resolution & Mediation services, you gain access to a tailored approach that is designed to meet the unique needs of each situation, ensuring a smooth and fair resolution.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert mediation and facilitation", "Promoting long-term relationship building", "Neutral and impartial approach", "Ensuring fair and timely resolutions"].map((item, index) => (
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

export default ConflictResolutionMediation;
