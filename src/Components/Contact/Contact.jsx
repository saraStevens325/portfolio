import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "33707c6f-3852-4ea8-9639-be4b7ec1c444");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert("Message sent successfully!");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div id='contact' className='contact'>
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
            <form onSubmit={onSubmit}className="contact-right">
                <label for="name">Your Name</label>
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