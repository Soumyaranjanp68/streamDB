import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios"
import { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignUp() { 
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
   
    const RegisterFunction= async function(){
        await axios.post("http://localhost:3001/register",{
        email,
        password,
        name,
        phone
    })
    .then((res)=>{
     Navigate("/login")
     window.alert("Register Successfully")
    })
  .catch((err)=>{
    console.log(err);
    window.alert(err.response.data.message)
  })
  }
    
  const handleSubmit = (event) => {
    event.preventDefault();
    RegisterFunction();
  };

  return (
    <div className="main">

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value = {name}
                  onChange={(e)=>{setName(e.target.value)}}
                  autoFocus
                  />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  value = {phone}
                  onChange={(e)=>{setPhone(e.target.value)}}
                  autoComplete="family-name"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value = {email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value = {password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  autoComplete="new-password"
                />
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              value="Register"
              onClick={RegisterFunction}
              sx={{ mt: 3, mb: 2 }}
              >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link  href="/login" variant="body2">
                  Already have an account? Sign in
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