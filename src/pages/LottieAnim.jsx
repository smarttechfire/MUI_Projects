import React from 'react'

import Lottie from "lottie-react";
import loginAnim from '../assets/login.json'
import { Box } from '@mui/material';

const animtstyle = {
  position: "relative",
  top: "48%",
  left: "48%",
  transform: "translate(-50%,-50%)",
  width: "60vh",
  
  boxShadow: 24,
};


export default function LottieAnim() {
  return (
    <Box sx={animtstyle}>
      <Lottie animationData={loginAnim} />
    </Box>
  )
}
