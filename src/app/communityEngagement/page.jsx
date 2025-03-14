import React from "react";
import Image from "next/image";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import img1 from "../../../public/services/52.jpg";
import img2 from "../../../public/services/53.jpg";
import img3 from "../../../public/services/54.jpg";

const CommunityEngagementEvents = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Community Engagement & Events
          </h1>
        </div>
      </div>

      {/* Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Community Engagement Strategy</h2>
          <p className="text-gray-600 leading-relaxed">
            Building meaningful relationships within the community is vital to creating positive and lasting impacts. Our Community Engagement & Events services are designed to foster strong connections, increase brand awareness, and enhance the overall experience of participants. From local meetups to large-scale events, we provide tailored strategies that encourage active involvement and create a sense of belonging.
          </p>
          <ul className="mt-4 space-y-3">
            {["Building lasting relationships", "Fostering active participation", "Organizing impactful events", "Creating shared community experiences"].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={img1} alt="Community Engagement Strategy" className="rounded-2xl shadow-2xl" placeholder="blur" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={img2} alt="Community Engagement Services" className="rounded-2xl shadow-2xl" placeholder="blur" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Engaging and Impactful Events</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our approach to community events is centered around engagement, creativity, and inclusivity. We work closely with organizations to design and execute events that are not only enjoyable but also foster connections that last long after the event ends. Whether you're planning a local community gathering or a large-scale event, we bring fresh ideas and solutions that resonate with your audience.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition">
              <a href="/contactUs">Get Started</a>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Why Partner with Us for Community Engagement?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Partnering with us means choosing an experienced team that understands the power of community. We are committed to creating events and engagement strategies that are aligned with your mission, values, and goals. By working with us, you ensure that your events leave a lasting impression, drive meaningful interactions, and cultivate a sense of unity.
            </p>
            <ul className="mt-4 space-y-4">
              {["Proven track record of successful events", "Tailored engagement strategies", "Inclusive and diverse approach", "Long-term impact through community building"].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <UsersIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image src={img3} alt="Why Choose Us" className="rounded-2xl shadow-2xl" placeholder="blur" />
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

export default CommunityEngagementEvents;
