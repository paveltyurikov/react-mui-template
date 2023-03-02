import { render } from "@testing-library/react";
import AllProviders from "providers/AllProviders";


const WithAllProviders = (Component: React.FC<any>, props?: any) => {
  return (
    <AllProviders>
      <Component {...props} />
    </AllProviders>
  );
};

const renderWithProviders = (
  Component: React.FC<any>,
  props?: any,
  options?: any
) => {
  return render(WithAllProviders(Component, props), options);
};

export default renderWithProviders
