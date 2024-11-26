import React from "react";
import Navbar from "../Layout/Navbar";
import { Box } from "@mui/material";
import Hero from "../Components/Hero";
import Collabs from "../Components/Collabs";
import Support from "../Components/Support";
import Features from "../Components/Features";
import Benefits from "../Components/Benefits";
import Plan from "../Components/Plan";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(82, 189, 170, 0.3) 0%, rgba(255, 214, 214, 0.3) 50%, rgba(84, 190, 150, 0.3) 100%)",
          height: "100%",
        }}
      >
        <Navbar />
        <Hero />
        <Collabs />
      </Box>
      <Support />
      <Features />
      <Benefits />
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(82, 189, 170, 0.0) 0%, rgba(84, 190, 150, 0.3) 120%)",
          height: "100%",
        }}
      >
        <Plan />
      </Box>
    </>
  );
};

export default Home;
