import React from "react";

export default function Vendors() {
  return (
    <section className="py-16 text-white bg-gray-800">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold leading-tight">
          Our Proven Recruitment Process
        </h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          We combine innovative strategies and industry expertise to deliver
          exceptional recruitment services. From sourcing the right talent to
          seamless onboarding, we’ve got you covered. Let us help you build your
          dream team.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="/signUp"
            className="inline-block px-8 py-3 font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-md hover:from-red-500 hover:to-orange-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn More
          </a>
          <a
            href="/signUp"
            className="inline-block px-8 py-3 font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Apply as Vendor
          </a>
        </div>
      </div>
    </section>
  );
}
