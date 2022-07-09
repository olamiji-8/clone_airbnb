import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = ({setkey}) => {
  return (
    <div className='Header'>
      <img src='./assest/images/Airbnb_logo.png' alt='' className='Header-icon'/>
      <div className='Header-search'>
        <input type="Search"
        onChange={(e)=>setkey(e.target.value)}
        />
        <SearchIcon/>
      </div>
      <div className='Header-right'>
        <p>Become a Host</p>
        <LanguageIcon/>
        <MenuIcon/>
        <AccountCircleIcon/>

      </div>
    </div>
  )
}

export default Header