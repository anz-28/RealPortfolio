import { useState } from 'react';
import DOMPurify from 'dompurify';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  console.warn('EmailJS env vars are missing. Falling back to defaults in Contact.jsx. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY to your .env file.');
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const cleanName = DOMPurify.sanitize(formData.name, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
    const cleanMessage = DOMPurify.sanitize(formData.message, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();

    if (!cleanName || !cleanMessage) {
      setStatus('error');
      setErrorMsg('Please provide both name and message without HTML/script tags.');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    if (cleanName.length > 100) {
      setStatus('error');
      setErrorMsg('Name too long (max 100 characters).');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    if (cleanMessage.length > 1000) {
      setStatus('error');
      setErrorMsg('Message too long (max 1000 characters).');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: cleanName,
          message: cleanMessage,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setErrorMsg(err?.text || 'Something went wrong. Please try again.');

      // Reset error after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header" data-aos="fade-up">
          <span className="section-index">04</span>
          <h2 className="section-title">Get in Touch</h2>
          <div className="section-line" />
        </div>

        <div className="contact__grid">
          <div className="contact__info" data-aos="fade-right" data-aos-delay="100">
            <p className="contact__info-text">
              Have a project in mind, or just want to connect? Feel free to reach out.
              I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="contact__channels">
              <a href="mailto:anzmhry@gmail.com" className="contact__channel" id="contact-email-link" aria-label="Send email">
                <div className="contact__channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="contact__channel-text">
                  <span className="contact__channel-label">Email</span>
                  <span className="contact__channel-value">anzmhry@gmail.com</span>
                </div>
              </a>

              <a href="https://github.com/anz-28" target="_blank" rel="noopener noreferrer" className="contact__channel" id="contact-github-link" aria-label="GitHub profile">
                <div className="contact__channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div className="contact__channel-text">
                  <span className="contact__channel-label">GitHub</span>
                  <span className="contact__channel-value">github.com/anz-28</span>
                </div>
              </a>

              <div className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact__channel-text">
                  <span className="contact__channel-label">Location</span>
                  <span className="contact__channel-value">Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} id="contact-form" data-aos="fade-left" data-aos-delay="200">
            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-name">Name</label>
              <input
                className="contact__input"
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-message">Message</label>
              <textarea
                className="contact__input contact__textarea"
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className={`contact__submit ${status === 'success' ? 'contact__submit--success' : ''} ${status === 'error' ? 'contact__submit--error' : ''}`}
              id="contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' && (
                <>
                  <span className="contact__spinner" />
                  <span>Sending...</span>
                </>
              )}
              {status === 'success' && (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Message Sent!</span>
                </>
              )}
              {status === 'error' && (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <span>Failed to Send</span>
                </>
              )}
              {status === 'idle' && (
                <>
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </>
              )}
            </button>

            {status === 'error' && errorMsg && (
              <p className="contact__error-msg">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
