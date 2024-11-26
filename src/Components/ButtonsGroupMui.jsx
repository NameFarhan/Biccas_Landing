import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

const buttons = [
  <Button
    key="one"
    sx={{
      color: "#000",
      fontWeight: "400",
      fontSize: {
        mobile: "14px",
        laptop: "18px",
      },
      textTransform: "none",
      border: "none",
      outline: "none",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        backgroundColor: "#54BD95",
        boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
      },
    }}
  >
    Bill Monthly
  </Button>,
  <Button
    key="two"
    sx={{
      color: "#000",
      fontWeight: "400",
      fontSize: {
        mobile: "14px",
        laptop: "18px",
      },
      textTransform: "none",
      border: "none",
      outline: "none",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        backgroundColor: "#54BD95",
        boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
      },
    }}
  >
    Bill Yearly
  </Button>,
];

export default function PlanButtons() {
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
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
