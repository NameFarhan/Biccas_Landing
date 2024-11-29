import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import { ContactWrapper } from "../Components/ContactWrapper";
import Footer from "../Layout/footer";
import { useTheme } from "@emotion/react";
import ContactAvatars from "./Avatar";
import contactimage1 from "../Images/contactimage1.webp";
import contactimage2 from "../Images/contactimage2.webp";
const Contact = () => {
  const theme = useTheme();
  return (
    <>
      <ContactWrapper>
        <Grid2
          container
          spacing={{
            mobile: 10,
            tablet: 10,
            laptop: 6,
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
                alignItems: "center",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "60px",
                  textAlign: {
                    mobile: "center",
                    laptop: "start",
                  },
                  alignItems: {
                    mobile: "center",
                    laptop: "flex-start",
                  },
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "32px",
                      tablet: "42px",
                      laptop: "45px",
                      desktop: "50px",
                    },
                  }}
                >
                  People are Saying About DoWhith
                </Typography>
                <Typography
                  sx={{
                    color: "#A6A6A6",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "14px",
                      laptop: "18px",
                    },
                    width: "min-content",
                    minWidth: "320px",
                  }}
                >
                  Everything you need to accept payment and grow your money or
                  manage anywhere on the planet
                </Typography>
                <Box>
                  <Box
                    component="img"
                    sx={{
                      height: 40,
                      width: 40,
                    }}
                    alt="Contact image1"
                    src={contactimage1}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#A6A6A6",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "14px",
                      laptop: "18px",
                    },
                    width: "min-content",
                    minWidth: "320px",
                  }}
                >
                  I am very helped by this E-wallet application, my days are
                  very easy to use, and it’s very helpful in my life. Even I can
                  pay in a short time 😍
                </Typography>
                <Typography
                  sx={{
                    color: "#A6A6A6",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "14px",
                      laptop: "18px",
                    },
                  }}
                >
                  _ Aria Zinanrio
                </Typography>
                <ContactAvatars />
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
              <Box
                sx={{
                  bgcolor: "rgba(34, 41, 56, 1)", // #222938
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: {
                    mobile: "15vh 5vw",
                    tablet: "15vh 5vw",
                    laptop: "0vh 5vw",
                    desktop: "0vh 5vw",
                  },
                  gap: "10px",
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 100,
                    width: 70,
                    aspectRatio: "3/2",
                  }}
                  alt="Image 2"
                  src={contactimage2}
                />
                <Typography
                  sx={{
                    fontSize: {
                      mobile: "18px",
                      tablet: "25px",
                      laptop: "30px",
                    },
                    color: "#fff",
                    marginBottom: "20px",
                  }}
                >
                  Get Started
                </Typography>

                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    gap: "15px", // Spacing between form fields
                    width: "100%", // Ensures 100% width
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        mobile: "14px",
                        laptop: "18px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    placeholder="Enter Your Email !"
                    fullWidth
                    variant="outlined"
                    sx={{
                      bgcolor: "#fff", // Slightly transparent background
                      borderRadius: "10px",
                      outline: "none",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#fff", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#fff", // No change on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#fff", // No change on focus
                        },
                      },
                      input: {
                        color: "#A6A6A6", // Text color in input
                      },
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        mobile: "14px",
                        laptop: "18px",
                      },
                      fontWeight: "500",
                    }}
                  >
                    Message
                  </Typography>
                  <TextField
                    placeholder="What You Want to Say?"
                    fullWidth
                    variant="outlined"
                    sx={{
                      bgcolor: "#fff", // Background color
                      borderRadius: "10px",
                      outline: "none",
                      border: "none",
                      height: "80px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#fff", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#fff", // No change on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#fff", // No change on focus
                        },
                      },
                      input: {
                        color: "#A6A6A6", // Text color in input
                      },
                    }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#54BD95", // Button color
                      color: "#fff",
                      fontWeight: "700",
                      width: "100%",
                      height: "60px",
                      textTransform: "none", // Avoid uppercase text
                      borderRadius: "10px",
                    }}
                  >
                    Request Demo
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
        {/* Footer Here */}
        <Footer />
      </ContactWrapper>
    </>
  );
};

export default Contact;
