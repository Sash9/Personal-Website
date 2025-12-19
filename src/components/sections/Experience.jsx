export const Experience = () => {
  const experiences = [
    {
      company: "Wellness Center for Older Adults",
      role: "Software Engineer",
      period: "Aug 2025 — Dec 2025",
      location: "Richardson, TX",
      highlights: [
        "Collaborated with 4 developers in a Scrum Agile environment, delivering an emergency ride sharing application for 200+ senior citizens at the Wellness Center for Old Adults non profit organization.",
        "Developed backend infrastructure and optimized database queries, processing 500+ ride requests.",
        "Debugged issues and tested core features of the application, ensuring reliability and ease of use for senior citizens."
      ]
    },
    {
      company: "UTD Society of Automotive Engineers",
      role: "Cloud Data Engineer",
      period: "Sep 2025 — Present",
      location: "Richardson, TX",
      highlights: [
        "Designed and implemented a relational database and entity relationship diagram for a cloud telemetry system, modeling 5+ entities and optimizing queries for 10,000+ sensor readings to enhance car performance.",
        "Created a testing environment by deploying and configuring a PostgreSQL instance in cloud computing technology Azure to enable safe testing."
      ]
    },
    {
      company: "UTD Society of Artificial Intelligence and Medicine",
      role: "Project Director",
      period: "Sep 2025 — Dec 2025",
      location: "Richardson, TX",
      highlights: [
        "Designed and implemented a relational database and entity relationship diagram for a cloud telemetry system, modeling 5+ entities and optimizing Led a team of 5 developers to develop a national disease tracker by analyzing 100K+ public health reports using NLP keywords and forecasting disease trends with time series analysis. for 10,000+ sensor readings to enhance car performance.",
        "Coordinated task assignments by managing 4+ sprints and 20+ standups in a Scrum Agile environment, ensuring timely delivery of project milestones."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Experience</p>
          <h2 className="text-5xl font-bold text-gray-50">Where I’ve Worked</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Snapshot of roles, impact, and the stacks I’ve used. Replace the placeholders with your
            details.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-black p-8 shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.1),transparent_28%)]"
                aria-hidden="true"
              />

              <div className="relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10">
                <div className="space-y-3">
                  <div className="text-indigo-200 text-sm uppercase tracking-[0.2em]">
                    {item.period}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-50">{item.role}</h3>
                    <p className="text-gray-200">{item.company}</p>
                    <p className="text-gray-400 text-sm">{item.location}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-300 leading-relaxed">{item.summary}</p>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    {item.highlights.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-2">
                        <span className="text-indigo-300">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

