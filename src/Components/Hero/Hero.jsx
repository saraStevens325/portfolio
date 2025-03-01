import './Hero.css'
import React from 'react'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Sara Stevens,</span> Software Engineer based in San Francisco</h1>
        <p></p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect</AnchorLink></div>
            <div className="hero-resume"><a class="linkedin-link" href="https://www.linkedin.com/in/-sara-stevens/">Linkedin</a></div>
        </div>
      
    </div>
  )
}

export default Hero

