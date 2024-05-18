import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt="profile" />
    <h1><span>Hello I'm Jeremy !</span>, consectetur adipiscing elit</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
        </AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero