import React from 'react'
import classes from '../scss/Navbar.module.scss';
import logo from '../logo.svg';

export const Navbar = () => {
  return (
    <nav className={classes.rdNav}>
        <div className={classes.rdContainer}>
            <a className={classes.rdNavLogo} href="/">
                <img src={logo} alt="LOGO" />
            </a>
            <div className={classes.rdNavList}>
                <a href="" className={classes.rdNavItem}>
                    <span>
                        How it works? 🤔
                    </span>
                </a>
                <a href="" className={classes.rdNavItem}>
                    <span>
                        Features
                    </span>
                    <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </a>
                <a href="" className={classes.rdNavItem}>
                    <span>
                        Princing
                    </span>
                </a>
                <a href="" className={classes.rdNavItem}>
                    <span>
                        Contact
                    </span>
                </a>
            </div>
        </div>
    </nav>
  )
}
