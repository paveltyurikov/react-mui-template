import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IPost } from "~/apps/blog/Post/types";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import ButtonBtnDelete from "./BtnDelete";


const NEW_POST: IPost = {
  id: "test_id",
  title: "Test Post",
  content: "Test Post Content",
};

const ui = (post=NEW_POST) => (
  <ButtonBtnDelete post={post}>Delete Post</ButtonBtnDelete>
);

const fillPostForm = async (post: IPost) => {
  await userEvent.clear(screen.getByLabelText(/title/i));
  await userEvent.type(screen.getByLabelText(/title/i), post.title);
  await userEvent.type(
    screen.getByPlaceholderText(/type your post here/i),
    post.content || ""
  );
};
const openFormDialog = async () => {
  await userEvent.click(screen.getByText(/Delete Post/i));
};

const submitForm = async () => {
  await userEvent.click(screen.getByText(/^Delete$/i));
};
describe("ButtonDeletePost", () => {
  it("should render correctly", async () => {
    renderWithAllProviders(ui);
    expect(screen.getByTestId("Post-delete-btn")).toHaveTextContent(
      "Delete Post"
    );
    await openFormDialog();
    expect(screen.getByTestId("dialog-title")).toHaveTextContent("Delete Post?");
    expect(screen.getByTestId("dialog-btn-cancel")).toHaveTextContent(
      /cancel/i
    );
    expect(screen.getByTestId("dialog-btn-submit")).toHaveTextContent(
      /Delete/i
    );
  });
  it("should success", async () => {
    renderWithAllProviders(ui);
    await openFormDialog();
    expect(screen.getByText(/^delete$/i)).toBeEnabled();
    await submitForm();
    await screen.findByText("Post deleted");
  });
  it("should show server errors", async () => {
    renderWithAllProviders(ui, {...NEW_POST, id:'non_existing'});
    await openFormDialog();
    expect(screen.getByText(/^Delete$/i)).toBeEnabled();
    await submitForm();
    await screen.findByText("Failed delete Post");
  });
});
