import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/61.jpg";
import img2 from "../../../public/services/62.jpg";
import img3 from "../../../public/services/63.jpg";

const SocialMediaCommunityModeration = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Social Media & Online Community Moderation
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Social Media & Community Moderation Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Effective social media and online community moderation helps build a positive and engaging environment for your brand. We focus on managing interactions in a way that fosters authentic connections with your audience while maintaining brand integrity. Our moderation services ensure that your online spaces are safe, respectful, and aligned with your business goals.
          </p>
          <ul className="mt-4 space-y-3">
            {["Real-time social media monitoring", "Community engagement & relationship building", "Content moderation & removal", "Brand protection & reputation management"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Social Media Moderation" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Community Moderation Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive Moderation Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our social media and community moderation services ensure that your online presence remains positive and productive. Whether you're managing a brand's social channels or an online community, we tailor our approach to meet your specific needs. From moderating discussions to managing conflicts, we provide the support necessary for a thriving and safe digital space.
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
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Social Media & Community Moderation?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With our expert moderation services, you can protect your online brand presence and foster a healthy, positive environment. Our team ensures that user interactions remain respectful and compliant with your community guidelines. We help prevent issues such as spam, harassment, and negativity, allowing your brand to maintain its reputation and focus on growth.
            </p>
            <ul className="mt-4 space-y-4">
              {["Expert community management", "Proactive content moderation", "Safe & respectful online spaces", "Improved brand image & reputation"].map((item, index) => (
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

export default SocialMediaCommunityModeration;
