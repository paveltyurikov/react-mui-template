import { Grid, GridProps } from "@mui/material";

const FormCol = ({ children, ...gridProps }: GridProps) => {
  return <Grid {...gridProps}>{children}</Grid>;
};

export default FormCol;
