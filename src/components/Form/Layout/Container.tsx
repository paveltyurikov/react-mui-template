import { Grid, GridProps } from "@mui/material";
import { DEFAULT_FORM_ROW_SPACING } from "~/constants/layuot";


const FormContainer: React.FC<Partial<GridProps>> = ({
  children,
  ...gridProps
}) => {
  return (
    <Grid
      {...gridProps}
      container
      direction="column"
      rowSpacing={DEFAULT_FORM_ROW_SPACING}
    >
      {children}
    </Grid>
  );
};

export default FormContainer;
