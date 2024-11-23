import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import { SupportWrapper } from "./SupportWrapper";
import RatingStars from "./RatingStars";
import analytic from "../Images/analytic.webp";
import time from "../Images/time.webp";
import engagement from "../Images/engagement.webp";

const Support = () => {
  const theme = useTheme();
  return (
    <>
      <SupportWrapper>
        <Grid2
          container
          spacing={{
            mobile: 10,
            tablet: 5,
            laptop: 8,
            desktop: 10,
          }}
        >
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                  justifyContent: {
                    mobile: "center",
                    laptop: "unset",
                  },
                  textAlign: {
                    mobile: "center",
                    laptop: "unset",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "32px",
                      tablet: "35px",
                      laptop: "40px",
                    },
                  }}
                >
                  How we support our pratner all over the world
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: {
                      mobile: "14px",
                      tablet: "15px",
                      laptop: "18px",
                    },
                    color: "#A6A6A6",
                  }}
                >
                  SaaS become a common delivery model for many business
                  application, including office software, messaging software,
                  payroll processing software, DBMS software, management
                  software
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: {
                      mobile: "50px",
                      tablet: "100px",
                    },
                    justifyContent: {
                      mobile: "center",
                      laptop: "unset",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <RatingStars />
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
                      4.9 / 5 rating
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "800",
                        fontSize: {
                          mobile: "14px",
                          tablet: "15px",
                          laptop: "18px",
                        },
                        color: "#A6A6A6",
                      }}
                    >
                      databricks
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <RatingStars />
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
                      4.8 / 5 rating
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "800",
                        fontSize: {
                          mobile: "14px",
                          tablet: "15px",
                          laptop: "18px",
                        },
                        color: "#A6A6A6",
                      }}
                    >
                      Chainalysis
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: {
                    mobile: "center",
                    laptop: "unset",
                  },
                  gap: "40px",
                }}
              >
                {/* 1st box */}
                <Box sx={{ display: "flex", gap: "40px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "60px",
                      height: "60px",
                      boxShadow: "1px 1px 10px -3px #aaa",
                      padding: "10px 20px",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      alt="Image1"
                      src={analytic}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "800",
                        fontSize: {
                          mobile: "20px",
                          laptop: "28px",
                        },
                      }}
                    >
                      Publishing
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "800",
                        fontSize: {
                          mobile: "14px",
                          laptop: "18px",
                        },
                        color: "#A6A6A6",
                      }}
                    >
                      Plan, collaborate, and publishing your contetn that
                      drivees meaningful engagement and growth for your barnd
                    </Typography>
                  </Box>
                </Box>
                {/* 2nd box */}
                <Box sx={{ display: "flex", gap: "40px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "60px",
                      height: "60px",
                      boxShadow: "1px 1px 10px -3px #aaa",
                      padding: "10px 20px",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      alt="Image1"
                      src={time}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "800",
                        fontSize: {
                          mobile: "20px",
                          laptop: "28px",
                        },
                      }}
                    >
                      Analytics
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "800",
                        fontSize: {
                          mobile: "14px",
                          laptop: "18px",
                        },
                        color: "#A6A6A6",
                      }}
                    >
                      Analyze your performance and create goegeous report
                    </Typography>
                  </Box>
                </Box>
                {/* 3rd box */}
                <Box sx={{ display: "flex", gap: "40px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "60px",
                      height: "60px",
                      boxShadow: "1px 1px 10px -3px #aaa",
                      padding: "10px 20px",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      alt="Image1"
                      src={engagement}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "800",
                        fontSize: {
                          mobile: "20px",
                          laptop: "28px",
                        },
                      }}
                    >
                      Engagement
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "800",
                        fontSize: {
                          mobile: "14px",
                          laptop: "18px",
                        },
                        color: "#A6A6A6",
                      }}
                    >
                      Quiuckly navigate you anda engage with your adience
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </SupportWrapper>
    </>
  );
};

export default Support;
