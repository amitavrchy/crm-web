import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/19.jpg";
import img2 from "../../../public/services/20.jpg";
import img3 from "../../../public/services/21.jpg";
import heroImg from "../../../public/about-us-wte/2.jpg";

const TalentAcquisition = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Talent Acquisition & Workforce Planning
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Strategic Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            A well-defined talent acquisition strategy ensures that your organization attracts and retains the best candidates. We go beyond traditional hiring methods by incorporating predictive analytics, workforce planning, and competency-based assessments. This allows us to match the right individuals to your company’s needs, fostering long-term success and operational efficiency.
          </p>
          <ul className="mt-4 space-y-3">
            {["Data-driven talent forecasting", "Proactive recruitment strategies", "Diversity and inclusion focus", "Future-ready workforce solutions"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Talent Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Talent Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Talent Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our talent acquisition services encompass a holistic approach, combining recruitment marketing, employer branding, and cutting-edge hiring techniques. We work closely with our clients to tailor solutions that meet their unique requirements, ensuring they attract candidates who align with their mission, values, and growth trajectory. Whether you need executive search services or scalable hiring solutions, we have you covered.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Choosing the right talent acquisition partner can make all the difference in building a high-performing workforce. Our dedicated team brings a wealth of experience, innovative recruitment techniques, and a deep understanding of industry trends. We are committed to helping businesses streamline their hiring processes, reduce turnover, and cultivate a thriving workplace culture.
            </p>
            <ul className="mt-4 space-y-4">
              {["Industry-leading expertise", "Custom recruitment solutions", "Proactive workforce planning", "Commitment to diversity & innovation"].map((item, index) => (
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

export default TalentAcquisition;
