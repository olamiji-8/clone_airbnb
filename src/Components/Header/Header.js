import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='Header'>
      <img src='./assest/images/Airbnb_logo.png' alt='' className='Header-icon'/>
      <div className='Header-search'>
        <input type="Search"/>
        <SearchIcon/>
      </div>
      <div className='Header-right'>
        <p>Become a Host</p>
      </div>
    </div>
  )
}

export default Header