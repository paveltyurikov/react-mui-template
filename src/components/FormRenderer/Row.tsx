import { Field } from "formik";
import { FormCol, FormRow } from "~/components/Form/Layout";
import { ConfigType, FiledRow } from "~/components/FormRenderer/types";


const RenderRow = ({ config, row }: { config: ConfigType; row: FiledRow }) => {
  return (
    <FormRow>
      {row.map((name) => (
        <FormCol key={name}>
          <Field {...config.fields_map[name]} />
        </FormCol>
      ))}
    </FormRow>
  );
};

export default RenderRow