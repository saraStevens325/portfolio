import React from 'react'
import './Footer.css'
import logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={logo} alt="" />
                <p>I am a full stack software engineer with 3 years of experience.</p>
            </div>
        </div>
        {/* <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Your email address'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div> */}
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 All rights reserved</p>
            <div className='footer-bottom-right'>
                <p>Privacy policy</p>
                <p>Terms of service</p>
                <p>Connect with me</p>
        </div>
    </div> 
    </div>

    
  )
}

export default Footer