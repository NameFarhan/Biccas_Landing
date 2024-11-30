import { Box } from "@mui/material";

export const BenefitsWrapper = ({ children }) => {
  return (
    <>
      <Box
        data-aos="fade-in"
        sx={{
          padding: {
            mobile: "50px 10px",
            tablet: "80px 30px",
            laptop: "100px 105px",
            desktop: "130px 150px",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
