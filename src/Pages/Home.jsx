import React from "react";
import Navbar from "../Layout/Navbar";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import Hero from "../Components/Hero";

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
        <Hero/>
      </Box>
    </>
  );
};

export default Home;
