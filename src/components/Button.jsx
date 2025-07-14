// components/Button.jsx
import React from 'react';
import '../style/button.css'
const Button = ({ label, onClick }) => (
  <button className={`${label.toLowerCase()}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
