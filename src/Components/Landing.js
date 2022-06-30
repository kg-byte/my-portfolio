import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si"
import '../SassStyles/Landing.scss'
import profile from '../Assets/profile.jpeg'

const Landing = () => {
  return (
    <>
      <div className="title-pic-container">
          <img src={profile} alt="profile picture of website author" />
          <div className="link-container">
            <a href="https://www.linkedin.com/in/xiaole-guo-5331b4158/"><SiLinkedin className="icon"/></a>
            <a href="https://github.com/kg-byte"><SiGithub className="icon"/></a>
          </div>
      </div>
      <div className="info-container">
          <h2>Hello and welcome!</h2>
          <p>I am Xiaole Guo, an avid beginner golfer, an anime lover, and a proud Chiweenie owner.</p>
          <p>Coming from a dynamic industry like chemical engineering, I thrive in energetic and fast-paced environments.</p>
          <p>Problem-solving is my passion and what motivated me to become a software developer. I believe in fairness, honesty, and taking the initiative to get work done.</p>
          <p>As a software engineer, I strive to write clean, and organized code that is well-tested, to maintain a focused work flow, and to foster meaningful work relationships.</p>
          <p>If you'd like to be in touch, then please email me! guoxiaole@mines.edu </p>
      </div>
    </>

  )
}

export default Landing