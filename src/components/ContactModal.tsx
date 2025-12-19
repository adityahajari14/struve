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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '2196d9b6-e327-495e-956f-90b0cf3c15a7',
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        console.error('Form submission failed:', result);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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
        className={`fixed inset-0 bg-black/50 z-[200] transition-opacity duration-300 ${isOpen ? '' : 'hidden pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Modal - Slides from right */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[60%] lg:w-[70%] bg-[#242528] text-white z-[201] transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'
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

        <div className="h-full flex items-start md:items-center p-6 md:p-8 lg:p-12 xl:p-16 py-12 md:py-8">
          <div className="w-full pb-12 md:pb-0">
            <h2 className="text-3xl md:text-[40px] lg:text-[50px] font-serif mb-6 md:mb-8 lg:mb-12">Contact</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {/* Left Column - Form */}
              <div>
                <p className="text-sm md:text-base lg:text-[16px] mb-4 md:mb-6">For inquiries, please leave us your details.</p>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  {/* First Name and Last Name - Side by Side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs md:text-sm mb-2">
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
                        className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs md:text-sm mb-2">
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
                        className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors text-sm md:text-base"
                      />
                    </div>
                  </div>

                  {/* Email and Phone - Side by Side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs md:text-sm mb-2">
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
                        className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs md:text-sm mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={50}
                        className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors text-sm md:text-base"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent border-b border-white/30 focus:border-white py-2 px-0 outline-none transition-colors resize-none text-sm md:text-base"
                    />
                  </div>

                  {/* Submit Success Message */}
                  {submitted && (
                    <p className="text-sm md:text-base text-green-400">
                      Thanks for submitting!
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white text-black px-6 md:px-8 py-2 md:py-2.5 font-medium hover:bg-gray-200 transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column - Contact Info in 2 columns on desktop, 1 on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-6 h-fit mt-8 lg:mt-0">
                {/* Call */}
                <div>
                  <h3 className="text-sm md:text-sm lg:text-[14px] font-bold mb-2">Call</h3>
                  <p className="text-sm md:text-sm lg:text-[14px] text-gray-300">+966 11 242 6606</p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-sm md:text-sm lg:text-[14px] font-bold mb-2">Email</h3>
                  <a
                    href="mailto:info@stru-ve.com"
                    className="text-sm md:text-sm lg:text-[14px] transition-colors text-gray-300 hover:text-white"
                  >
                    info@stru-ve.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-sm md:text-sm lg:text-[14px] font-bold mb-2">Address</h3>
                  <address className="text-sm md:text-sm lg:text-[14px] text-gray-300 not-italic leading-relaxed">
                    8683-8729 Prince Abdulaziz<br />
                    Ibn Musaid Ibn Jalawi Street,<br />
                    As Sulimaniyah, Riyadh<br />
                    P. O Box: 12234, Riyadh<br />
                    Kingdom of Saudi Arabia
                  </address>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-sm md:text-sm lg:text-[14px] font-bold mb-2">Social</h3>
                  <div className="space-y-1">
                    <p>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm md:text-sm lg:text-[14px] text-gray-300 hover:text-white transition-colors"
                      >
                        Instagram
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm md:text-sm lg:text-[14px] text-gray-300 hover:text-white transition-colors"
                      >
                        Facebook
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm md:text-sm lg:text-[14px] text-gray-300 hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm md:text-sm lg:text-[14px] text-gray-300 hover:text-white transition-colors"
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
