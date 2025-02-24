import './Hero.css'
import React from 'react'
import profile_img from '../../assets/profile_img.svg'



const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Sara Stevens,</span> backend engineer based in San Francisco</h1>
        <p>Description</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero

