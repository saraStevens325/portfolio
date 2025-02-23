import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt='theme_pattern' /> 
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to reach out to me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt='mail_icon' />
                        <p>sara@sarastevens.net</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt='call_icon' />
                        <p>+469-509-0033</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt='location_icon' />
                        <p>San Francisco, CA</p> 
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label for="name">Sara</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />
                <label for="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
                <label for="message">Your Message</label>
                <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type="submit" className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact