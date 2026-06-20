import React from "react";

const ARTICLES = [
  {
    category: "Tournament Update",
    title: "Vindhyachal FC advances to the State Cup Quarter-Finals",
    summary: "After a thrilling 3-2 victory over Valley Giants, our senior team successfully locked down a spot in the upcoming quarter-finals next Saturday.",
    date: "June 18, 2026",
    badgeColor: "bg-emerald-100 text-emerald-800",
  },
  {
    category: "Club News",
    title: "Annual summer football camp registrations now active",
    summary: "We are thrilled to announce that our annual youth summer soccer camp is open for enrollments. Early-bird registration pricing applies until July 1st.",
    date: "June 15, 2026",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    category: "Signing Update",
    title: "Vindhyachal FC signs coach David Beckham as Technical Director",
    summary: "Vindhyachal FC is proud to announce the signing of coach David Beckham as our new Technical Academy Advisor to develop our U16 tactical roadmap.",
    date: "June 10, 2026",
    badgeColor: "bg-purple-100 text-purple-800",
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            LATEST NEWS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Club News & Match Updates
          </h2>
          <p className="text-zinc-500 text-base">
            Stay up to date with match results, club transfers, summer academy updates, and team schedules.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {ARTICLES.map((article, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-zinc-200 bg-white p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Category Badge & Date */}
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-xxs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded ${article.badgeColor}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Read more button link */}
              <div className="pt-4 border-t border-zinc-100">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-3.5 w-3.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
