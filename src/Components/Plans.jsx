import { useTheme } from "@emotion/react";
import { Box, Grid2 } from "@mui/material";

const Plans = () => {
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
            HEllo i am in plan
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Plans;
