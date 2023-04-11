import React, { useState } from 'react';
import cors from 'cors';
import { Link , useNavigate } from "react-router-dom";
// import axios from "axios"

    const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        PostData()
        // console.log(name,phone,email, password);
    };

    const PostData = async () => {
        // preventDefault();
        // console.log(name,phone,email, password);
        const response = await fetch("http://localhost:3001/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        console.log(data);
        console.log(response);
        if(response.status === 200) {
            window.alert("Success")
        }
        if(response.status === 201) {
            window.alert("Successfully created")
        }
        if(response.status === 404){
            window.alert("Data not found")
        }
        if(response.status === 400){
            window.alert("Invalid request")
        }
        console.log(data);
    }


    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor = "name" >Full name</label>
          <input value = {name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="Enter your name here" />
          <label htmlFor = "phone" >Phone number</label>
          <input value = {phone} onChange={(e) => setPhone(e.target.value)} type="phone" id="phone" placeholder="Enter your Mobile number here" />
          <label htmlFor = "email">email</label>
          <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="xyz123@gmail.com" />
          <label htmlFor = "password">password</label>
          <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Xyz1@123" />
          <button value = "register" type="submit" > Sign up</button>
        </form>
         <div className="link-btn"><Link to = "/Login"><span style={{color:"white"}}>Already have an account? Login here</span></Link></div> 
        {/* <button className="link-btn" onClick={() => props.onFormSwitch("/Login")}>Already have an account? Login here</button> */}
        </div>
    )
}

export default Register;