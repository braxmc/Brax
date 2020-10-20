import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      {/* <h3 className='title'>I'm Social</h3> */}
      <div className='socials'>
        <a href="https://www.instagram.com/brax_mc/" target="_blank" rel="noopener noreferrer">
          <img className='social' src='/images/instagram-icon.png' alt="instagram icon" />
        </a>
        <a href='https://www.linkedin.com/in/braxton-mcclellan-a886a21b3/' target='_blank' rel="noopener noreferrer">
          <img className='social' src='/images/linkedin-icon.png' alt="linkedin icon" />
        </a>
        <a href='https://github.com/braxmc' target='_blank' rel="noopener noreferrer">
          <img className='social' src='/images/github-icon.png' alt="github icon" />
        </a>
      </div>
      <div className='f-choice'>
        <Link className='nav' to='/'>Home</Link>
        <Link className='nav' to='/portfolio'>Portfolio</Link>
        <Link className='nav' to='/about'>About</Link>
        <Link className='nav' to='/resume'>Resume</Link>
        {/* <Link className='nav' to='/contact'>Contact</Link> */}
      </div>
    </div>
  )
  }


export default withRouter(Footer);