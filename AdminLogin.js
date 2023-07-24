import React,{useState} from 'react'
import './Adminlogin.css';
import './Createac';
import './Adminprofile';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();



        const formData={
            email:email,
            password:password,
        };
        try{
            const response =await axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',formData)
            .then((response)=>{
                console.log(response.data);
                localStorage.setItem('token',response.data.token);
                console.log(localStorage.getItem('token'));
            })
            alert("Login successful");
            navigate("/Adminprofile");
        }
        catch(error){
            alert("Invalid email and password");
        }
    }
  return (
    <body>
    <div className="background"></div>
    <div className="container">
      <div className="login-section">
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h2>LOG IN</h2>
            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-lock-alt"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div className="remember-password">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forget Password</a>
            </div>
            <br></br>
           <button className="btn" type="submit">
              Log In
            </button>
            <button className="google">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU"
                className="googleimg"
                alt="Google"
              />
              Sign In with Google
            </button>
            <div className="create-account">
              <p>
                Don't have an Account?
                <Link to="/createac">
                  <a className="register-link"> Sign Up</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
);
}

export default Login;