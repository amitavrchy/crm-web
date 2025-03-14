import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/64.jpg";
import img2 from "../../../public/services/65.jpg";
import img3 from "../../../public/services/66.jpg";

const CommunicationAnnouncementManagement = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Communication & Announcement Management
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Communication & Announcement Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Managing communication and announcements effectively is key to keeping your audience informed and engaged. Our strategic approach helps businesses streamline their messaging and ensure timely, clear, and consistent communication across all channels. We ensure that your announcements are impactful and reach the right audience.
          </p>
          <ul className="mt-4 space-y-3">
            {["Centralized communication system", "Automated announcements & updates", "Multi-channel message distribution", "Crisis communication management"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Communication Management" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Announcement Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Communication Solutions</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our communication and announcement management services provide businesses with the tools to manage internal and external messaging efficiently. From drafting and distributing announcements to managing multi-channel communication, we ensure that your important messages are delivered on time and in the right format.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Communication & Announcement Management?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With our expertise in communication management, we ensure that your messages are delivered effectively across all platforms. We help you build a cohesive communication strategy, ensuring that your announcements resonate with your audience, build brand trust, and foster transparency. Let us help you navigate the complexities of communication to achieve better engagement and brand loyalty.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert communication strategy", "Effective multi-channel messaging", "Transparent and timely announcements", "Improved audience engagement"].map((item, index) => (
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

export default CommunicationAnnouncementManagement;
