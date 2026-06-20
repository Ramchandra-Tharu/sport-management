"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ClubFooter from "@/components/ClubFooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col bg-white text-zinc-900">
        
        {/* Banner Section */}
        <section className="relative h-[250px] md:h-[350px] flex items-center justify-center bg-black text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1431324155629-1a6edd1def2d?auto=format&fit=crop&q=80&w=1200"
              alt="Contact Banner"
              fill
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/75" />
          </div>
          
          <div className="relative z-10 px-6 md:px-12 flex flex-col gap-3">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
              SUPPORT & INQUIRIES
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl uppercase">
              Contact Vindhyachal FC
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto">
              Reach out for academy enrollment, partnerships, sponsorships, and matches.
            </p>
          </div>
        </section>

        {/* Contact Info, Map and Form section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start mb-16">
              
              {/* Left Column: Info Cards & Socials */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                    We'd Love to Hear From You
                  </h2>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                    Have questions about our training programs, trials, or club events? Get in touch with our operations team.
                  </p>
                </div>

                {/* Details list */}
                <div className="flex flex-col gap-4 mt-4">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 bg-zinc-50 hover:border-blue-500 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Club Address</span>
                      <span className="text-sm font-bold text-zinc-800">
                        128 Sports Academy Lane, Cityville, NY 10024
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 bg-zinc-50 hover:border-blue-500 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.242 1.242 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Mobile Number</span>
                      <a href="tel:+15550189900" className="text-sm font-bold text-zinc-800 hover:text-blue-600 transition-colors">
                        +1 (555) 018-9900
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 bg-zinc-50 hover:border-blue-500 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Email Address</span>
                      <a href="mailto:contact@vindhyachalfc.com" className="text-sm font-bold text-zinc-800 hover:text-blue-600 transition-colors">
                        contact@vindhyachalfc.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Networks Connect */}
                <div className="flex flex-col gap-3 mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Follow Our Social Channels</h4>
                  <div className="flex gap-3">
                    {[
                      {
                        name: "Facebook",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                          </svg>
                        ),
                        link: "#",
                      },
                      {
                        name: "Instagram",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                          </svg>
                        ),
                        link: "#",
                      },
                      {
                        name: "YouTube",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 3 11.75s0 0 0 0h0c.46 5.33 2.78 19 2.78 19h0" />
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                          </svg>
                        ),
                        link: "#",
                      },
                      {
                        name: "WhatsApp",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                        ),
                        link: "#",
                      },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        aria-label={social.name}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:text-blue-600 hover:border-blue-600 hover:scale-105 transition-all"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10 shadow-sm">
                <h3 className="text-xl font-extrabold text-zinc-900 mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="rounded-2xl bg-blue-50 border border-blue-200 p-8 flex flex-col gap-3 items-center text-center animate-fade-in">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white mb-2 shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-extrabold text-zinc-900">Message Sent Successfully!</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
                      Thank you for contacting Vindhyachal FC. Our club coordinator will review your request and get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Full Name*
                        </label>
                        <input
                          required
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Email Address*
                        </label>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Phone Number*
                      </label>
                      <input
                        required
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Message*
                      </label>
                      <textarea
                        required
                        rows={4}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write your message details..."
                        className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-sm"
                      />
                    </div>

                    {/* Buttons Row */}
                    <div className="flex items-center gap-4 mt-2">
                      <button
                        type="submit"
                        className="flex-1 flex h-12 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white hover:bg-blue-700 hover:scale-[1.01] transition-all cursor-pointer shadow"
                      >
                        Submit Message
                      </button>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 flex h-12 items-center justify-center rounded-full border border-zinc-250 bg-white text-sm font-extrabold text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all cursor-pointer"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                )}

              </div>

            </div>

            {/* Google Map Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-extrabold text-zinc-900">Find Our Stadium</h3>
              <div className="w-full h-[350px] md:h-[450px] relative rounded-3xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821262!2d-74.11976378457187!3d40.69767006349557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1687100000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vindhyachal FC Headquarters Map"
                ></iframe>
              </div>
            </div>

          </div>
        </section>

      </main>

      <ClubFooter />
    </>
  );
}
