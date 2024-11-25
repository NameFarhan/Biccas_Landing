import React from "react";
import { useTheme } from "@emotion/react";
import { BenefitsWrapper } from "../Components/BenefitsWrapper";
import { Box, Grid2, Typography } from "@mui/material";
import benefit1 from "../Images/benefit1.webp";
import benefit2 from "../Images/ben2.webp";
import benefit3 from "../Images/ben3.webp";
import benefit4 from "../Images/ben4.webp";

const Benefits = () => {
  const theme = useTheme();
  return (
    <>
      <BenefitsWrapper>
        <Grid2
          container
          spacing={{
            mobile: 12,
            tablet: 10,
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
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
                textAlign: {
                  mobile: "center",
                  laptop: "left",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
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
                  What Benefit Will You Get
                </Typography>

                {/* Box containing success icon and text */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: {
                      mobile: "30px",
                      tablet: "20px",
                    },
                    width: "100%",
                    mt: "3rem",
                    textAlign: "left",
                  }}
                >
                  {/* Success Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#6DD130",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>

                  {/* Text */}
                  <Typography
                    sx={{
                      fontSize: {
                        mobile: "16px",
                        laptop: "18px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Free Consulting With Experet Saving Money
                  </Typography>
                </Box>

                {/* Add more similar boxes as needed */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#6DD130",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        mobile: "16px",
                        laptop: "18px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Online Banking
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#6DD130",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        mobile: "16px",
                        laptop: "18px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Investment Report Every Month
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#6DD130",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        mobile: "16px",
                        laptop: "18px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Saving Money For The Future
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#6DD130",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        mobile: "16px",
                        laptop: "18px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Online Transection
                  </Typography>
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
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-end",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Box>
                <Box
                  component="img"
                  sx={{
                    height: "500px",
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                  alt="Benefit Image"
                  src={benefit1}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </BenefitsWrapper>
    </>
  );
};

export default Benefits;
