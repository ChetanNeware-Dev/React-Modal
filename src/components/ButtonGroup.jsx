// components/ButtonGroup.jsx
import React from 'react';
import Button from './Button';
const ButtonGroup = ({ buttons }) => (
  <div className="button-group">
    {buttons.map((btn, index) => (
      <Button key={index} label={btn.label} onClick={btn.onClick} 
      // className={`${btn.label.toLowerCase()}`}
      />
    ))}
  </div>
);

export default ButtonGroup;
