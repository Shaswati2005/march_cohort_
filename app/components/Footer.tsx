import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-[#c38f4a] py-8 rounded-t-4xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <Link href="/home" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1 123 456 7890</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
