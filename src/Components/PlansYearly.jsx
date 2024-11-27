import { useTheme } from "@emotion/react";
import { Box, Grid2 } from "@mui/material";

const PlansYearly = () => {
  const theme = useTheme();
  return (
    <>
      <Grid2 container>
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            Hey! You are in the Plans Yearly
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default PlansYearly;
