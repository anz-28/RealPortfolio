import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__header" data-aos="fade-up">
          <span className="section-index">01</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>

        <div className="about__grid">
          <div className="about__text" data-aos="fade-right" data-aos-delay="100">
            <p className="about__description">
              I'm a passionate full-stack developer who builds things for the web. 
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="about__description">
              With experience across both frontend and backend, I bring a holistic approach to 
              every project — from pixel-perfect interfaces to robust server architectures. 
              My code is clean, efficient, and built to scale.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Projects Built</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">4+</span>
                <span className="about__stat-label">Core Technologies</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">∞</span>
                <span className="about__stat-label">Lines of Code</span>
              </div>
            </div>
          </div>

          <div className="about__terminal" data-aos="fade-left" data-aos-delay="200">
            <div className="about__terminal-header">
              <div className="about__terminal-dots">
                <span className="about__terminal-dot about__terminal-dot--red" />
                <span className="about__terminal-dot about__terminal-dot--yellow" />
                <span className="about__terminal-dot about__terminal-dot--green" />
              </div>
              <span className="about__terminal-title">anz@portfolio ~ </span>
            </div>
            <div className="about__terminal-body">
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">$</span>
                <span className="about__terminal-cmd">cat about.json</span>
              </div>
              <pre className="about__terminal-output">{`{
  "name": "Anz",
  "role": "Full-Stack Developer",
  "languages": ["JavaScript", "Python"],
  "domains": ["Frontend", "Backend"],
  "tools": ["React", "Node.js", "Git"],
  "passion": "Building elegant solutions",
  "status": "Open to opportunities"
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
