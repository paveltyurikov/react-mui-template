import { Grid, GridProps } from "@mui/material";
import { DEFAULT_FORM_COLUMN_SPACING } from "~/constants/layuot";


const FormRow: React.FC<Partial<GridProps>> = ({ children, ...gridProps }) => {
  return (
    <Grid
      columnSpacing={DEFAULT_FORM_COLUMN_SPACING}
      alignItems="center"
      {...gridProps}
      item
      container
      direction="row"
    >
      {children}
    </Grid>
  );
};

export default FormRow;
