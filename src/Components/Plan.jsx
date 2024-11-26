import { useTheme } from "@emotion/react";
import { PlanWrapper } from "../Components/PlanWrapper";
import { Box, Typography } from "@mui/material";
import PlanButtons from '../Components/ButtonsGroupMui'
const Plan = () => {
  const theme = useTheme();
  return (
    <>
      <PlanWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "800",
              textAlign: "center",
              fontSize: {
                mobile: "32px",
                tablet: "47px",
                laptop: "50px",
              },
            }}
          >
            Choose Plan That’s Right For You
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              textAlign: "center",
              fontSize: {
                mobile: "14px",
                tablet: "18px",
              },
              color: "#A6A6A6",
            }}
          >
            Choose plan that works best for you, feel free to contact us
          </Typography>

          <PlanButtons />
        </Box>
      </PlanWrapper>
    </>
  );
};

export default Plan;
