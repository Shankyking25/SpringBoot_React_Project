import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/home.mp4' autoPlay loop muted />
      <h1>Skyu Water Jar Supplier</h1>
      <p>We are always at your door step</p>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btn btn-dark'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
