import { Box } from "@mui/material";

export const CollabsWrapper = ({ children }) => {
  return (
    <>
      <Box
        data-aos="fade-in"
        sx={{
          padding: {
            mobile: "0px 10px",
            tablet: "10px 30px",
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
