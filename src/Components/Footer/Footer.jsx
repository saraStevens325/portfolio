import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={footer_logo} alt="" />
                <p>I am a full stack software engineer with 3 years of experience.</p>
            </div>
        </div>
            <div className='footer-top-right'>
                <div className='footer-email-infput'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Your email address'/>
                </div>
            </div>
                <div className="footer_subscribe">Subscribe</div>
        </div>
    
    
  )
}

export default Footer