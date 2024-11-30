import { Box } from "@mui/material";

export const HeroWrapper = ({ children }) => {
  return (
    <>
      <Box
        data-aos="fade-in"
        sx={{
          padding: {
            mobile: "10px 10px",
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
