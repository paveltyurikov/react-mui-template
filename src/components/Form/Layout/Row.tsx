import { Grid, GridProps } from "@mui/material";

const FormRow = ({ children, ...gridProps }: GridProps) => {
  return (
    <Grid alignItems="center" {...gridProps} container direction="row">
      {children}
    </Grid>
  );
};

export default FormRow;
