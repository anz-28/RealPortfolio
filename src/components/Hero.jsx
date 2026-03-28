import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.04)';
      ctx.lineWidth = 0.5;
      const gridSize = 60;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Decorative corner markers */}
      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />

      <div className="hero__content">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          <span className="hero__tag-text">Available for work</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">
            <span className="hero__title-greeting">Hi, I'm</span>
          </span>
          <span className="hero__title-line hero__title-line--2">
            <span className="hero__title-name">Anz</span>
            <span className="hero__title-cursor">_</span>
          </span>
        </h1>

        <p className="hero__subtitle">
          Full-Stack Developer crafting clean, efficient &amp; scalable digital experiences.
        </p>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-label">Stack</span>
            <span className="hero__meta-value">JS · Python · React</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <span className="hero__meta-label">Focus</span>
            <span className="hero__meta-value">Frontend & Backend</span>
          </div>
        </div>

        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            id="hero-view-projects"
          >
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <button
            className="hero__btn hero__btn--secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            id="hero-contact"
          >
            <span>Get in Touch</span>
          </button>
        </div>
      </div>

      <div className="hero__scroll-indicator" id="hero-scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
