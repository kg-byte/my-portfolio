import React from 'react'
import '../SassStyles/Projects.scss'
import viewingParty from '../Assets/viewingParty.png'
import mmim from '../Assets/mmim.png'


const Projects = () => {
  return (
    <div className='tech-projects-container'>

      {/* Project 1 */}
      <div className='project'>
        <div className='project-img-container'>
          <img src={mmim} alt='Search Results Page'/>
        </div>
        <div className='project-details-container'>
          <h2 className='project-title'>Meet Me in the Middle</h2>
          <a href='https://mmim.herokuapp.com/'>Deployed App</a>
          <a href='https://github.com/MMIM-Turing'>Project Repos</a>
          <p>Group Project of 6</p>
          <p>Technologies: RoR |Javascript |Circle CI |Microservices Architecture |PostgreSQL |Heroku |Bootstrap |RESTful API |OAuth</p>
          <li>Developed a web application for midpoints location search that allows anonymity with a team of 6</li>
          <li>Incorporated Google Open Authorization to allow app clients to consume our backend microservice</li>
          <li>Contributed to Agile epics/stories writing, continuous integration, and continuous delivery</li>
          <li>Delivered thoughtful error handling, and unit/integration testing to ensure code maintainability</li>
        </div>
      </div>


      <div className='project'>
        <div className='project-img-container'>
          <img src={viewingParty} alt='Admin Dashboard' />
        </div>
        <div className='project-details-container'>
          <h2 className='project-title'>Viewing Party</h2>
          <a href='https://pure-earth-28237.herokuapp.com/'>Deployed App</a>
          <a href='https://github.com/kg-byte/viewing_party'>Project Repo</a>
          <p>Paired Project</p>
          <p>Technologies: Ruby on Rails |PostgreSQL |Heroku |Bootstrap |RSpec |HTML |CSS |Slack | RESTful APIs  </p>
          <li>Collected and combined movie data from five Public API endpoints</li>
          <li>Adopted facades/poros/services design pattern while adhering  to MVC flow</li>
          <li>Implemented Custom Validator to handle sophisticated errors/exceptions</li>
          <li>Implemented Authentification/Authorization/Session features</li>
        </div>
      </div>

    </div>
    )
  }

export default Projects