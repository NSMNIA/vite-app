import React from 'react'
import '../scss/Hero.scss'

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
                Get started
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
