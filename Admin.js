import React from 'react'
import './Admin.css';
import './AdminLogin.js';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
    <header class="headersd">
      <img src="https://cdn-icons-png.flaticon.com/128/2179/2179306.png" class="images"></img>
    
      <nav class="nav-items">
      <Link to="/AdminLogin"><a>LOGIN</a></Link>
      </nav>
    </header>
    <main>
      <div class="intro">
        <h1>RECRUITO</h1>
        <p>Quality Recruitment At Your Service</p>
      </div>
    </main>
    <footer class="footer">
      
     
  </footer>
    </div>
  )
}

export default Home