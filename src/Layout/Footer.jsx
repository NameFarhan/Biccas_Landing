import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import EndFooter from "../Components/EndFooter";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          p: {
            mobile: "70px 0 10px 0",
            tablet: "100px 0 0 0",
            laptop: "70px 0 50px 0",
            laptop: "140px 0 50px 0",
          },
        }}
      >
        <Grid2
          container
          spacing={{
            mobile: 8,
            tablet: 12,
            laptop: 8,
            desktop: 12,
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
                  laptop: "start",
                },
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Typography
                  sx={{
                    color: "#54BD95",
                    fontWeight: "700",
                    fontSize: {
                      mobile: "32px",
                      tablet: "42px",
                      laptop: "50px",
                    },
                  }}
                >
                  Biccas
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "14px",
                      laptop: "18px",
                    },
                    color: "#A6A6A6",
                  }}
                >
                  Get started now, try our product
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    component="input"
                    type="text"
                    placeholder="Search..."
                    sx={{
                      width: "100%",
                      height: "60px",
                      borderRadius: "70px",
                      border: "1px solid #A6A6A6",
                      backgroundColor: "transparent",
                      color: "#A6A6A6",
                      padding: "0 60px 0 20px", // Padding to make space for the button
                      fontSize: "16px",
                      outline: "none",
                      "&::placeholder": {
                        color: "#A6A6A6",
                      },
                    }}
                  />
                  <Box
                    component="button"
                    sx={{
                      position: "absolute",
                      right: "10px",
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#54BD95",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        transform: "rotate(-40deg)",
                        border: "solid white",
                        borderWidth: "0 2px 2px 0",
                        padding: "4px",
                      }}
                    />
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
            <Grid2
              container
              spacing={{
                mobile: 8,
                tablet: 8,
                laptop: 6,
                desktop: 8,
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
                      laptop: "flex-end",
                    },
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "100px",
                      textAlign: {
                        mobile: "center",
                        laptop: "left",
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: "400",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                          mb: "2rem",
                        }}
                      >
                        Support
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#A6A6A6",
                            fontSize: {
                              mobile: "14px",
                              laptop: "18px",
                            },
                          }}
                        >
                          Help centre
                        </Typography>
                        <Typography
                          sx={{
                            color: "#A6A6A6",
                            fontSize: {
                              mobile: "14px",
                              laptop: "18px",
                            },
                          }}
                        >
                          Account information
                        </Typography>
                        <Typography
                          sx={{
                            color: "#A6A6A6",
                            fontSize: {
                              mobile: "14px",
                              laptop: "18px",
                            },
                          }}
                        >
                          About
                        </Typography>
                        <Typography
                          sx={{
                            color: "#A6A6A6",
                            fontSize: {
                              mobile: "14px",
                              laptop: "18px",
                            },
                          }}
                        >
                          Contact us
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              {/* Help and Solution */}
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
                  }}
                >
                  <Box
                    sx={{
                      textAlign: {
                        mobile: "center",
                        laptop: "left",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "400",
                        fontSize: {
                          mobile: "14px",
                          laptop: "18px",
                        },
                        mb: "2rem",
                      }}
                    >
                      Help and Solution
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#A6A6A6",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                        }}
                      >
                        Talk to support
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A6A6A6",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                        }}
                      >
                        Support docs
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A6A6A6",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                        }}
                      >
                        System status
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A6A6A6",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                        }}
                      >
                        Covid responde
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              {/* Product */}
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
                  }}
                >
                  <Box
                    sx={{
                      textAlign: {
                        mobile: "center",
                        laptop: "left",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "400",
                        fontSize: {
                          mobile: "14px",
                          laptop: "18px",
                        },
                        mb: "2rem",
                      }}
                    >
                      Product
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#A6A6A6",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                        }}
                      >
                        Update
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A6A6A6",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                        }}
                      >
                        Security
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A6A6A6",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                        }}
                      >
                        Beta Test
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A6A6A6",
                          fontSize: {
                            mobile: "14px",
                            laptop: "18px",
                          },
                        }}
                      >
                        Pricing Product
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>

        <EndFooter />
      </Box>
    </>
  );
};

export default Footer;
