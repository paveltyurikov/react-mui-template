import { Grid, GridProps } from "@mui/material";

const FormContainer = ({ children, ...gridProps }: GridProps) => {
  return (
    <Grid {...gridProps} container direction="column">
      {children}
    </Grid>
  );
};

export default FormContainer;
