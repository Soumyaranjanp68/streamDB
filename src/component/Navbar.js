import React from 'react';
import logo from "./Img/stb-logo.jpg"
import './Navbar.css';
import {Link} from "react-router-dom";


export default function navbar() {
  return (
    <div className='navbar'>
      
        <Link to ="/">
        </Link>
      <Link to={"/"}>
      <li className='logo'>@STREAMDB</li>
     </Link>
      <ul className ="nav-menu">
        <Link to ="/register"> 
        <li className='auth'>Register</li>
        </Link>
        <Link to ="/login">
        <li className='auth'>Log In</li>
        </Link>
         <Link to ="/Profile">
        {/* <li>Profile</li> */}
        </Link>
      </ul>
   </div>
   )
}