import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";

const PlansMonthly = () => {
  const theme = useTheme();
  const successMessages = [
    "2 Users",
    "2 Files",
    "Public Share & Comments",
    "Chat Support  ",
    "New income apps",
  ];

  const successMessagesForPro = [
    "4 Users",
    "All apps",
    "Unlimited editable exports",
    "Folders and collaboration ",
    "All incoming apps",
  ];
  const successMessagesForBusiness = [
    "All the features of pro plan",
    "Account success Manager",
    "Single Sign-On (SSO)",
    "Co-conception pogram ",
    "Collaboration-Soon",
  ];
  return (
    <>
      <Grid2
        container
        spacing={{
          mobile: 4,
          tablet: 4,
          laptop: 4,
          desktop: 0,
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "10px",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                bgcolor: "#fff",
                padding: "20px 20px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "20px",
                    tablet: "25px",
                    laptop: "30px",
                  },
                }}
              >
                Free
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "14px",
                    tablet: "18px",
                  },
                  color: "#A6A6A6",
                }}
              >
                Have a go and test your superpowers
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "32px",
                    tablet: "44px",
                    laptop: "50px",
                  },
                  color: "#000",
                }}
              >
                0$
              </Typography>
              <Box
                sx={{
                  padding: "30px 20px",
                  bgcolor: "#F9FAFB",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                }}
              >
                {/* Success Boxes */}
                {successMessages.map((message, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "transparent", // Specific green background color
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "15px",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#54BD95",
                        fontSize: "28px",
                        marginRight: "10px",
                      }}
                    />
                    <Typography sx={{ fontSize: "16px", color: "#333" }}>
                      {message}
                    </Typography>
                  </Box>
                ))}

                {/* Signup Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      color: "#54BD95",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "20px",
                      textTransform: "none",
                      fontSize: "18px",
                      "&:hover": {
                        backgroundColor: "#45A684",
                        color: "#fff",
                      },
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    Signup for Free
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid2>
        {/* 2nd Grid */}

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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "10px",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                bgcolor: "#54BD95",
                padding: "20px 20px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "20px",
                    tablet: "25px",
                    laptop: "30px",
                  },
                  color: "#fff",
                }}
              >
                Pro
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "14px",
                    tablet: "18px",
                  },
                  color: "#fff",
                }}
              >
                Experiment the power of infinite possibilities
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "32px",
                    tablet: "44px",
                    laptop: "50px",
                  },
                  color: "#fff",
                }}
              >
                8$
              </Typography>
              <Box
                sx={{
                  padding: "30px 20px",
                  bgcolor: "#F9FAFB",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  bgcolor: "#fff",
                  textAlign: "left",
                }}
              >
                {/* Success Boxes */}
                {successMessagesForPro.map((message, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "transparent", // Specific green background color
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "15px",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#54BD95",
                        fontSize: "28px",
                        marginRight: "10px",
                      }}
                    />
                    <Typography sx={{ fontSize: "16px", color: "#333" }}>
                      {message}
                    </Typography>
                  </Box>
                ))}

                {/* Signup Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#54BD95",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "20px",
                      textTransform: "none",
                      fontSize: "18px",
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    Go to pro
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid2>

        {/* 3rd Grid */}

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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "10px",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                bgcolor: "#fff",
                padding: "20px 20px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "20px",
                    tablet: "25px",
                    laptop: "30px",
                  },
                }}
              >
                Business
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "14px",
                    tablet: "18px",
                  },
                  color: "#A6A6A6",
                }}
              >
                Unveil new superpowers and join the Design Leaque
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    mobile: "32px",
                    tablet: "44px",
                    laptop: "50px",
                  },
                  color: "#000",
                }}
              >
                16$
              </Typography>
              <Box
                sx={{
                  padding: "30px 20px",
                  bgcolor: "#F9FAFB",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                }}
              >
                {/* Success Boxes */}
                {successMessagesForBusiness.map((message, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "transparent", // Specific green background color
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "15px",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#54BD95",
                        fontSize: "28px",
                        marginRight: "10px",
                      }}
                    />
                    <Typography sx={{ fontSize: "16px", color: "#333" }}>
                      {message}
                    </Typography>
                  </Box>
                ))}

                {/* Signup Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      color: "#54BD95",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "20px",
                      textTransform: "none",
                      fontSize: "18px",
                      "&:hover": {
                        backgroundColor: "#45A684",
                        color: "#fff",
                      },
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    Goto Business
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default PlansMonthly;
