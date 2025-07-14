// components/DialogWindow.jsx
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../style/dialog-window.css'; // Basic centering

const DialogWindow = ({ headerProps, content, footerProps }) => (
  <div className="dialog-overlay">
    <div className="dialog-window">
      <Header {...headerProps} />
      <Content>{content}</Content>
      <Footer {...footerProps} />
    </div>
  </div>
);

export default DialogWindow;
