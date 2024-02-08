// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../images/logo.svg";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav>
//       <Link to="/" className="title">
//         <img src={logo} alt="" className="logo" />
//         <p>Threads'24</p>
//       </Link>
//       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className={menuOpen ? "open" : ""}>
//         <li>
//           <NavLink to="/events">EVENTS</NavLink>
//         </li>
//         <li>
//           <NavLink to="/workshops">WORKSHOPS</NavLink>
//         </li>
//         <li>
//           <NavLink to="/register">REGISTER</NavLink>
//         </li>
//         <li>
//           <NavLink to="/download">DOWNLOAD ID</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };


import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import  Download  from "./Download";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [downloadUser, setDownloadUser] = useState(null);
  


  const askemail = async (e) => {
    e.preventDefault();
    const email=prompt("enter");

    const details = { email};

    const response = await fetch("threads/download", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': Beared ${user.token}
      },
    });

    const json = await response.json();

    if (response.ok) {
      if(json.length>0)
      {
        setDownloadUser(json[0]);
        
      }
      else{
        alert("This email is not registered!");
        
      }   
    }  
    else{
        console.log(response);
    }

  }




  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo} alt="" className="logo" />
        <p>Threads'24</p>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/events">EVENTS</NavLink>
        </li>
        <li>
          <NavLink to="/workshops">WORKSHOPS</NavLink>
        </li>
        <li>
          <NavLink to="/register">REGISTER</NavLink>
        </li>
        <li>
          <NavLink className="c" onClick={askemail} >DOWNLOAD ID</NavLink>
        </li>
      </ul>
      
        
      {downloadUser && (
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
       
        <Download user={downloadUser} />
      </div>
    )}
    </nav>
    
  );
};