import React from 'react'
import {Routes, Route, Link} from 'react-router-dom' 
import '../SassStyles/App.scss';
import Landing from './Landing'
import Projects from './Projects';
import About from './About';
import resume from '../Assets/resume.pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link style={{textDecoration: 'none'}} to="/"><h1>Xiaole Guo</h1></Link>
        <nav>
          <a href={resume}>Resume</a>
          <Link to="/tech-projects">Projects</Link>
          <Link to="/about-me">More About Me</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tech-projects" element={<Projects />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/*" element={<p className="error">404: What you requested does not exist 🤷🏼‍♀️</p>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;