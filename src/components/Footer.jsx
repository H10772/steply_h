import { Link } from 'react-router-dom';
import steplyLogo from '../assets/without.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
              <img src={steplyLogo} alt="Steply" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              Your trusted source to find highly-vetted mentors & industry professionals to move your career ahead.
            </p>
            <Link to="/contact" className="footer-contact-link">Contact</Link>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="X">𝕏</a>
              <a href="#" className="social-link" aria-label="LinkedIn">in</a>
              <a href="#" className="social-link" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Platform</h4>
            <Link to="/mentors">Browse Mentors</Link>
            <Link to="/booking/1">Book a Session</Link>
            <Link to="/auth?mode=register">Become a Mentor</Link>
            <Link to="/reviews">Testimonials</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <a href="#">Newsletter</a>
            <a href="#">Books</a>
            <a href="#">Perks</a>
            <a href="#">Templates</a>
            <a href="#">Career Paths</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <a href="#">Case Studies</a>
            <a href="#">Partner Program</a>
            <a href="#">Code of Conduct</a>
            <a href="#">Privacy Policy</a>
            <a href="#">DMCA</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Explore</h4>
            <a href="#">Fractional Executives</a>
            <a href="#">Services & Training</a>
            <a href="#">Part-Time Experts</a>
            <h4 className="footer-col-title" style={{ marginTop: 'var(--space-lg)' }}>Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
