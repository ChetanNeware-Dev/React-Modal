// components/Footer.jsx
import React from 'react';
import ButtonGroup from './ButtonGroup';
import '../style/footer.css'
const Footer = ({ buttons, description }) => (
  <div className="footer">
      {description && <p className="footer-description">{description}</p>}
      {buttons && <ButtonGroup buttons={buttons} />}
  </div>
);

export default Footer;
