import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <h2 className='name'>Brax McClellan</h2>
      </div>
      <div className='choices'>
        <Link className='nav' to='/'>Home</Link>
        <Link className='nav' to='/portfolio'>Portfolio</Link>
        <Link className='nav' to='/about'>About</Link>
        <Link className='nav' to='/resume'>Resume</Link>
        {/* <Link className='nav' to='/contact'>Contact</Link> */}
      </div>
    </div>
  )
  }


export default withRouter(Navbar);