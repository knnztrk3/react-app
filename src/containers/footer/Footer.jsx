import React from 'react';
import keoLogo from '../../assets/logo.svg';
import './footer.css';

function Footer() {
  return (
<div className="keo__footer section__padding">
    <div className="keo__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="keo__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="keo__footer-links">
      <div className="keo__footer-links_logo">
        <img src={keoLogo} alt="keo_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="keo__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="keo__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="keo__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="keo__footer-copyright">
      <p>@2021 <a href="#">developedby Keo</a>. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer