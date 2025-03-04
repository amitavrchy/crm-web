import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wide text-tomato">DEMAND RECRUITMENT</h2>
          <p className="mt-4 text-gray-400">
            <span className="font-semibold text-white">Address:</span><br />
            123 Main Street, City<br />
            State Province, Country
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-tomato text-2xl transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-tomato text-2xl transition-all">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-tomato text-2xl transition-all">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-tomato transition-all">Client Guidebook</a></li>
            <li><a href="#" className="hover:text-tomato transition-all">Success Story</a></li>
            <li><a href="#" className="hover:text-tomato transition-all">Report a Vendor</a></li>
            <li><a href="#" className="hover:text-tomato transition-all">Strategy & Tips</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-tomato transition-all">FAQ</a></li>
            <li><a href="#" className="hover:text-tomato transition-all">Report an Issue</a></li>
            <li><a href="#" className="hover:text-tomato transition-all">Help & Support</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-tomato transition-all">About Us</a></li>
            <li><a href="#" className="hover:text-tomato transition-all">Our Partners</a></li>
            <li><a href="#" className="hover:text-tomato transition-all">Photo Gallery</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; 2024 Demand Recruitment. All Rights Reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-tomato transition-all">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-tomato transition-all">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
