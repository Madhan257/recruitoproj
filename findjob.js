import React from 'react'
import './findjob.css';
import './applynow';
import './profile';
import './Login';
import './user';
import './details';
import {Link} from 'react-router-dom';
function dashboard() {
  return (
    <div>
	<header>

		<div class="logosec">
			<div class="logo">Recruito</div>
			
		</div>

	
	</header>

	<div class="main-container">
		<div class="navcontainer">
			<nav class="nav">
				<div class="nav-upper-options">
					
					<div class="nav-option option15">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
							class="nav-img"
							alt="blog"></img>
						<Link to="/profile"><h3 className='acc'>ACCOUNT</h3></Link>
					</div>
					<div class=" nav-option option16">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
							class="nav-img"
							alt="articles"></img>
						<h3> FINDJOB</h3>
					</div>
					<div class="nav-option option4">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
							class="nav-img"
							alt="institution"></img>
						<Link to="/applied"><h3> APPLIED</h3></Link>
					</div>

					
					<div class="nav-option logout">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
							class="nav-img"
							alt="logout"></img>
						<Link to='/'><h3>LOGOUT</h3></Link>
					</div>

				</div>
			</nav>
		</div>
		<div class="main">
           
			<div class="box-container">
            <div class="report-container">
    
                    <div class="report-body">
                    <div class="box-container">
                    <div class="box box1">
                        <div class="text">
                        
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h6 class="topic-heading">Amazon</h6>
                            <h2 class="topic">Senior UI/UX designer</h2>
                            <br></br>
                            <br></br>
                       <Link to="/details"><button class="button-34" role="button">Details</button></Link> 
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="box box2">
                        <div class="text">
                     
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/300/300221.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h2 class="topic-heading">Google</h2>
                            <h2 class="topic">Senior Motion Designer</h2><br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="box box3">
                        <div class="text">
                       
                        <br></br>
                        <img src="https://th.bing.com/th/id/R.e6e35c0d51cae7391980f3195176cce4?rik=Bdckn2SwWQ2Sow&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2021%2f06%2fInfosys-Logo-1280x800.png&ehk=2mQMDQy%2baYYnsHkLGskM4hZCg5PWaqcwgOkgkJXX0UQ%3d&risl=&pid=ImgRaw&r=0"
   ></img>
                            <h2 class="topic-heading">Infosys</h2>
                            <h2 class="topic">Graphic Designer</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="box box4">
                        <div class="text">
                    
                        <br></br>
                        <img src=
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Zoho</h2>
                            <h2 class="topic">Product Manager</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                        </div>      <div class="box box4">
                        <div class="text">
                    
                       
                        <br></br>
                        <img src="https://marcas-logos.net/wp-content/uploads/2021/07/Wipro-logo-1140x641.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Wipro</h2>
                            <h2 class="topic">Product Manager</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                        </div>        <div class="box box2">
                        <div class="text">
                     
                        <br></br>
                        <img src="
https://alchetron.com/cdn/cognizant-abd0351f-e91f-4699-b588-8de15625fca-resize-750.png"                            class="icn srchicn"
                            alt="search-button"></img>
                            <h2 class="topic-heading">Cognizant</h2>
                            <h2 class="topic">Senior Motion Designer</h2><br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
                    <div class="box box1">
                        <div class="text">
                        
                        <br></br>
                        <img src=
"https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/information-technology-companies/tech-mahindra-logo.png"                            class="icn srchicn"
                            alt="search-button"></img>
                            <h6 class="topic-heading">Tech Mahindra</h6>
                            <h2 class="topic">Senior UI/UX designer</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>

                    
                </div>
</div>
</div>
</div>
            </div>
            </div></div>
           
)
}
export default dashboard