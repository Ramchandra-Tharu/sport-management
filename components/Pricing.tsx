import React from "react";

const PACKAGES = [
  {
    title: "Quick start consultation",
    price: "$12",
    period: "/hour",
    cta: "Book a call",
    link: "#contact",
    isFeatured: false,
    features: [
      "1-hour personal consultation",
      "Nutrition and fitness advice",
      "Wellness recommendations",
      "Fitness roadmap",
      "Access to fitness resources",
      "Certified personal trainer",
    ],
  },
  {
    title: "Complete transformation",
    price: "$189",
    period: "/month",
    cta: "Get started",
    link: "#contact",
    isFeatured: true,
    badge: "Best value",
    features: [
      "Customized meal plan",
      "Full fitness assessment",
      "Daily WhatsApp support",
      "Biometric data interpretation",
      "Mobility training",
      "Monthly progress reports",
    ],
  },
  {
    title: "Elite fitness coaching",
    price: "$299",
    period: "/month",
    cta: "Book a call",
    link: "#contact",
    isFeatured: false,
    features: [
      "Personal training sessions",
      "Customized nutrition plan",
      "Weekly fitness assessments",
      "Injury-safe workout plans",
      "Access to fitness webinars",
      "Biweekly progress reports",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-dark-bg border-b border-dark-border relative">
      {/* Background glow behind pricing cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[480px] w-[480px] rounded-full bg-lime-neon/3 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-sm font-semibold tracking-wider text-lime-neon">PRICING</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Choose a package
          </h2>
          <p className="text-zinc-600 text-base">
            Select the perfect coaching setup built around your lifestyle, target speed, and support requirements.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                pkg.isFeatured
                  ? "border-lime-neon/50 bg-dark-card shadow-xl shadow-lime-neon/5 scale-[1.02] lg:scale-[1.03]"
                  : "border-dark-border bg-dark-card/60 hover:border-zinc-400"
              }`}
            >
              {/* Highlight Badge */}
              {pkg.isFeatured && pkg.badge && (
                <div className="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-lime-neon px-3.5 py-1 text-xs font-extrabold text-zinc-900 uppercase tracking-wider">
                  {pkg.badge}
                </div>
              )}

              {/* Package Content */}
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{pkg.title}</h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-zinc-900 sm:text-5xl">{pkg.price}</span>
                  <span className="text-zinc-500 text-sm font-medium">{pkg.period}</span>
                </div>

                {/* CTA Button */}
                <a
                  href={pkg.link}
                  className={`flex h-11 items-center justify-center gap-2 rounded-full text-sm font-bold transition-all w-full mb-8 ${
                    pkg.isFeatured
                      ? "bg-lime-neon text-zinc-900 hover:scale-[1.01] hover:brightness-95"
                      : "border border-zinc-300 bg-transparent text-zinc-900 hover:bg-dark-hover"
                  }`}
                >
                  {pkg.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-4 w-4"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>

                {/* Divider */}
                <div className="h-px bg-dark-border w-full mb-6" />

                {/* Features Heading */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">
                  Included features:
                </h4>

                {/* Features List */}
                <ul className="flex flex-col gap-3.5">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime-neon/15 text-lime-neon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          className="h-2.5 w-2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
