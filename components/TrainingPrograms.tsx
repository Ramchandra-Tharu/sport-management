import React from "react";

const PROGRAMS = [
  {
    title: "Beginner Training",
    description: "Focuses on ball control, base positioning, passing drills, and understanding basic game rules.",
    age: "Ages 6 - 10",
    schedule: "Tue & Thu, 4:00 PM",
    color: "bg-blue-500",
  },
  {
    title: "Intermediate Training",
    description: "Builds up stamina, speed, tactical awareness, advanced footwork, and mock match scenarios.",
    age: "Ages 11 - 15",
    schedule: "Mon & Wed, 5:00 PM",
    color: "bg-emerald-500",
  },
  {
    title: "Advanced Training",
    description: "Intense academy prep, strength conditioning, tactical plays, match psychology, and scouts showcase.",
    age: "Ages 16+",
    schedule: "Mon, Wed & Fri, 6:30 PM",
    color: "bg-indigo-600",
  },
  {
    title: "Goalkeeper Academy",
    description: "Specialized goalie reflexes, positioning, diving techniques, goal-kicking, and aerial interception.",
    age: "All Ages",
    schedule: "Friday, 5:00 PM",
    color: "bg-amber-500",
  },
];

export default function TrainingPrograms() {
  return (
    <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            PROGRAMS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Training programs for all levels
          </h2>
          <p className="text-zinc-500 text-base">
            Our structured programs are tailored by age and ability, ensuring every student learns at their own pace.
          </p>
        </div>

        {/* Programs Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((prog, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-zinc-200 bg-white p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Visual badge top */}
                <div className={`h-2.5 w-12 rounded-full ${prog.color} mb-6`} />

                <h3 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {prog.title}
                </h3>
                
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {prog.description}
                </p>
              </div>

              {/* Program metadata footer */}
              <div className="flex flex-col gap-1.5 pt-4 border-t border-zinc-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400 font-medium">Age Group:</span>
                  <span className="text-zinc-700 font-bold">{prog.age}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400 font-medium">Schedule:</span>
                  <span className="text-zinc-700 font-bold">{prog.schedule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
