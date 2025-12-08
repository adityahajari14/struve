"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="w-full bg-white py-10 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-10 lg:space-y-12">
        {/* Top Row: Confidentiality Policy and Disclaimer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-center md:text-left">
          {/* Confidentiality Policy */}
          <div>
            <h3 className="text-sm font-bold text-[#E68126] mb-6">
              Our Confidentiality Policy
            </h3>
            <p className="text-xs text-justify text-gray-700 leading-relaxed max-w-md">
              We fully understand the sensitivity of our role and the trust our
              clients have placed in us. We treat all information received from
              our clients with utmost regard towards confidentiality and
              privacy. Even within our team, no information are shared unless
              cleared by senior management.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-sm font-bold text-[#E68126] mb-6">
              Disclaimer
            </h3>
            <p className="text-xs text-gray-700">
              Some pictures are indicative for illustration purpose only.
            </p>
          </div>
        </div>

        {/* Bottom Row: Newsletter and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-center md:text-left">
          {/* Newsletter Signup */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs md:text-sm font-bold text-[#E68126] mb-4 md:mb-6">
              Sign up for our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <label htmlFor="email" className="text-xs text-black block mb-2 md:mb-3 text-center sm:text-left">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                    maxLength={250}
                    className="w-full px-0 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#E68126] text-xs md:text-sm text-center sm:text-left"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                  <button
                    type="submit"
                    aria-label="Sign up"
                    className="text-xs md:text-sm text-black hover:text-[#E68126] transition-colors font-medium underline"
                  >
                    Sign up
                  </button>
                  {submitted && (
                    <p className="text-xs md:text-sm font-bold text-gray-700">
                      Thanks for submitting!
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Contact, Address, and Social Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center sm:text-left">
            {/* Contact */}
            <div>
              <h3 className="text-xs md:text-sm font-bold text-[#E68126] mb-4 md:mb-6">Contact</h3>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 md:gap-4 items-center sm:items-start justify-center sm:justify-start">
                  <p className="text-xs font-bold text-gray-800">Call</p>
                  <p className="text-xs text-gray-600">+966 11 242 6606</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 md:gap-4 items-center sm:items-start justify-center sm:justify-start">
                  <p className="text-xs font-bold text-gray-800">Email</p>
                  <a
                    href="mailto:info@stru-ve.com"
                    className="text-xs text-gray-600 hover:text-[#E68126] transition-colors"
                  >
                    info@stru-ve.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xs md:text-sm font-bold text-[#E68126] mb-4 md:mb-6">Address</h3>
              <address className="text-xs text-gray-600 not-italic leading-relaxed">
                8683-8729 Prince Abdulaziz
                <br />
                Ibn Musaid Ibn Jalawi Street,
                <br />
                As Sulimaniyah, Riyadh
                <br />
                P. O Box: 12234, Riyadh
                <br />
                Kingdom of Saudi Arabia
              </address>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xs md:text-sm font-bold text-[#E68126] mb-4 md:mb-6">Social</h3>
              <div className="flex flex-col gap-2 md:gap-3 text-xs text-gray-600">
                <a
                  href="#"
                  className="hover:text-[#E68126] transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-[#E68126] transition-colors"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-[#E68126] transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:text-[#E68126] transition-colors"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}