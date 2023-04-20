import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import  { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';






const theme = createTheme();

export default function Movies() {
    const Navigate = useNavigate();
    const [title,setTitle] = useState("");
    const [genres,setGenres] = useState("");
    const [rating,setRating] = useState("");
    const [description,setDescription] = useState("");
    const [source,setSource] = useState("");

    const token = localStorage.getItem("token");
    const movieFunction= async function(){

        await axios.post('https://stream-db.onrender.com/movies', {title,
        genres,
        rating,
        description,
        source},
        {headers:{"x-api-key":token}}
        ) 
    .then((res)=>{
    window.alert("Movie Created Successfully")
    setRating(res.data.data);
    // localStorage.setItem( (res.data.name))
    Navigate("/")
    })
  .catch((err)=>{
    console.log(err);
    window.alert(err.response.data.message)
  })
  }
    
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     movieFunction();
//   };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            Create a new Movie
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
             <Grid container spacing={2}> 
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="title"
                  value = {title}
                  onChange={(e)=>{setTitle(e.target.value)}}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="genres"
                  label="genres"
                  name="genres"
                  value = {genres}
                  onChange={(e)=>{setGenres(e.target.value)}}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="rating"
                  label="Rating"
                  name="rating"
                  value = {rating}
                  onChange={(e)=>{setRating(e.target.value)}}
                  autoComplete="rating"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="description"
                  type="description"
                  id="description"
                  value = {description}
                  onChange={(e)=>{setDescription(e.target.value)}}
                  autoComplete="descriptiond"
                />
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="source"
                  label="source"
                  type="source"
                  id="source"
                  value = {source}
                  onChange={(e)=>{setSource(e.target.value)}}
                  autoComplete="descriptiond"
                  sx={{ mt: 3, mb: 2 }}
                />
            </Grid>
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={movieFunction}
              sx={{ mt: 4, mb: 2 }}
            >
              Create
            </Button>
            <Grid container justifyContent="flex-end">

            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
