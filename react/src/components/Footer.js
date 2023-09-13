import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <br></br><br></br>
      <div className='footer-link-wrapper' >
        <div class='footer-link-items' align='left'>
          <h2>Address </h2>
          <p>Shop no 11,College road,Pune,412207 </p>
        </div>
        <div class='footer-link-items' align='marginRight'>
          <br />
          <p>Made with <span>&#128171;</span> Shashank  Ravikant</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
