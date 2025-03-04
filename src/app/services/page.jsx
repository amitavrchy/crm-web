import Vendors from "@/components/vendors";
import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaUserTie, FaTools, FaBriefcase, FaHandshake, FaFileAlt, FaRegComments } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import img1 from "../../../public/about-us-wte/1.jpg";
import img2 from "../../../public/about-us-wte/2.jpg";
import img3 from "../../../public/about-us-wte/3.jpg";
import img4 from "../../../public/about-us/about-2.jpg";
import heroImg from "../../../public/about_service.jpg";
import EmployeeSchedule from "@/components/EmployeeSchedule";
import JobSchedule from "@/components/JobSchedule";

function Services() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src={heroImg}
          alt="Hero Image"
          className="w-full h-[50vh] object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-100">
              What We Offer
            </h1>
            <p className="mt-6 text-lg md:text-2xl font-light text-gray-200 max-w-2xl mx-auto">
              Discover a wide range of recruitment solutions tailored to meet your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            title: "Tailored Recruitment Solutions",
            img: img1,
            description:
              "We connect you with the best candidates to meet your unique requirements.",
          },
          {
            title: "HR Consultancy",
            img: img2,
            description:
              "Providing expert HR advice to streamline your recruitment process.",
          },
          {
            title: "Skill Assessment",
            img: img3,
            description:
              "Ensuring top-notch talent with precise skill evaluation and testing.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition"
          >
            <Image
              src={service.img}
              alt={service.title}
              className="w-full h-60 object-cover"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition"></div>
            <div className="absolute bottom-6 left-6 z-10 text-white">
              <h3 className="text-2xl font-bold text-gray-100">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-200">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Connecting Talent Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-700">
              Connecting Top Talent with Leading Companies
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For a firm to succeed, people are essential. Their abilities and proficiencies enable success. Their deeds and dispositions mold an employer's image and foster an atmosphere that promotes development. Additionally, although seeking and beginning a new job can be a stressful time for professionals, the correct employer-employee relationship offers chances to grow professionally, improve lives, and acquire new skills.

              At Allegis Group, we value our mission to connect exceptional talent with exceptional opportunities. And in a changing recruitment environment where skills, acquisition tactics, and the nature of work continue to evolve, we are dedicated to assisting firms in acquiring talent.
            </p>
          </div>
          <div>
            <Image
              src={img4}
              alt="Connecting Talent"
              className="rounded-2xl shadow-2xl"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-700">What to Expect</h2>
          <p className="mt-4 text-gray-600">
            Here's what you can expect when working with us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {[
              { title: "Dedicated Support", description: "24/7 client assistance", icon: <FaCheckCircle className="text-gray-800 text-4xl mx-auto" /> },
              {
                title: "Exceptional Talent",
                description: "Connecting you with top-tier professionals.",
                icon: <FaUserTie className="text-gray-800 text-4xl mx-auto" />,
              },
              {
                title: "Streamlined Process",
                description: "Efficient and hassle-free recruitment solutions.",
                icon: <FaTools className="text-gray-700 text-4xl mx-auto" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-gray-800 mt-4">{item.title}</h3>
                <p className="mt-4 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-700">
            Our Services
          </h2>
          <p className="mt-4 text-center text-gray-600">
            We offer a wide range of recruitment solutions to help you find the
            perfect candidate or your dream job.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 text-center">
            {[
              { title: "Candidate Sourcing", description: "Identify top talent.", icon: <FaBriefcase className="text-gray-700 text-4xl mx-auto" /> },
              {
                title: "Job Placement",
                description: "Match candidates with ideal roles.",
                icon: <FaHandshake className="text-gray-800 text-4xl mx-auto" />,
              },
              {
                title: "Career Counseling",
                description: "Provide guidance for career advancement.",
                icon: <FaFileAlt className="text-gray-800 text-4xl mx-auto" />,
              },
              {
                title: "Training Programs",
                description: "Upskill professionals.",
                icon: <FaTools className="text-gray-800 text-4xl mx-auto" />,
              },
              {
                title: "Resume Review",
                description: "Optimize your resume.",
                icon: <FaRegComments className="text-gray-800 text-4xl mx-auto" />,
              },
              {
                title: "Mock Interviews",
                description: "Prepare candidates for job interviews.",
                icon: <FaUserTie className="text-gray-800 text-4xl mx-auto" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                {service.icon}
                <h3 className="text-xl font-bold text-gray-800 mt-4">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JobSchedule />
      <EmployeeSchedule />

      {/* Job Offers Section */}
      <section className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-6">
              <h2 className="text-4xl font-extrabold text-white">
                LOOKING FOR A JOB?
              </h2>
              <p className="text-gray-300 text-lg">
                We’ll help you boost your career and land your dream job!
              </p>
            </div>
            <a
              href="/allJobs"
              className="mt-6 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-bold text-lg transition"
            >
              <div className="flex items-center space-x-2">
                <span>Job Offers</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <Vendors />
      <Footer />
    </div>
  );
}

export default Services;
