"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "animate.css";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-12 bg-white"
    >
      <div
        className={`flex-shrink-0 w-full md:w-1/2 ${
          isVisible ? "animate__animated animate__fadeInLeft" : "opacity-0"
        }`}
      >
        <Image
          src="/about-us/about-1.jpg"
          alt="About Us"
          className="rounded-lg shadow-lg"
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>
      <div
        className={`w-full md:w-1/2 text-center md:text-left ${
          isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
        }`}
      >
        <p className="text-orange-500 text-sm font-semibold uppercase mb-2">
          About us
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Your Partner in Professional Growth
        </h2>
        <p className="text-gray-600 mb-6">
          At Demand Recruitment Services, we specialize in connecting job
          seekers with employers who value their skills and aspirations. Our
          mission is to empower individuals to find meaningful work while
          enabling businesses to thrive with top talent. Whether you're
          searching for a fresh start, career advancement, or a new challenge,
          we're here to guide you every step of the way.
        </p>
        <a href="/aboutUs">
          <button
            className={`px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition duration-300 ${
              isVisible ? "animate__animated animate__bounceIn" : "opacity-0"
            }`}
          >
            Know more
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
