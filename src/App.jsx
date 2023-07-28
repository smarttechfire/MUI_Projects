import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ background: "#E6F0FF", minHeight: "80vh" }}>
        <Container>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element = {<Hero />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route
                path="/reset-password"
                exact
                element={<ForgotPassword />}
              />
            </Routes>
          </BrowserRouter>
        </Container>
      </Box>
    </>
  );
}

export default App;
