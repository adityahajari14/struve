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
    <footer className="w-full bg-white py-16 px-16">
      <div className="space-y-12">
        {/* Top Row: Confidentiality Policy and Disclaimer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm font-bold text-[#E68126] mb-6">
              Sign up for our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="max-w-lg flex flex-row">
              <div>
                <label htmlFor="email" className="text-xs text-black block mb-3">
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
                  className="w-full min-w-sm px-0 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#E68126] text-sm"
                />
              </div>
              <button
                type="submit"
                aria-label="Sign up"
                className="text-sm text-black hover:text-[#E68126] transition-colors"
              >
                Sign up
              </button>
              {submitted && (
                <p className="text-sm font-bold text-gray-700">
                  Thanks for submitting!
                </p>
              )}
            </form>
          </div>

          {/* Contact, Address, and Social Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold text-[#E68126] mb-6">Contact</h3>
              <div>
                <div className="flex flex-row gap-4">
                  <p className="text-xs font-bold text-gray-800 mb-2">Call</p>
                  <p className="text-xs text-gray-600">+966 11 242 6606</p>
                </div>
                <div className="flex flex-row gap-4">
                  <p className="text-xs font-bold text-gray-800 mb-2">Email</p>
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
              <h3 className="text-sm font-bold text-[#E68126] mb-6">Address</h3>
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
              <h3 className="text-sm font-bold text-[#E68126] mb-6">Social</h3>
              <div className="flex flex-col gap-3 text-xs text-gray-600">
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