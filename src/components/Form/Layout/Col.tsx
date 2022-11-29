import React from "react";
import { Grid, GridProps } from "@mui/material";


const FormCol: React.FC<Partial<GridProps>> = ({ children, ...gridProps }) => {
  return (
    <Grid item {...gridProps}>
      {children}
    </Grid>
  );
};

export default FormCol;
