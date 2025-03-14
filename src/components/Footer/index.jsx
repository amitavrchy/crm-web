import React from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wide text-[#F97316]">Demand Recruitment Service</h2>
          <p className="mt-4 text-gray-400">
            <span className="font-semibold text-white">Address:</span><br />
            Demand Recruitment Services Ltd <br />
            20-22 Wenlock Road ,  London England - N1 7GU

          </p>
          <p className="mt-2 text-gray-400">
            <span className="font-semibold text-white">Phone:</span> +44 0203 876 1531<br />
            <span className="font-semibold text-white">Email:</span> info@demandrecruitmentservices.co.uk
          </p>
          <div className="flex gap-5 mt-10">
            <FaFacebook className="text-orange-600 text-3xl cursor-pointer transition-transform duration-200 hover:scale-110" />
            <FaTwitter className="text-orange-400 text-3xl cursor-pointer transition-transform duration-200 hover:scale-110" />
            <FaLinkedin className="text-orange-700 text-3xl cursor-pointer transition-transform duration-200 hover:scale-110" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-[#F97316] transition-all">Home</a></li>
            <li><a href="#" className="hover:text-[#F97316] transition-all">About Us</a></li>
            <li><a href="#" className="hover:text-[#F97316] transition-all">Services</a></li>
            <li><a href="#" className="hover:text-[#F97316] transition-all">Jobs</a></li>
            <li><a href="#" className="hover:text-[#F97316] transition-all">Projects</a></li>
            <li><a href="#" className="hover:text-[#F97316] transition-all">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#F97316] transition-all">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe for Updates</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for job alerts, industry news, and more.</p>
          <form action="#" method="post">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="w-full p-3 bg-gray-700 text-white rounded-md mb-4"
              required
            />
            <button type="submit" className="w-full bg-[#F97316] text-white py-3 rounded-md hover:bg-orange-600 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Demand Recruitment Service. All Rights Reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-[#F97316] transition-all">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-[#F97316] transition-all">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
