import { useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    level: 90,
    icon: 'JS',
    description: 'ES6+, async/await, closures, DOM manipulation, and modern JavaScript patterns.',
    tags: ['ES6+', 'TypeScript', 'Node.js'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Language',
    level: 85,
    icon: 'PY',
    description: 'Scripting, automation, data processing, and backend API development.',
    tags: ['Flask', 'Django', 'Automation'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    category: 'Domain',
    level: 92,
    icon: 'FE',
    description: 'Building responsive, accessible interfaces with modern frameworks and CSS.',
    tags: ['React', 'CSS3', 'Responsive'],
  },
  {
    id: 'backend',
    name: 'Backend',
    category: 'Domain',
    level: 80,
    icon: 'BE',
    description: 'Server architecture, RESTful APIs, databases, and cloud deployment.',
    tags: ['APIs', 'Databases', 'Cloud'],
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__header" data-aos="fade-up">
          <span className="section-index">02</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>

        <div className="skills__grid" data-aos="fade-up" data-aos-delay="100">
          {skillsData.map((skill, index) => (
            <div
              key={skill.id}
              className={`skills__card ${activeSkill === skill.id ? 'skills__card--active' : ''}`}
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
              id={`skill-${skill.id}`}
            >
              <div className="skills__card-top">
                <div className="skills__card-icon">
                  <span>{skill.icon}</span>
                </div>
                <div className="skills__card-meta">
                  <span className="skills__card-category">{skill.category}</span>
                  <span className="skills__card-level-text">{skill.level}%</span>
                </div>
              </div>

              <h3 className="skills__card-name">{skill.name}</h3>
              <p className="skills__card-description">{skill.description}</p>

              <div className="skills__card-progress">
                <div
                  className="skills__card-progress-bar"
                  style={{ width: activeSkill === skill.id ? `${skill.level}%` : '0%' }}
                />
              </div>

              <div className="skills__card-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skills__card-tag">{tag}</span>
                ))}
              </div>

              <div className="skills__card-corner skills__card-corner--tl" />
              <div className="skills__card-corner skills__card-corner--br" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
