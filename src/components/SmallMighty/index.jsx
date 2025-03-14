import React from "react";

function SmallMighty() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 py-20 px-10 text-center">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Small but Mighty</h2>
      <span className="font-lg">
        At Demand Recruitment Services Ltd, we provide end-to-end staffing solutions tailored to your business needs. Whether you're looking for permanent hires, temporary staff, or managed service solutions, we connect businesses with the right talent to drive success.
        We specialize in Managed Service Provision, Facility Management, and Community Services, ensuring seamless workforce management across multiple industries.</span>

      <p className="text-gray-700 font-semibold text-2xl mb-12">
        Take a look at these numbers to see what we’ve already achieved:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          { number: "14,569,103", text: "Shifts planned per year (*avg)" },
          { number: "47,992", text: "Leave requests per year (*avg)" },
          { number: "598,365", text: "Hours of overtime worked per year (*avg)" },
          { number: "36", text: "Countries using Demand Recruitment" },
          { number: "435", text: "Avg. size of company using Demand Recruitment" },
          { number: "10", text: "Dedicated phone lines for support" },
          { number: "146", text: "Hours of video recorded for help and support" },
          { number: "10,452", text: "Hot drinks consumed in one year" },
          { number: "1", text: "Minutes of un-scheduled downtime since inception" },
        ].map((item, index) => (
          <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-xl">
            <p className="text-4xl font-extrabold text-gray-800">{item.number}</p>
            <p className="text-gray-600 mt-3 text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallMighty;
