import { Box } from "@mui/material";

export const NavbarWrapper = ({ children }) => {
  return (
    <>
      <Box
        data-aos="fade-in"
        sx={{
          padding: {
            mobile: "10px 10px",
            tablet: "20px 10px",
            laptop: "20px 80px",
            desktop: "40px 130px",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
