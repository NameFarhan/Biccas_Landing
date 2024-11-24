import { useTheme } from "@emotion/react";
import React from "react";
import { FeaturesWrapper } from "./FeaturesWrapper";
import { Box, Button, Grid2, Typography } from "@mui/material";
import feature1 from "../Images/feature1.webp";
import feature2 from "../Images/feature2.webp";
import feature3 from "../Images/feature3.webp";

const Features = () => {
  const theme = useTheme();
  return (
    <>
      <FeaturesWrapper>
        <Grid2
          container
          spacing={{
            mobile: 5,
            desktop: 6,
          }}
        >
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
                alignItems: "center",
                textAlign: {
                  mobile: "center",
                  laptop: "unset",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: {
                    mobile: "32px",
                    tablet: "37px",
                    laptop: "44px",
                    desktop: "50px",
                  },
                }}
              >
                Our Features you can get
              </Typography>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                textAlign: {
                  mobile: "center",
                  laptop: "unset",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: {
                    mobile: "14px",
                    tablet: "16px",
                    laptop: "18px",
                  },
                  color: "#A6A6A6",
                }}
              >
                We offer a variety of interesting features that you can help
                increase yor productivity at work and manage your projrct esaly
              </Typography>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-end",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Button
                varaint="contained"
                sx={{
                  bgcolor: "#54BD95",
                  color: "#fff",
                  borderRadius: "70px",
                  padding: "10px 30px",
                  textTransform: "none",
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid2>
        </Grid2>
        <Box sx={{ mb: "3rem" }}></Box>
        <Grid2
          container
          spacing={{
            mobile: 8,
            tablet: 2,
            laptop: 2,
            desktop: 4,
          }}
        >
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "430px",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  alt="Feature1 image"
                  src={feature1}
                />
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "20px",
                      tablet: "23px",
                      laptop: "27px",
                      desktop: "30px",
                    },
                  }}
                >
                  Collboration Teams
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "14px",
                      tablet: "16px",
                      laptop: "18px",
                    },
                    color: "#A6A6A6",
                  }}
                >
                  Here you can handle projects together with team virtually
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "430px",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  alt="Feature2 image"
                  src={feature2}
                />
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "20px",
                      tablet: "23px",
                      laptop: "27px",
                      desktop: "30px",
                    },
                  }}
                >
                  Cloud Storage
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "14px",
                      tablet: "16px",
                      laptop: "18px",
                    },
                    color: "#A6A6A6",
                  }}
                >
                  No nedd to worry about storage because we provide storage up
                  to 2 TB
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "430px",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  alt="Feature1 image"
                  src={feature3}
                />
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "20px",
                      tablet: "23px",
                      laptop: "27px",
                      desktop: "30px",
                    },
                  }}
                >
                  Daily Analytics
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "14px",
                      tablet: "16px",
                      laptop: "18px",
                    },
                    color: "#A6A6A6",
                  }}
                >
                  We always provide useful informatin to make it easier for you
                  every day
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </FeaturesWrapper>
    </>
  );
};

export default Features;
