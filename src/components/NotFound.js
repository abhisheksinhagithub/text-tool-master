import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound({ mode }) {
  // Style variables based on mode
  const bgColor = mode === 'dark' ? '#212529' : '#f8f9fa';
  const textColor = mode === 'dark' ? 'white' : 'black';
  const cardBg = mode === 'dark' ? 'rgb(20, 20, 20)' : 'white';
  const borderColor = mode === 'dark' ? '#444' : '#ddd';
  const btnBg = mode === 'dark' ? 'seagreen' : '#0d6efd';

  return (
    <div 
      className="container d-flex align-items-center justify-content-center mt-3 rounded"
      style={{ 
        minHeight: '70vh',
        backgroundColor: bgColor,
        color: textColor,
        transition: 'border-color 0.15s ease-in-out',
      }}
    >
      <div 
        className="card p-4 text-center"
        style={{
          backgroundColor: cardBg,
          border: `1px solid ${borderColor}`,
          maxWidth: '600px',
          width: '100%',
          transition: 'border-color 0.15s ease-in-out',
        }}
      >
        <div className="card-body">
          <h1 className="display-1 fw-bold mb-4" style={{ color: '#dc3545' }}>404</h1>
          <h2 className="h3 mb-3" style={{ color: textColor }}>
            <span style={{ color: '#dc3545' }}>Oops!</span> Page not found
          </h2>
          <p className="lead mb-4" style={{ color: textColor }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="btn btn-md"
            style={{
              backgroundColor: btnBg,
              color: 'white',
              border: 'none',
              transition: 'border-color 0.15s ease-in-out',

            }}
          >
            <i className="ri-home-4-line me-2"></i> Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}