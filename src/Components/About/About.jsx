import React from 'react'
import './About.css'
//import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'


const About = () => {
    return (
<div className="about">
    <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>C# .NET</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>ReactJS</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>Java</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill">
                    <p>DevOps</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>4+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>LOREM</h1>
            <p>LOREM IPSUM</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>LOREM</h1>
            <p>LOREM IPSUM</p>
        </div>
        <hr />
    </div>
</div>
    )
  }
  
  export default About
