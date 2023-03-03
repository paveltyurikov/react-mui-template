import { screen } from "@testing-library/react";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import Table from "./Table";


describe("PostsAdminTable", () => {
  test("can create post", () => {
    renderWithAllProviders(Table);
    const button = screen.getByText(/posts/i);
    console.log(button);
  });
});
