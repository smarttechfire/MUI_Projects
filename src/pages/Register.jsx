
import { Avatar, Box, Container,  FormControlLabel, Grid, Stack, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'
import { CheckBox, LockClockOutlined } from '@mui/icons-material';
import bg from '../assets/bgg.gif'
import {  Link, useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';


const darkTheme = createTheme({
  palette:
  {
    mode:"dark",
  }
});

const boxtstyle = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  background: "#E6F0FF",
  boxShadow: 24,
};
const center = {
  position:"relative",
  top:"50%",
  left:"37%",
};
export default function Register() {
  const navigate = useNavigate();
  
  return (
    <div style={{height:"84vh"}}>
        <Box sx={boxtstyle}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                marginRight: "15px",
                height:"70vh",
                color: "#f5f5f5",
              }}
            >
              {/* <LottieAnim /> */}
            </Box>

          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            
            <Box style={{
              background:"cover",
              height:"70vh",
              minHeight: "500px",
              backgroundColor:"#0F1B4C"
            }}>

              <ThemeProvider theme={darkTheme}>
                <Container>
                  <Box height={35} />
                  <Box alignContent={center}>
                    <Avatar sx={{ml: "35px", mb:"4px",bgcolor:"#ffffff", color:"#000"}}>
                      <LockClockOutlined />
                    </Avatar>
                    <Typography component="h1" variant='h4' style={{color:"#fff"}}>
                      Register
                    </Typography>
                  </Box>
                  <Box height={35} />
                  <Grid container >
                    <Grid item xs={12} sx={{ml:"3rem",mr:"3rem"}}>
                      <TextField 
                        required
                        id='email'
                        fullWidth
                        label='Username'
                        name='email'
                        autoComplete='email'
                        type='email'
                        size="medium"
                      />
                      <br />
                      <Box height={12} />
                      <TextField 
                        required
                        id='password'
                        fullWidth
                        label='Password'
                        name='password'
                        autoComplete='new-password'
                        type='password'
                        size="medium"
                      />
                    </Grid>
                    <Grid item xs={12} alignContent={center} style={{marginTop:"30px"}}>
                      
                        <CustomButton 
                          backgroundColor="#fff"
                          color="#0F1B4C"
                          buttonText="Register"
                          onClick={() => {
                            navigate("/register")
                          }} 
                        />
                      
                      
                    </Grid>
                    <Stack direction="row" sx={{ml:"8rem",color:"#fff"}}>
                          <Typography
                            variant='body1'
                            component="span"
                            style={{marginTop:"10px"}}
                          >
                            Already Have an Account?{" "}
                            <span
                              style={{color: "#beb4fb",cursor:"pointer"}}
                              onClick={() => {
                                navigate("/login")
                              }}
                            >
                              Click Here
                            </span>
                          </Typography>
                      </Stack>
                  </Grid>
                </Container>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
        </Box>
    </div>
  )
}
