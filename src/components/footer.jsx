// Footer.js

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
    socialLinks: {
      marginTop: '10px',
    },
    icon: {
      fontSize: '24px',
      margin: '0 10px',
      color: '#fff',
    },
  };

  return (
    <footer className="container-fluid" style={styles.footer}>
      <p>&copy; {currentYear} Tyler Colson</p>
      <div style={styles.socialLinks}>
        {/* Font Awesome Icons */}

        <a href="https://www.linkedin.com/in/colson-tyler/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" style={styles.icon}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;


