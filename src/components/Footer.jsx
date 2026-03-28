import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__brand-bracket">[</span>
            <span className="footer__brand-name">Anz</span>
            <span className="footer__brand-bracket">]</span>
          </div>
          <p className="footer__tagline">Building the future, one line at a time.</p>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            <span className="footer__copyright-symbol">©</span> {currentYear} Anz. All rights reserved.
          </p>
          <p className="footer__note">
            Designed & built with <span className="footer__heart">♥</span> and a lot of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
