import React from 'react';

import './styles.css';


const Loader = () => {
  return(
    <div className="div-component">
      <div class="container-load">
        <div class="triangle"></div>
        <div class="triangle"></div>
      </div>
      <div class="container-load">
        <div class="triangle shadow"></div>
        <div class="triangle shadow"></div>
      </div>
      <a 
        className="loader-animation" 
        href="https://dribbble.com/shots/5251211-Triangle" 
        target="_blank" 
        rel="noopener noreferrer"
      >
      .
      </a>
      {/*original artwork by Wenvery*/}
  </div>
  );
}

export default Loader;