import React from 'react'
import { Link } from 'react-router-dom'

function App() {

  return(
    <div>
      
      <h3>Welcome to my website! 😄</h3>
        
      <h4>This is the main page.</h4>
      <p>The following are the links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="/profile">About Me</Link>
          </li>
            
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>

          <li>
            <Link to="/faq">FAQ</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    
    </div>
  )

}

export default App


