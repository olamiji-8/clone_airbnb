import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Airbnb from '../assets/Airbnb_logo.png'



const Header = ({setkey}) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
    <div className='Header'>
    <Navbar.Brand href="#home"><img src={Airbnb} alt='' className='Header-icon'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
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