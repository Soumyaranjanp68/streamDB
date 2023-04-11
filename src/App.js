// import logo from './Components/Img.png';
// import React,{useEffect,useState} from 'react';
import './App.css';
// import Navbar from './Components/Navbar.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Home from './Components/Home.js';
import Register from './Register.jsx';
import Login from "./Login";
import Nav from "./Navbar"

function App() {
  //  const [Movies, setMovies] = require([])

  //  useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("http://localhost:3001/movies")
  //     const jsonResult = await result.json();
  //     setMovies(jsonResult);
  //   }
  //   fetchData();
  // }, []);

  return (
  <BrowserRouter>
    <div className="App">
      < Nav/>
      <Routes>
        {/* <h2>MOVIES</h2>  */}
        {/* <Route path ="/" element={<Home/>}></Route>
         <Route path ="/movies" element={<Movies/>}></Route> */}
        <Route path ="/register" element={<Register/>}></Route>
        <Route path ="/login" element={<Login/>}></Route>
        {/* <Route path ="/profile" element={<profile/>}></Route> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;