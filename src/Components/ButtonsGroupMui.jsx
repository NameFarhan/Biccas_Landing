import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function PlanButtons({ onPlanChange }) {
  const [activePlan, setActivePlan] = React.useState("monthly");

  const handleButtonClick = (planType) => {
    setActivePlan(planType);
    onPlanChange(planType);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ButtonGroup
        sx={{
          border: "none",
          outline: "none",
          bgcolor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          padding: "10px 10px",
        }}
        size="large"
        aria-label="Small button group"
      >
        <Button
          sx={{
            color: activePlan === "monthly" ? "#fff" : "#000",
            backgroundColor:
              activePlan === "monthly" ? "#54BD95" : "transparent",
            fontWeight: "400",
            fontSize: {
              mobile: "14px",
              laptop: "18px",
            },
            textTransform: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            border: "none",
            "&:hover": {
              backgroundColor: "#54BD95",
              boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
            },
          }}
          onClick={() => handleButtonClick("monthly")}
        >
          Bill Monthly
        </Button>
        <Button
          sx={{
            color: activePlan === "yearly" ? "#fff" : "#000",
            backgroundColor:
              activePlan === "yearly" ? "#54BD95" : "transparent",
            fontWeight: "400",
            fontSize: {
              mobile: "14px",
              laptop: "18px",
            },
            textTransform: "none",
            border: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#54BD95",
              boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
            },
          }}
          onClick={() => handleButtonClick("yearly")}
        >
          Bill Yearly
        </Button>
      </ButtonGroup>
    </Box>
  );
}
