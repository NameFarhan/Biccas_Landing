import * as React from "react";
import Avatar from "@mui/material/Avatar";
import avatar1 from "../Images/avatar1.webp";
import avatar2 from "../Images/avatar2.webp";
import avatar3 from "../Images/avatar3.webp";
import avatar4 from "../Images/avatar4.webp";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useTheme } from "@emotion/react";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  border: "1px solid #fff", // Outline with white color
  color: "#fff", // Icon color
  borderRadius: "50%", // Optional: Keeps the button circular
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover effect
  },
}));

export default function ContactAvatars() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Avatar
          sx={{
            width: {
              mobile: "40px",
              laptop: "60px",
            },
            height: {
              mobile: "40px",
              laptop: "60px",
            },
          }}
          alt="avatar 1"
          src={avatar1}
        />
        <Avatar
          sx={{
            width: {
              mobile: "40px",
              laptop: "60px",
            },
            height: {
              mobile: "40px",
              laptop: "60px",
            },
          }}
          alt="avatar 2"
          src={avatar2}
        />
        <Avatar
          sx={{
            width: {
              mobile: "40px",
              laptop: "60px",
            },
            height: {
              mobile: "40px",
              laptop: "60px",
            },
          }}
          alt="avatar 3"
          src={avatar3}
        />
        <Avatar
          sx={{
            width: {
              mobile: "40px",
              laptop: "60px",
            },
            height: {
              mobile: "40px",
              laptop: "60px",
            },
          }}
          alt="avatar 4"
          src={avatar4}
        />
        <CustomIconButton
          sx={{
            width: {
              mobile: "40px",
              laptop: "60px",
            },
            height: {
              mobile: "40px",
              laptop: "60px",
            },
          }}
        >
          <PlayArrowIcon />
        </CustomIconButton>
      </Box>
    </>
  );
}
