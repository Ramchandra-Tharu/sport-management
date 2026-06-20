"use client";

import React, { useState } from "react";

const FAQS = [
  {
    question: "How do I choose the right plan for me?",
    answer: "Choose a plan based on your goals, fitness level, and schedule. I’ll help you pick the right one for your journey and long-term progress during our initial strategy call.",
  },
  {
    question: "What if I miss a scheduled training session?",
    answer: "Just notify me at least 24 hours in advance, and we can reschedule your session for another time during the week. Missed sessions without 24h notice cannot be refunded.",
  },
  {
    question: "Can I switch my plan later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at the end of any billing cycle to adapt to your changing schedules and fitness requirements.",
  },
  {
    question: "How can I contact you for support?",
    answer: "Complete transformation and elite packages include direct daily WhatsApp support. For other queries, you can reach out via email at support@yourbrand.com.",
  },
  {
    question: "Are there any long-term commitments?",
    answer: "No, coaching plans run on a month-to-month contract. You can cancel at any time before your next monthly billing cycle begins.",
  },
];

export default function FAQContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark-bg border-b border-dark-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold tracking-wider text-lime-neon">FAQ</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                Have questions or need help? I’m here to assist you
              </h2>
            </div>

            {/* Accordion Stack */}
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-bold text-zinc-900 hover:text-lime-neon transition-colors"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dark-border text-zinc-900 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-lime-neon border-lime-neon text-zinc-900" : ""
                      }`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="h-3 w-3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {/* Accordion Answer Wrapper */}
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[200px]" : "max-h-0"
                    }`}>
                      <div className="p-5 pt-0 text-sm text-zinc-600 border-t border-dark-border/20 mt-1 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 rounded-3xl border border-dark-border bg-dark-card p-8 sm:p-10">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="rounded-2xl bg-lime-neon/10 border border-lime-neon/30 p-6 flex flex-col gap-2 items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-neon text-zinc-900 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-zinc-900">Message Sent Successfully!</h4>
                <p className="text-sm text-zinc-600">Thank you for reaching out. Mike will review your message and reply as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Full name*
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-11 rounded-xl border border-zinc-250 bg-white px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-lime-neon focus:outline-none transition-colors shadow-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Email address*
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@yourbrand.com"
                      className="h-11 rounded-xl border border-zinc-250 bg-white px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-lime-neon focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Phone number*
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your contact number"
                      className="h-11 rounded-xl border border-zinc-250 bg-white px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-lime-neon focus:outline-none transition-colors shadow-sm"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Subject*
                    </label>
                    <input
                      required
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can I help you?"
                      className="h-11 rounded-xl border border-zinc-250 bg-white px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-lime-neon focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="rounded-xl border border-zinc-250 bg-white p-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-lime-neon focus:outline-none transition-colors resize-none shadow-sm"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-2 flex h-11 items-center justify-center rounded-full bg-lime-neon text-sm font-bold text-zinc-900 hover:brightness-95 hover:scale-[1.01] transition-all cursor-pointer shadow-md"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
