// components/IconAndText.jsx
import React from 'react';
import '../style/icon-text.css'
const IconAndText = ({ icon, title }) => (
  <div className="icon-and-text">
    {icon && <span className="icon">{icon}</span>}
    <span className="title">{title}</span>
  </div>
);

export default IconAndText;
