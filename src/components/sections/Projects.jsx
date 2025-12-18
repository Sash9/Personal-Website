export const Projects = () => {
  const projects = [
    {
      title: "Sauce Bros Sales Analysis — HackAI 2025",
      headline: "AI-powered sales and inventory intelligence that earned 2nd place in the SauceBros track (Apr 2025).",
      summary:
        "Teamed with four builders to ship an end-to-end platform that optimized a local restaurant’s inventory, sales, and operations. Trained Prophet and XGBoost models that hit 94.3% accuracy across daily, weekly, and monthly forecasts.",
      role: "ML Engineer & Full-Stack Dev",
      tech: ["Python", "React", "Pandas", "XGBoost", "Prophet"],
      github: "#",
      live: "#",
      hero:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80",
  
    },
    {
      title: "UTD Financial Tracker — HackReason 2025",
      headline: "Awarded 4th place and “Most Innovative Application” (Jan 2025).",
      summary:
        "Pair-built a student-focused financial bot that ranks spending patterns and recommends 30+ scholarships using s(CASP) logic programming. Combined reasoning rules with Python orchestration to keep budgeting actionable.",
      role: "Engineer",
      tech: ["Prolog (s(CASP))", "Python"],
      github: "#",
      live: "#",
      hero:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
      
    },
    {
      title: "Toyota Dream Car Finder — HackUTD 2025",
      headline: "Data-driven web platform that matches users to their dream Toyota (Nov 2025).",
      summary:
        "Worked with a team of four to ship a multinomial logistic regression matcher plus a FastAPI backend and Firebase NoSQL store holding 40+ cars. Delivered tailored recommendations via a React frontend wired to model coefficients.",
      role: "Full-Stack Developer",
      tech: ["Firebase", "JavaScript", "React", "FastAPI", "Git"],
      github: "#",
      live: "#",
      hero:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Glucose Track",
      headline: "Full-stack glucose tracking web app (Feb 2025 — Apr 2025).",
      summary:
        "Built real-time monitoring and historical analysis by integrating Dexcom G7 via pydexcom. Designed a pipeline that ingests 500+ daily readings into PostgreSQL with optimized schemas, and used OpenAI LLMs to generate personalized recipe guidance based on glucose trends.",
      role: "Full-Stack Developer",
      tech: ["PostgreSQL", "React", "Node", "Express", "RESTful APIs", "Git"],
      github: "#",
      live: "#",
      hero:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Predicting Soccer Game Matchups",
      headline: "Season-long matchup predictions using cleaned data from 20 teams.",
      summary:
        "Organized and cleaned season data for 20 clubs with pandas, engineered predictors, and trained a machine learning model that boosted accuracy from 49% to 65% through iterative retraining and feature tuning.",
      role: "Data Scientist",
      tech: ["Pandas", "Python", "scikit-learn", "Logistic Regression", "Data Cleaning"],
      github: "#",
      live: "#",
      hero:
        "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Selected Work</p>
          <h2 className="text-5xl font-bold text-gray-50">Hackathons & Builds</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Case-study style highlights of the projects I’ve led — each with the narrative, stack,
            and visuals that match the experience.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-black shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.12),transparent_30%)]"
                aria-hidden="true"
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-200 font-semibold grid place-items-center">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <span className="text-sm uppercase tracking-[0.2em] text-indigo-200/80">
                      Case Study
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-50 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed">{project.headline}</p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                    >
                      View Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-indigo-100 border border-white/15 hover:border-indigo-400/60 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                    <img
                      src={project.hero}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/50" />
                  </div>

                  {project.gallery?.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                      {project.gallery.map((thumb, thumbIndex) => (
                        <div
                          key={thumbIndex}
                          className="relative h-24 overflow-hidden rounded-xl border border-white/10 bg-white/5"
                        >
                          <img
                            src={thumb}
                            alt={`${project.title} gallery ${thumbIndex + 1}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-4 py-2 rounded-full border border-white/15 bg-white/10 text-sm text-gray-100">
                        {project.role}
                      </span>
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-sm text-indigo-100 border border-indigo-500/30 bg-indigo-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
