import { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with dynamic product catalog, cart management, Stripe payments, and an admin dashboard. Built with performance and scalability in mind.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full-Stack',
    year: '2025',
    status: 'Live',
    links: { github: '#', live: 'https://anzstore.vercel.app' },
  },
  {
    id: 'project-2',
    title: 'AI Task Manager',
    description: 'An intelligent task management app leveraging Python ML models to auto-prioritize tasks, predict deadlines, and optimize productivity workflows.',
    tags: ['Python', 'Flask', 'React', 'ML'],
    category: 'AI / ML',
    year: '2025',
    status: 'In Progress',
    links: { github: '#' },
  },
  {
    id: 'project-3',
    title: 'Real-Time Chat App',
    description: 'WebSocket-powered messaging platform with encryption, media sharing, typing indicators, and online presence. Scales to thousands of concurrent users.',
    tags: ['JavaScript', 'Socket.io', 'Express', 'Redis'],
    category: 'Backend',
    year: '2024',
    status: 'Live',
    links: { github: '#', live: 'https://chatappanz.vercel.app/' },
  },
  {
    id: 'project-4',
    title: 'Portfolio Dashboard',
    description: 'A dynamic analytics dashboard for tracking project metrics, GitHub contributions, and skill progression. Features data visualization and dark mode.',
    tags: ['React', 'D3.js', 'API', 'CSS'],
    category: 'Frontend',
    year: '2024',
    status: 'Live',
    links: { github: '#', live: '#' },
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header" data-aos="fade-up">
          <span className="section-index">03</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects__grid" data-aos="fade-up" data-aos-delay="100">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className={`projects__card ${hoveredProject === project.id ? 'projects__card--hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              id={project.id}
            >
              {/* Top bar */}
              <div className="projects__card-topbar">
                <div className="projects__card-meta">
                  <span className="projects__card-year">{project.year}</span>
                  <span className="projects__card-separator">·</span>
                  <span className="projects__card-category">{project.category}</span>
                </div>
                <span className={`projects__card-status ${project.status === 'Live' ? 'projects__card-status--live' : 'projects__card-status--progress'}`}>
                  <span className="projects__card-status-dot" />
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">{project.description}</p>

              {/* Tags */}
              <div className="projects__card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects__card-tag">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="projects__card-links">
                {project.links.github && (
                  <a href={project.links.github} className="projects__card-link" id={`${project.id}-github`} aria-label="GitHub repository">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    <span>Code</span>
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="projects__card-link" id={`${project.id}-live`} aria-label="Live demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                    <span>Live</span>
                  </a>
                )}
              </div>

              {/* Decorative number */}
              <span className="projects__card-number">{String(index + 1).padStart(2, '0')}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
