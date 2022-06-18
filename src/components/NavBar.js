import React from 'react'
import Search from './Search';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from './meal-icon.png'

function NavBar() {
  return (
    <div className='NavBar' >
      <Link className='link' to='/'>
        <img src={logo} alt='' className='logos' />
        <h2 className='Title' >Recipe App</h2>
      </Link>
        <Search className='searchs' />
    </div>
  )
}

export default NavBar;