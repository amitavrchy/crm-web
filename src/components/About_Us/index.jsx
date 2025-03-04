import Image from "next/image";
import aboutUsImg from "../../../public/about-us/about-1.jpg";

function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-12 bg-white">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <Image
          src={aboutUsImg}
          alt="About Us"
          className="rounded-lg shadow-lg"
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
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
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition duration-300">
            Know more...
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
