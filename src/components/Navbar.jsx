import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import steplyLogo from '../assets/without.png';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const categoryLinks = [
    'Engineering Mentors', 'Design Mentors', 'Startup Mentor',
    'AI Mentors', 'Product Managers', 'Marketing Coaches',
    'Leadership Mentors', 'Career Coaches'
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={steplyLogo} alt="Steply" className="logo-img" />
        </Link>

        <div className={`navbar-right ${mobileOpen ? 'open' : ''}`}>
          <Link to="/mentors" className="nav-link for-biz" onClick={() => setMobileOpen(false)}>
            For Businesses <span className="chevron-down">›</span>
          </Link>
          <Link to="/auth" className="btn btn-login" onClick={() => setMobileOpen(false)}>Login</Link>
          <Link to="/mentors" className="btn btn-browse" onClick={() => setMobileOpen(false)}>Browse all mentors</Link>
        </div>

        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Category Navigation Bar */}
      <div className="category-bar">
        <div className="category-bar-inner container">
          {categoryLinks.map((label, i) => (
            <Link key={i} to="/mentors" className="category-link">{label}</Link>
          ))}
          <span className="category-arrow">»</span>
        </div>
      </div>
    </nav>
  );
}
