import { Box } from "@mui/material";

export const ContactWrapper = ({ children }) => {
  return (
    <>
      <Box
        data-aos="fade-in"
        sx={{
          padding: {
            mobile: "50px 10px",
            tablet: "80px 30px",
            laptop: "100px 105px 0 105px",
            desktop: "130px 150px 0 150px",
          },
          bgcolor: "#161C28",
        }}
      >
        {children}
      </Box>
    </>
  );
};
