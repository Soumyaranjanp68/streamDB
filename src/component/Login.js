import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
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

export default function SignIn() {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const LoginFunction= async function(){
        await axios.post("https://stream-db.onrender.com/login",{
        email,
        password,
    })
    .then((res)=>{
      console.log(res.data.data.token);
    localStorage.setItem("token",(res.data.data.token))
    window.alert("Login Successfully")
    Navigate("/")
    })
  .catch((err)=>{
    console.log(err);
    window.alert(err.response.data.message)
  })
  }  
    
  const handleSubmit = (event) => {
    event.preventDefault();
    LoginFunction();
  };

  return (
    <div className='main'>

    <ThemeProvider theme={theme}>
      <Container className='cont' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom:1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value = { email}
              onChange={(e)=>{setEmail(e.target.value)}}
              name="email"
              autoComplete="email"
              autoFocus
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value = { password}
              onChange={(e)=>{setPassword(e.target.value)}}
              autoComplete="current-password"
              />            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              value="login"
              onClick={LoginFunction}
              sx={{ mt: 3, mb: 2 }}
              >
              Log In
            </Button>
             <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
</div>
  );
}
