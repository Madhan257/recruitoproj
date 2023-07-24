import React,{useState} from 'react'
import './Adminprofile.css';
import './user';
import './viewapp';
import './removeapp';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Dashboard() {
    const [formData, setFormData] = useState({
		jobid: '',
		firstname: '',
		lastname: '',
		citizenship: '',
		dob: '',
		address: '',
		zip: '',
		city: '',
		phone: '',
		email: '',
	  });
	
	  const handleChange = (event) => {
		const { name, value, type } = event.target;
		const newValue = type === 'file' ? event.target.files[0] : value;
		setFormData((prevData) => ({ ...prevData, [name]: newValue }));
	  };
	
	  const handleSaveChanges = async(e) => {
		e.preventDefault();
		
		await axios
		  .put('http://127.0.0.1:8080/put', formData) // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual backend API endpoint
		  .then((response) => {
			// Handle the response here if needed
			console.log(response.data);
			alert("update successful");
		  })
		  .catch((error) => {
			// Handle errors here if needed
			console.error('Error submitting form:', error);
		  });
	  };
  return (
    <div>
        <header>
            <div class="logosec">
            <Link to="/Login"><img src="https://cdn-icons-png.flaticon.com/128/93/93634.png"className='bellp'></img></Link>
                <div class="logo">Recruito</div>
            </div>
            
        </header>
        <div class="main-container">
            <div class="navcontainer">
                <nav class="nav">
                    <div class="nav-upper-options">
                        
                        <div class="nav-option option5">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"class="nav-img"alt="blog"></img>
                            <h3>Dashboard</h3>
                        </div>
                        <div class="nav-option option2">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"class="nav-img"alt="articles"></img>
                            <Link to="/viewapp"><h3 className='findhh'> View Application</h3></Link>
                        </div>
                        <div class="nav-option option4">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"class="nav-img"alt="institution"></img>
                            <Link to="/removeapp"><h3 className='findhh'>remove Application</h3></Link>
                        </div>
                       
                        <div class="nav-option logout">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"class="nav-img"alt="logout"></img>
                           <Link to="/"> <h3>LOGOUT</h3></Link>
                        </div>
                    </div>
                </nav>
            </div>
          
                </div>
            </div>
           
)
}
export default Dashboard