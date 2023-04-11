import React from 'react';
import Logo from "./image/logo.jpg";
import './App.css';
import {Link} from "react-router-dom"

function Nav(){
    return (
        <div className="nav">
         {/* <Link to="/"></Link>    */}
        {/* <img 
        className='nav-logo' src={Logo} alt="streamDB Logo" ></img> 
        <Link to="/Register"></Link> 
        {/* <ul className ="nav-menu"> */}
        {/* {isLoggedIn ?
          <li className="logOut" onClick={handleLogout}>Log out</li> : */}
          <li>
            <Link className= "signUpButton" to ="/register">
              SignUp
            </Link>
            <Link className= "loginButton" to ="/login">
              Log In
            </Link>
          </li>
        
      {/* </ul> */}
        </div>
    )
}

export default Nav;