"use client";
import React from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    position: "HR Manager, XYZ Corp",
    testimonial:
      "This platform has significantly improved our hiring process. The interface is intuitive, and the features are exactly what we needed!",
  },
  {
    name: "Jane Smith",
    position: "Talent Acquisition, ABC Ltd",
    testimonial:
      "A game-changer in recruitment! The seamless experience and automation have saved us so much time.",
  },
  {
    name: "David Johnson",
    position: "CEO, HireFast",
    testimonial:
      "Excellent service! This has streamlined our talent acquisition process, making hiring faster and more efficient.",
  },
];

function Testimonials() {
  return (
    <div className="bg-white text-gray-800 py-16 px-4 md:px-8 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        What Our Clients Say
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
              <FaQuoteLeft className="text-orange-500 text-5xl mb-4" />
              <p className="text-xl italic mb-6">"{item.testimonial}"</p>
              <FaUserCircle className="text-orange-500 text-6xl mb-3" />
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-md text-gray-600">{item.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
