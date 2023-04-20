import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from "./Img/stb-logo.jpg"

const Home =()=> {
 
   const Navigate = useNavigate();
   const [url, setUrl] = useState('');
   const [htmlData, setHtmlData] = useState('');
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [source, setSource] = useState('');
   const [genres, setGenres] = useState('');

  
  const [movies , setMovies] = useState([]);

  const createMovies = async () => {
    const token = localStorage.getItem('token');
    if (token) {

        Navigate("/movies")  
    }else{
        Navigate('/login');
    }
  }




  const fetchMovies = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/moviesList?title=${title}`,)
      setMovies(response.data.data);
    //   Navigate('/');
      console.log(response.data);
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.message)
    }
  };

//   let handleSubmit = (event) => {
//     event.preventDefault();
//     fetchMovies();
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);
//while creating movie following function is used-
  const getMovies = async () => {
    try {
        const response = await axios.get('http://localhost:3001/moviesList',)
        setMovies(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    // let handleSubmited = (event) => {
    //   event.preventDefault();
    //   getMovies();
    // };
  
    useEffect(() => {
      getMovies();
    }, []);


  return (
    <div className='home'>
        <Box className='box' component="form" noValidate  sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                //   width="10%"
                  id="title"
                  label="search"
                  value = {title}
                  onChange={(e)=>{setTitle(e.target.value)}}
                  autoFocus
                  />
              </Grid>
              </Grid>
        </Box>
        <button onClick={fetchMovies}>
            Search Movie
        </button>
        <button onClick={createMovies}>
            Create Movie
        </button>
       
      <div className='AllMovies'>
        <h2>All Movies:</h2>
          {movies.map((post) => (
             <div className='sub'>
                <li classname="getmovie">
                <h2>{post.title}</h2>
                <div className='logo1'>
                {/* <img src={logo} alt="/logo" /> */}
             </div >
             <p>Title: {post.title}</p>
             <p>Description: {post.description}</p>
             <p>Genres: {post.genres}</p>
             <p>Source: {
               <>
                 <p>URL: {post.source.url}</p>
                 <p>Platform: {post.source.platform}</p>
                 <p>Price: {post.source.price}</p>
                 <p>isSubscribed: {post.source.isSubscribed}</p>
                 </>
                }</p>
                </li>
      </div>
         ))}
      </div>
    </div>
  )
};



export default Home;