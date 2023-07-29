import { Avatar, Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import LottieAnim from './LottieAnim';
import { LockClockOutlined } from '@mui/icons-material';
import bg from '../assets/bgg.gif'

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
export default function Login() {
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
              <Container>
                <Box height={35} />
                <Box sx={center}>
                  <Avatar sx={{ml: "35px", mb:"4px",bgcolor:"#ffffff", color:"#000"}}>
                    <LockClockOutlined />
                  </Avatar>
                  <Typography component="h1" variant='h4' style={{color:"#fff"}}>
                    Sign In
                  </Typography>
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={12} sx={{ml:"3rem",mr:"3rem"}}>
                    <TextField 
                      required
                      fullWidth
                      id='email'
                      label='Username'
                      name='email'
                      autoComplete='email'
                    />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Grid>
        </Grid>
        </Box>
    </div>
  )
}
