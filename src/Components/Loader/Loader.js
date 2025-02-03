// src/Components/Loader/Loader.js
import React from 'react';
import './Loader.css';  // Optional, for styling
import LG from '../../Images/Logo 4.png'

const Loader = () => {
  return (
    <div className="loader-container">
      <h2><img src={LG} alt="" className='img-fluid' /></h2>
    </div>
  );
};

export default Loader;
