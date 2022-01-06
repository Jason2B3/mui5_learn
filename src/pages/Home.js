import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import { useGlobalContext } from "../state-management/globalContext";

export default function Home() {
  const { setTheme } = useGlobalContext();
  return (
    <Stack sx={{ width: "100vw" }} alignItems="center">
      <h1>Theme changer</h1>
      <Button
        variant="contained"
        sx={{ m: "24px" }}
        onClick={() => setTheme("dark")}
      >
        Set dark theme
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mb: 2 }}
        onClick={() => setTheme("light")}
      >
        Set light theme
      </Button>
    </Stack>
  );
}
