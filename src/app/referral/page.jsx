import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/16.jpg";
import img2 from "../../../public/services/17.jpg";
import img3 from "../../../public/services/18.jpg";

const ReferAFriend = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Refer a Friend and Get Rewarded
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Referral Program</h2>
          <p className="text-gray-600 leading-relaxed">
            Our referral program is designed to reward you for helping us grow. By referring a friend, colleague, or family member, you can earn great rewards while helping others discover the exceptional services we offer. Whether you're referring a business partner or a job seeker, your referral can make a real difference.
          </p>
          <ul className="mt-4 space-y-3">
            {["Earn rewards for every successful referral", "Referral benefits for both parties", "Simple and easy to participate", "No limit to how many people you can refer"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Referral Program" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Referral Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Referring a friend is easy. Simply share your unique referral link with anyone you know who could benefit from our services. Once your referral successfully signs up or makes a purchase, both you and your friend will receive exciting rewards. It’s a win-win for everyone!
            </p>
            <button className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition">
              <a href="/referForm">Refer a Friend Now</a>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Why Refer a Friend?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Referring a friend not only helps them discover valuable services, but it also rewards you for being a great supporter. Our referral program is designed to benefit both parties, offering you exclusive rewards for your efforts and giving your friends access to top-tier solutions and services.
            </p>
            <ul className="mt-4 space-y-4">
              {["Exclusive referral rewards", "Support a friend in their journey", "Build a community of like-minded individuals", "Get rewarded for your efforts"].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <UsersIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image src={img3} alt="Why Refer a Friend" className="rounded-2xl shadow-2xl" placeholder="blur" />
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

export default ReferAFriend;
