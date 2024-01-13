import React from 'react';


const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#78c2ad',  
  textAlign: 'center',
  padding: '10px',
  color: 'white',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      Copyright &copy; TOONIVERSE
    </footer>
  );
}

export default Footer;
