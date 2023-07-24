import React from 'react'
import './Home.css';
import './Login';
import './Createac';
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link} from 'react-router-dom';
function logins() {
  return (
    <div>
      <header class="headersd">
        <img src="https://cdn-icons-png.flaticon.com/128/2179/2179306.png" class="images"></img>
      
        <nav class="nav-items">
        <Link to="/Login"><a>LOGIN</a></Link>
       <Link to="/Createac"><a>SINGUP</a></Link> 
        </nav>
      </header>
      <main>
        <div class="intror">
          <h1>RECRUITO</h1>
          <p>Quality Recruitment At Your Service</p>
        </div>
      </main>
      <footer class="footer">
        
        <div class="iconss">
      <Stack direction="row" alignItems="center" spacing={4}>
        <a href="#"><InstagramIcon fontSize="large" sx={{ color: "black" }} /></a>
        <a href="#"><FacebookIcon fontSize="large" sx={{ color: "black" }}/></a>
        <a href="#"><TwitterIcon fontSize="large" sx={{ color: "black" }}/></a>
      </Stack>
      </div>
    </footer>
      </div>
  )
}

export default logins