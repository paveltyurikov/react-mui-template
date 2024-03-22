import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllProviders from "~/providers/AllProviders";


const renderWithProviders = (
  Component: React.FC<any>,
  props?: any,
  options?: any
) => {
  return render(
    <AllProviders>
      <MemoryRouter>
        <Component {...props} />
      </MemoryRouter>
    </AllProviders>,
    options
  );
};

export default renderWithProviders;
