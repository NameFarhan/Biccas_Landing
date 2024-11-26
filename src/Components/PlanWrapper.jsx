import { Box } from "@mui/material";

export const PlanWrapper = ({ children }) => {
  return (
    <>
      <Box
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
