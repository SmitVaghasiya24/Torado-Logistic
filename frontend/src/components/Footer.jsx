import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#F7F2EF] pt-16">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14">

          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/black-logo.svg" alt="Torado" className="h-12" />
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Powerful platform recommended by WordPress.org and trusted by the
              owners of over 2,800,000 domains.
            </p>

            <h4 className="font-semibold mb-4">Follow Us On:</h4>
            <div className="flex items-center gap-4 text-[#F26A5A] text-lg">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Logistic Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Air Freight</li>
              <li>Ocean Freight</li>
              <li>Custom Clearance</li>
              <li>Road Freight</li>
              <li>Project Cargo Services</li>
              <li>Event Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Important Links</h4>
            <ul className="space-y-3 text-gray-600">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Projects</li>
              <li>Blog</li>
              <li>Locations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Customer Portal</li>
              <li>Support Portal</li>
              <li>Terms & Conditions</li>
              <li>Live Chat</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold text-gray-800">Address:</span>{" "}
                2750 Quadra Street Victoria, Canada.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Email:</span>{" "}
                hello@torado.com
              </li>
              <li>
                <span className="font-semibold text-gray-800">Phone:</span>{" "}
                +1-485-456-0102 <br /> +1-485-456-0104
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#EFE6E1] py-4">
        <p className="text-center text-sm text-gray-700">
          © <span className="font-semibold text-gray-900">Torado</span> is Proudly
          Owned by <span className="font-semibold">EnvyTheme</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
