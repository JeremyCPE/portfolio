import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'


const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt="profile" />
    <h1><span>Hello I'm Jeremy !</span>, consectetur adipiscing elit</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
    <div className="hero-action">
        <div className="hero-connect">
            Connect with me
        </div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero