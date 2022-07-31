import React from "react";

import { LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface ProgressBarProps {
  precentage: number,
  color: string,
}

const ProgressBar: React.FC<ProgressBarProps> = ({ precentage, color }) => {
  const theme = createTheme({
    components: {
      MuiLinearProgress: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === "determinate" &&
              ownerState.color === "primary" && {
                backgroundColor: "#FFF",
                borderRadius: ".375rem",
              }),
          }),
          bar1Determinate: {
            backgroundColor: color,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="flex w-full justify-between items-center">
        <LinearProgress
          className="w-8/12"
          color="primary"
          value={precentage}
          variant="determinate"
        ></LinearProgress>
        <p className="text-md text-white appFont w-4/12 text-end">
          <span className="numeralFont">{precentage}</span>% spent
        </p>
      </div>
    </ThemeProvider>
  );
};

export { ProgressBar };
