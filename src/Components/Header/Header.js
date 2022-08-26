import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



const Header = ({setkey}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
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
    </Container>
    </Navbar>
  )
}

export default Header