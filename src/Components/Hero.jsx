import { useTheme } from "@emotion/react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { HeroWrapper } from "../Components/HeroWrapper";
import { IconButton } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import heroline from "../Images/heroline.webp";
import hero from "../Images/hero.svg";
import React from "react";

const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <HeroWrapper>
        <Grid2 container>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  tablet: "flex-start",
                },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  textAlign: {
                    mobile: "center",
                    tablet: "left",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: {
                      mobile: "35px",
                      tablet: "43px",
                      laptop: "53px",
                      desktop: "70px",
                    },
                  }}
                >
                  We’re here to Increase your Productivity
                </Typography>
                <Box
                  component="img"
                  sx={{
                    height: "46px",
                    width: "100%",
                  }}
                  alt="Hero line"
                  src={heroline}
                />
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: {
                      mobile: "14px",
                      tablet: "15px",
                      laptop: "18px",
                    },
                  }}
                >
                  Let's make your work more organize and easily using the Taskio
                  Dashboard with many of the latest featuresin managing work
                  every day.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    justifyContent: {
                      mobile: "center",
                      tablet: "flex-start",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#54BD95",
                      borderRadius: "40px",
                      textTransform: "none",
                      width: "150px",
                      height: "60px",
                      fontSize: {
                        mobile: "14px",
                        tablet: "15px",
                        laptop: "18px",
                      },
                    }}
                  >
                    Try free trial
                  </Button>
                  <IconButton
                    sx={{
                      width: "35px",
                      height: "35px",
                      border: "1px solid black",
                      color: "#000",
                    }}
                    variant="outlined"
                  >
                    <PlayArrowOutlinedIcon />
                  </IconButton>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: {
                        mobile: "14px",
                        tablet: "15px",
                        laptop: "18px",
                      },
                    }}
                    variant="text"
                  >
                    View Demo
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  tablet: "flex-end",
                },
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    height: "550px",
                    width: "100%",
                  }}
                  alt="Hero image"
                  src={hero}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </HeroWrapper>
    </>
  );
};

export default Hero;
