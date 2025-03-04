import React from "react";
import { FaBriefcase, FaUserTie, FaChartLine } from "react-icons/fa";

function Benefits() {
  const benefits = [
    {
      icon: <FaBriefcase />,
      title: "Vast Job Opportunities",
      description:
        "Access a wide range of job listings across various industries to find the perfect match for your skills.",
    },
    {
      icon: <FaUserTie />,
      title: "Personalized Career Guidance",
      description:
        "Receive expert advice and resources tailored to your career goals to help you succeed.",
    },
    {
      icon: <FaChartLine />,
      title: "Career Growth",
      description:
        "Explore opportunities that offer professional development and career advancement.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-bold text-sm uppercase tracking-wide">
            Benefits
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-700">
            Why Choose Us
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Unlock the full potential of your career with our expert solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full shadow-md mb-6">
                <span className="text-3xl">{benefit.icon}</span>
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {benefit.title}
              </h3>
              {/* Description */}
              <p className="mt-4 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
