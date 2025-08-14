import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className ='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
            <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a decade of professional experience.</p>
                <p>I specialize in building responsive and user-friendly web applications using the latest technologies.</p>
        </div> 
        <div className="about-skills">
            <div className="about-skill"><p>HTML &CSS</p><hr style={{border: "1px solid #ccc"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{border: "1px solid #ccc"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{border: "1px solid #ccc"}}/></div>
            <div className="about-skill"><p>Node.JS</p><hr style={{border: "1px solid #ccc"}}/></div>
            </div>   
            </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>100+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )

}
export default About
