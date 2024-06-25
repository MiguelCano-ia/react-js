import React from "react";
import appleLogo from '../images/apple-logo.jpeg';

const Logo = () => (
  <div className='apple-logo-container'>
    <img
      src={appleLogo}
      className='apple-logo'
      alt='Apple'
    />
  </div>
);

export default Logo;