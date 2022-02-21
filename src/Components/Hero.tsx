import React from 'react'
import '../scss/Hero.scss';

export const Hero = () => {
  return (
    <header className='rd-header'>
      <div className='rd-container'>
        <div className='rd-header--grid'>
          <div className='rd-header--text'>
            <h1>
              The Best Payment Expierence
            </h1>
            <div className='rd-header--flex'>
              <a href="/" className='rd-btn'>
                <span>
                  Get started
                </span>
                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
              <p>
                Join the fastest and cheapest transaction ever for everyone.
              </p>
            </div>
          </div>
          <div className='rd-header--image'>
            IMG
          </div>
        </div>
      </div>
    </header>
  )
}
