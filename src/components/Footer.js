import React from 'react';
import { Link } from 'react-router-dom';
import ttmLogo from '../assets/ttm.png';


export default function Footer({ mode }) {
  const footerBg = mode === 'dark' ? '#212529' : '#f8f9fa';
  const textColor = mode === 'dark' ? '#f8f9fa' : '#212529';
  const linkHoverColor = mode === 'dark' ? '#adb5bd' : '#495057';
  const borderColor = mode === 'dark' ? '#495057' : '#dee2e6';

  const linkStyle = {
    color: textColor,
    textDecoration: 'none',
    transition: 'border-color 0.15s ease-in-out',
  };

  return (
    <footer style={{
      backgroundColor: footerBg,
      color: textColor,
      borderTop: `1px solid ${borderColor}`,
      marginTop: '2rem',
    }}>
      <div className="container py-3">

        {/* First Row with 3 Boxes */}
        <div className="row text-center">

          {/* Box 1: Text Tool Master and tagline */}
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center">
              {/* Logo added here */}
              <img
                src={ttmLogo}
                alt="TTM Logo"
                style={{
                  height: 'auto',
                  width: '25px',
                  marginRight: '10px'
                }}
              />

            <h5 className="mb-0">Text Tool Master</h5>
            </div>
            <p className="mb-0">The Ultimate Text Toolkit - Convert, Analyze, Edit & Command with Voice</p>
          </div>

          {/* Box 2: Quick Links */}
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverColor} onMouseOut={e => e.target.style.color = textColor}>Home</Link></li>
              <li><Link to="/control" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverColor} onMouseOut={e => e.target.style.color = textColor}>Voice Controls</Link></li>
              <li><Link to="/shortcuts" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverColor} onMouseOut={e => e.target.style.color = textColor}>Shortcuts</Link></li>
              <li><Link to="/about" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverColor} onMouseOut={e => e.target.style.color = textColor}>About</Link></li>
            </ul>
          </div>

          {/* Box 3: Connect with Us */}
          <div className="col-md-4">
            <h6>Connect with Us</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="https://github.com/abhisheksinhagithub" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverColor} onMouseOut={e => e.target.style.color = textColor}>
                  <i className="ri-github-fill me-2"></i> GitHub
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/abhishek-kumar-sinha-b0a44a242/" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverColor} onMouseOut={e => e.target.style.color = textColor}>
                  <i className="ri-linkedin-fill me-2"></i> LinkedIn
                </Link>
              </li>
              <li>
                <Link to="mailto:sinha000abhi99@gmail.com" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverColor} onMouseOut={e => e.target.style.color = textColor}>
                  <i className="ri-mail-fill me-2"></i> Email Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Second Row: Copyright */}
        <hr style={{ borderColor: borderColor }} />
        <div className="text-center">
          <small><i className="ri-copyright-line"></i> {new Date().getFullYear()} Text Tool Master. All rights reserved.</small>
        </div>

      </div>
    </footer>
  );
}
