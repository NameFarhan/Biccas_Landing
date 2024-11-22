import { Box } from "@mui/material";

export const HeroWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "50px 10px",
            tablet: "80px 30px",
            laptop: "100px 100px",
            desktop: "70px 150px",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
