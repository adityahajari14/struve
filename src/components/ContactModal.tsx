'use client';

import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[200] transition-opacity duration-300 ${
          isOpen ? '' : 'hidden pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Modal - Slides from right */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[60%] lg:w-[70%] bg-[#242528] text-white z-[201] transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity z-10"
          aria-label="Back to site"
        >
          <svg preserveAspectRatio="xMidYMid meet" viewBox="25.9 25.9 148.2 148.2" className="w-6 h-6 fill-white">
            <path d="M171.3 158.4L113 100l58.4-58.4c3.6-3.6 3.6-9.4 0-13s-9.4-3.6-13 0L100 87 41.6 28.7c-3.6-3.6-9.4-3.6-13 0s-3.6 9.4 0 13L87 100l-58.4 58.4c-3.6 3.6-3.6 9.4 0 13s9.4 3.6 13 0L100 113l58.4 58.4c3.6 3.6 9.4 3.6 13 0s3.5-9.5-.1-13z"></path>
          </svg>
        </button>

        <div className="h-full flex items-center p-8 md:p-12 lg:p-16">
          <div className="w-full">
            <h2 className="text-[40px] md:text-[50px] font-serif mb-8 md:mb-12">Contact</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Form */}
              <div>
                <p className="text-[16px] mb-6">For inquiries, please leave us your details.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* First Name and Last Name - Side by Side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email and Phone - Side by Side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={250}
                        pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                        className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={50}
                        className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Success Message */}
                  {submitted && (
                    <p className="text-[16px] text-green-400">
                      Thanks for submitting!
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="bg-white text-black px-8 py-2.5 font-medium hover:bg-gray-200 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column - Contact Info in 2 columns */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 h-fit">
                {/* Call */}
                <div>
                  <h3 className="text-[14px] font-bold mb-2">Call</h3>
                  <p className="text-[14px] text-gray-300">+966 11 242 6606</p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-[14px] font-bold mb-2">Email</h3>
                  <a 
                    href="mailto:info@stru-ve.com" 
                    className="text-[14px] transition-colors"
                  >
                    info@stru-ve.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-[14px] font-bold mb-2">Address</h3>
                  <div className="text-[14px] text-gray-300 leading-[1.5em]">
                    <p>Anas Ibn Malik Road</p>
                    <p>Al Malqa, Riyad</p>
                    <p>P.O Box: 13521, Riyad</p>
                    <p>Kingdom of Saudi Arabia</p>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-[14px] font-bold mb-2">Social</h3>
                  <div className="space-y-1">
                    <p>
                      <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="text-[14px] text-gray-300 hover:text-white transition-colors"
                      >
                        Instagram
                      </a>
                    </p>
                    <p>
                      <a 
                        href="https://www.facebook.com" 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="text-[14px] text-gray-300 hover:text-white transition-colors"
                      >
                        Facebook
                      </a>
                    </p>
                    <p>
                      <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="text-[14px] text-gray-300 hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                    </p>
                    <p>
                      <a 
                        href="https://www.twitter.com" 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="text-[14px] text-gray-300 hover:text-white transition-colors"
                      >
                        Twitter
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
