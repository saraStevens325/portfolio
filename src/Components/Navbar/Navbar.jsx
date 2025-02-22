import React from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
        {/* <img src={logo} alt="Logo not working" /> */}
        <ul className="nav-menu">
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <div className="nav-connect">Connect with me</div>
        </ul>

        
      
    </div>
  )
}

export default Navbar


// TODO:
// Change logo 
