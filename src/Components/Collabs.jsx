import { useTheme } from "@emotion/react";
import { CollabsWrapper } from "../Components/CollabsWrapper";
import { Box, Grid2, Typography } from "@mui/material";
import collab1 from "../Images/unsplash.webp";
import collab2 from "../Images/notion.webp";
import collab3 from "../Images/intercom.webp";
import collab4 from "../Images/descript.webp";
import collab5 from "../Images/grammarly.webp";

const Collabs = () => {
  const theme = useTheme();
  return (
    <>
      <CollabsWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontWeight: "800",
              fontSize: {
                mobile: "32px",
                tablet: "35px",
                laptop: "40px",
              },
              textAlign: "center",
              mb: "1rem",
              padding:'20px 20px'
            }}
          >
            More than 25,000 teams use Collabs
          </Typography>

          <Grid2
            container
            spacing={{
              mobile: 4,
              tablet: 4,
              laptop: 4,
              desktop: 6,
            }}
          >
            <Grid2
              item
              size={{
                mobile: 12,
                tablet: 6,
                tablet: 6,
                laptop: 2.4,
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
                  component="img"
                  sx={{
                    height: "38px",
                    width: {
                      mobile: "180px",
                      laptop: "100%",
                    },
                  }}
                  alt="collab1"
                  src={collab1}
                />
              </Box>
            </Grid2>
            <Grid2
              item
              size={{
                mobile: 12,
                tablet: 6,
                laptop: 2.4,
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
                  component="img"
                  sx={{
                    height: "38px",
                    width: {
                      mobile: "180px",
                      laptop: "100%",
                    },
                  }}
                  alt="collab2"
                  src={collab2}
                />
              </Box>
            </Grid2>
            <Grid2
              item
              size={{
                mobile: 12,
                tablet: 6,
                laptop: 2.4,
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
                  component="img"
                  sx={{
                    height: "38px",
                    width: {
                      mobile: "180px",
                      laptop: "100%",
                    },
                  }}
                  alt="collab3"
                  src={collab3}
                />
              </Box>
            </Grid2>
            <Grid2
              item
              size={{
                mobile: 12,
                tablet: 6,
                laptop: 2.4,
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
                  component="img"
                  sx={{
                    height: "38px",
                    width: {
                      mobile: "180px",
                      laptop: "100%",
                    },
                  }}
                  alt="collab4"
                  src={collab4}
                />
              </Box>
            </Grid2>
            <Grid2
              item
              size={{
                mobile: 12,
                tablet: 6,
                laptop: 2.4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: {
                    mobile: "15vh",
                    laptop: "1vh",
                    desktop: "15vh",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "38px",
                    width: {
                      mobile: "180px",
                      laptop: "100%",
                    },
                  }}
                  alt="collab5"
                  src={collab5}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </CollabsWrapper>
    </>
  );
};

export default Collabs;
