import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

    const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        PostData()
        // console.log(email, password);
    };

    const PostData = async () => {
      // preventDefault();
      // console.log(name,phone,email, password);
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      // console.log(response);
      const data = await response.json()
      .then((res)=> 
      {localStorage.setItem("token",res.data.data.token)
      console.log(res.data);
     })
    
      
      if(response.status === 200) {
          window.alert("Login Successfully")
      }
      if(response.status === 400){
          window.alert("Invalid request")
      }
      // console.log(data);
  }

    return (
        <div className='auth-form-container'>
            <h2>Login</h2>
      <form className="login-form" onSubmit = {handleSubmit}>
        <lebel htmlFor = "email">email</lebel>
        <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="xyz123@gmail.com" />
        <lebel htmlFor = "password">password</lebel>
        <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Xyz1@123" />
        <button type="submit" >Log In</button>
      </form>
      <div className="link-btn"><Link to = "/register"><span style={{color:"white"}}>Don't have an account? Register here</span></Link></div>
      </div>
    )
}

export default Login;