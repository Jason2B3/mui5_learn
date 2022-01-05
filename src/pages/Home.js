import React from "react";
import { Box, typography } from "@mui/system";
import { Typography, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack sx={{ width: "100vw" }} alignItems="center">
      <Button variant="contained" sx={{ mb: "24px" }}>
        margin-bottom: 24px
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "yellow", color: "black", mb: 2 }}
      >
        margin-bottom: 16px
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "orange", color: "black" }}
      >
        I'm just chillin
      </Button>
    </Stack>
  );
}
