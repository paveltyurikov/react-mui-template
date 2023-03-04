import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IPost } from "~/apps/blog/Post/types";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import ButtonUpdatePost from "./BtnUpdate";


const NEW_POST: IPost = {
  id: "test_id",
  title: "Test Post",
  content: "Test Post Content",
};

const ui = () => (
  <ButtonUpdatePost post={NEW_POST}>Update Post</ButtonUpdatePost>
);

const NEXT_POST: IPost = {
  id: "",
  title: "Test next Post",
  content: "Test next Post Content",
};
const fillPostForm = async (post: IPost) => {
  await userEvent.clear(screen.getByLabelText(/title/i));
  await userEvent.type(screen.getByLabelText(/title/i), post.title);
  await userEvent.type(
    screen.getByPlaceholderText(/type your post here/i),
    post.content || ""
  );
};

const openFormDialog = async () => {
  await userEvent.click(screen.getByText(/Update Post/i));
};

const submitForm = async () => {
  await userEvent.click(screen.getByText(/^Update$/i));
};
describe("ButtonUpdatePost", () => {
  it("should render correctly", async () => {
    renderWithAllProviders(ui);
    expect(screen.getByTestId("Post-update-btn")).toHaveTextContent(
      "Update Post"
    );
    await openFormDialog();
    expect(screen.getByTestId("dialog-title")).toHaveTextContent("Update Post");
    expect(screen.getByTestId("dialog-btn-cancel")).toHaveTextContent(
      /cancel/i
    );
    expect(screen.getByTestId("dialog-btn-submit")).toHaveTextContent(
      /Update/i
    );
    expect(screen.getByTestId("dialog-btn-submit")).toHaveTextContent(
      /Update/i
    );
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/type your post here/i)
    ).toBeInTheDocument();
  });
  it("should success", async () => {
    renderWithAllProviders(ui);
    await openFormDialog();
    expect(screen.getByText(/^update$/i)).toBeDisabled();
    await fillPostForm(NEXT_POST);
    expect(screen.getByText(/^update$/i)).toBeEnabled();
    await submitForm();
    await screen.findByText("Post updated");
  });
  it("should show server errors", async () => {
    renderWithAllProviders(ui);
    await openFormDialog();
    expect(screen.getByText(/^Update$/i)).toBeDisabled();
    await fillPostForm({ ...NEW_POST, title: "test_bad_request" });
    expect(screen.getByText(/^Update$/i)).toBeEnabled();
    await submitForm();
    await screen.findByText("Failed update Post");
    expect(screen.getByText(/^Update$/i)).toBeDisabled();
    expect(
      screen.getByText("This title has already been taken")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Content field has validation problems")
    ).toBeInTheDocument();
  });
});
