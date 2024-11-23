import { Box } from "@mui/material";

export const SupportWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "50px 20px",
            tablet: "50px 30px",
            laptop: "50px 100px",
            desktop: "60px 150px",
          },
          bgcolor: "#F9F8FE",
        }}
      >
        {children}
      </Box>
    </>
  );
};
