import { screen } from "@testing-library/react";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import { ErrorPage } from "./ErrorPage";

describe("ErrorPage", () => {
  it("should render correctly with message only", async () => {
    renderWithAllProviders(ErrorPage, {
      error: { message: "test error" },
    });
    expect(
      screen.getByText("Opps :( unknown error has occurred"),
    ).toBeInTheDocument();
    expect(screen.getByText("test error")).toBeInTheDocument();
  });
  it("should render correctly with statusText only", async () => {
    renderWithAllProviders(ErrorPage, {
      error: { statusText: "Not Found" },
    });
    expect(screen.getByText("Not Found")).toBeInTheDocument();
    expect(screen.getByText("No message")).toBeInTheDocument();
  });
});
