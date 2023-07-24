import React,{useState} from 'react'
import './applynow.css';
import './findjob';
import './submit';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import axios from 'axios';

  function Applynow() {
    const [jobid, setjobid] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [citizenship, setcitizenship] = useState('');
    const [dob, setdob] = useState('');
    const [city, setcity] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [zip, setzip] = useState('');
	const [address, setaddress] = useState('');
    const [notification, setNotification] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        jobid:jobid,
		firstname:firstname,
		lastname:lastname,
		citizenship:citizenship,
		dob:dob,
		city:city,
		email:email,
		phone:phone,
		zip:zip,
		address:address,
      };
  
      // Get the JWT token from the local storage (assuming it's saved after login)
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No JWT token found.');
        return;
      }
  
      try {
        // Replace 'http://example.com/api/concerts' with the actual endpoint URL
        const response = await axios.post('http://127.0.0.1:8080/post', formData, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token as a Bearer token
          },
        });
        alert("application submitted");
        navigate("/submit")
  
        console.log(response.data); // Handle the response as needed
        // Optionally, you can reset the form fields after successful submission:
        setjobid('');
        setfirstname('');
        setlastname('');
        setcitizenship('');
        setdob('');
        setemail('');
        setzip('');
        setaddress('');
        setphone('');
        setcity('');

      } catch (error) {
        console.error(error);
      }
    };
  
  return (
    <div>
		<header>
    
	<div class="logojsec">
<Link to="/findjob"><img src="https://cdn-icons-png.flaticon.com/128/93/93634.png"className='bello'></img></Link>
		<div class="logjo">Recurito</div>
	</div>
</header>
<div class="main-container">
      <div className="borderbox">
      <div class="mainx"> ̰
            <div class="">
<div class="row">
		<div class="col-12">
        <div class="my-5">
				<h3>Application Form</h3>
                <br>
                </br>
			</div>
			<form  id="ft-form" method="POST" accept-charset="UTF-8" onSubmit={handleSubmit}enctype="application/json">
  <fieldset>
    <legend>Job</legend>
    <label>
      Application for *
      <input type="text" onChange={(e) => setjobid(e.target.value)}name="jobid" value={jobid}  required></input>
    </label>
  </fieldset>
  <fieldset>
    <legend>Personal data</legend>
    <div class="two-cols">
      <label>
        First name *
        <input type="text" onChange={(e) => setfirstname(e.target.value)}name="firstname" value={firstname} required></input>
      </label>
      <label>
        Last name *
        <input type="text" onChange={(e) => setlastname(e.target.value)} name="lastname" value={lastname} required></input>
      </label>
    </div>
    <div class="two-cols">
      <label>
        Citizenship
        <input type="text" onChange={(e) => setcitizenship(e.target.value)} name="citizenship"  value={citizenship} ></input>
      </label>
      <label>
        DOB
        <input type="date" onChange={(e) => setdob(e.target.value)} name="dob" value={dob} ></input>
      </label>
    </div>
    <label>
      Address
      <input type="text" onChange={(e) => setaddress(e.target.value)}name="address" value={address} ></input>
    </label>
    <div class="two-cols">
      <label>
        ZIP Code
        <input type="text" onChange={(e) => setzip(e.target.value)}name="zip"value={zip} ></input>
      </label>
      <label>
        City
        <input type="text" onChange={(e) => setcity(e.target.value)}name="city"value={city} ></input>
      </label>
    </div>
    <div class="two-cols">
      <label>
        Phone *
        <input type="tel" onChange={(e) => setphone(e.target.value)}name="phone"value={phone} required></input>
      </label>
      <label>
        Email *
        <input type="email" onChange={(e) => setemail(e.target.value)}name="email"value={email}  required></input>
      </label>
    </div>
  </fieldset>
  <div class="btns">
    <button class="applo">Submit application</button>
  </div>
  </form>
</div>
        </div>
	</div>
	</div>
      </div>
    
                    </div>
                    </div>
              

           
)
}
export default Applynow