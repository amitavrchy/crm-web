import React from "react";
import Vendors from "@/components/vendors";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import img1 from "../../../public/about-us/about-1.jpg";
import img2 from "../../../public/about-us/about-2.jpg";
import img3 from "../../../public/about-us/about-3.jpg";
import img4 from "../../../public/about-us-wte/4.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import img from "../../../public/about_service.jpg";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import SmallMighty from "@/components/SmallMighty";

function AboutUs() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="relative text-white py-24 text-center">
        <Image
          src={img}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            About Us
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-light max-w-2xl mx-auto">
            Bridging businesses with exceptional talent through innovative and
            personalized recruitment solutions.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to bridge the gap between businesses and exceptional
            talent by providing personalized solutions that drive growth and
            success for all stakeholders involved.
          </p>
          <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be the global leader in client-focused recruitment, transforming
            the way businesses and individuals connect by fostering meaningful
            partnerships and delivering unparalleled value to all.
          </p>
        </div>
        <div>
          <Image
            src={img1}
            alt="Our Mission and Vision"
            className="rounded-2xl shadow-2xl"
            placeholder="blur"
          />
        </div>
      </section>

      {/* Trustable Recruitment Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={img2}
              alt="Trustable Recruitment Service"
              className="rounded-2xl shadow-2xl"
              placeholder="blur"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              We Are a Trustworthy Recruitment Service
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are dedicated to making a difference in our community by
              offering high-quality recruitment solutions and ensuring the
              success of every individual and business we work with.
            </p>
            <button className="mt-6 bg-orange-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition">
              <a href="/contactUs">
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Connecting Top Talent with Leading Companies
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Universal Recruitment, our mission is to bridge the gap
              between exceptional talent and businesses, fostering successful
              partnerships that lead to growth and prosperity.
            </p>
          </div>
          <div>
            <Image
              src={img3}
              alt="Connecting Talent"
              className="rounded-2xl shadow-2xl"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={img4}
              alt="Why Choose Us"
              className="rounded-2xl shadow-2xl"
              placeholder="blur"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
            <ul className="mt-4 space-y-4">
              {[
                "Industry-leading expertise in recruitment",
                "Tailored solutions for businesses of any size",
                "Dedicated support for candidates",
                "Commitment to fostering growth and success",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-gray-800 mt-1" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <SmallMighty />
      <Testimonials />
      <Achievements />
      <Vendors />
      <Footer />
    </div>
  );
}

export default AboutUs;