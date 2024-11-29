import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const EndFooter = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          pt: "5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              mobile: "14px",
              laptop: "18px",
            },
          }}
        >
          © 2022 Biccas Inc. Copyright and rights reserved
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            gap: "40px",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                mobile: "14px",
                laptop: "18px",
              },
            }}
          >
            Terms and Condtions
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                mobile: "14px",
                laptop: "18px",
              },
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default EndFooter;
