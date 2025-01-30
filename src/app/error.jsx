"use client";
import { Typography } from "@mui/material";
import React from "react";

function error({ error, reset }) {
  return (
    <div>
      <Typography mt={10}>{error.message}</Typography>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default error;
