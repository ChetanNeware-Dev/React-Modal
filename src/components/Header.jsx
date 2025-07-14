// components/Header.jsx
import React from 'react';
import IconAndText from './IconAndText';
import ButtonGroup from './ButtonGroup';
import '../style/header.css';
const Header = ({ icon, title, buttons }) => (
  <div className="header">
    <h2 className='header-title'>Modal</h2>
    <div className='header-content'>
      <IconAndText icon={icon} title={title} />
      {buttons && <ButtonGroup buttons={buttons} />}
    </div>
  </div>
);

export default Header;
