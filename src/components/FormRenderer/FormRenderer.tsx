import { GridProps } from "@mui/material";
import { FormContainer } from "~/components/Form/Layout";
import RenderRow from "./Row";
import { ConfigType } from "./types";


const FormRenderer = ({
  config,
  ...props
}: {
  config: ConfigType;
} & GridProps) => {
  return (
    <FormContainer {...props}>
      {config.fields.map((row, index) => (
        <RenderRow config={config} key={index} row={row} />
      ))}
    </FormContainer>
  );
};
export default FormRenderer;
