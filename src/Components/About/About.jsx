import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Sara</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Sara is a skilled and innovative software engineer with a passion for building scalable, user-centric solutions. Whith expertise in Python, Java, JavaScript, React, SQL, and Amazon Web Services, Sara has a proven track record of designing and implementing robust systems that solve complex problems. Her experience spans 15 years of customer service, and 3 years of web development using programming languages. Whether it's diving into new projects or tweaking design elements of previous ones, Sara loves learning new tools and building new things. </p>
                    
                </div>
                <div className="about-skills">
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:'50%'}}></hr></div>
                    <div className='about-skill'><p>React JS</p><hr style={{width:'70%'}}></hr></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:'60%'}}></hr></div>
                    <div className='about-skill'><p>Next JS</p><hr style={{width:'50%'}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF PROGRAMMING EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>YEARS OF CUSTOMER SERVICE</p>
            </div>
        </div>
    </div>
    
  )
}

export default About
