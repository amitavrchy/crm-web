import React from "react";
import Image from "next/image";
import img1 from "../../../public/about-us-wte/1.jpg";
import img2 from "../../../public/about-us-wte/2.jpg";
import img3 from "../../../public/about-us-wte/3.jpg";

const services = [
  {
    title: "Candidate Sourcing",
    description:
      "We use advanced search technologies to find the best-qualified candidates for your open positions.",
    icon: "✅",
  },
  {
    title: "Job Placement",
    description:
      "We connect job seekers with top employers and help them find fulfilling careers.",
    icon: "📋",
  },
  {
    title: "Career Counseling",
    description:
      "We provide expert guidance to help job seekers improve their resumes, interview skills, and career paths.",
    icon: "🎯",
  },
];

const advancedServices = [
  {
    title: "Enhance Your Skills",
    description:
      "We understand your unique skills and career goals. Let us help you find a position that aligns with your aspirations.",
    buttonText: "Check Opportunities",
    image: img1,
  },
  {
    title: "Tailored Job Matches",
    description:
      "Our comprehensive recruitment services ensure you find the perfect fit for your company quickly and efficiently.",
    buttonText: "Learn More",
    image: img2,
  },
  {
    title: "Seamless Options",
    description:
      "Take advantage of training resources and career advice to unlock your full potential in the job market.",
    buttonText: "Discover",
    image: img3,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      {/* Main Services Section */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-orange-500 max-w-2xl mx-auto font-bold">
          We offer a wide range of recruitment services to help you find the
          perfect candidate or land your dream job.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Services Section */}
      <div className="mt-16 container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {advancedServices.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md group"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-gray-200">{item.description}</p>
                <a href="/services">
                  <button className="mt-6 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
                    {item.buttonText}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
