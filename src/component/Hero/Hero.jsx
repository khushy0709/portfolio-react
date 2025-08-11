import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
     <img src={profile_img} alt="" />
     <h1><span>I am Khushbu,</span> frontend developer based in INDIA.</h1>
     <p>With a passion for creating beautiful and functional web applications, I specialize in building responsive and user-friendly interfaces.</p>
     <div className="hero-action">
        <div className="hero-connect">Connect with me </div>
        <div className="hero-resume">My resume</div>
     </div>
    </div>
  )
}

export default Hero
