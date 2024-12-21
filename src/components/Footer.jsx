import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2c2c2c', color: '#ffffff', padding: '20px 0' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '10px' }}>Little Lemon</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            Bringing authentic Italian flavors to your table with love and passion.
          </p>
        </div>
        <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#menu" style={{ color: '#ffffff', textDecoration: 'none' }}>Menu</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#about" style={{ color: '#ffffff', textDecoration: 'none' }}>About Us</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#reservations" style={{ color: '#ffffff', textDecoration: 'none' }}>Reservations</a>
            </li>
          </ul>
        </div>
        <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
          <p style={{ marginBottom: '10px' }}>
            <strong>Contact:</strong> <br />
            123 Flavor Street, Foodville <br />
            (123) 456-7890
          </p>
          <div>
            <a
              href="#"
              style={{ color: '#ffffff', marginRight: '10px', textDecoration: 'none' }}
            >
              Facebook
            </a>
            <a
              href="#"
              style={{ color: '#ffffff', marginRight: '10px', textDecoration: 'none' }}
            >
              Instagram
            </a>
            <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px' }}>
        &copy; 2024 Little Lemon. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
