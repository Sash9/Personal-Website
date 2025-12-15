export const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Project Two",
      description: "Mobile-first responsive design with advanced animations",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      github: "#",
      live: "#"
    },
    {
      title: "Project Three",
      description: "Full-stack application with real-time features",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-100 mb-6">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex-1 text-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
