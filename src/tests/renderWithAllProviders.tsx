import { render } from "@testing-library/react";
import AllProviders from "~/providers/AllProviders";


const renderWithProviders = (
  Component: React.FC<any>,
  props?: any,
  options?: any
) => {
  return render(
    <AllProviders>
      <Component {...props} />
    </AllProviders>,
    options
  );
};

export default renderWithProviders;
