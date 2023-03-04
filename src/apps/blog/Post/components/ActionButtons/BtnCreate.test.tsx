import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {v4 as uuid} from "uuid";
import { IPostCreate } from "~/apps/blog/Post/types";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import ButtonCreatePost from "./BtnCreate";


const ui = () => <ButtonCreatePost>Add post</ButtonCreatePost>;

const NEW_POST: IPostCreate = {
  title: "Test Post",
  content: "Test Post Content",
};
const fillPostForm = async (post: IPostCreate) => {
  await userEvent.type(screen.getByLabelText(/title/i), post.title);
  await userEvent.type(
    screen.getByPlaceholderText(/type your post here/i),
    post.content || ""
  );
};

const openFormDialog = async () => {
  await userEvent.click(screen.getByText(/add post/i));
};

const submitForm = async () => {
  await userEvent.click(screen.getByText(/^create$/i));
};
describe("ButtonCreatePost", () => {
  it("should render correctly",async ()=>{
    renderWithAllProviders(ui);
    expect(screen.getByTestId('Post-create-btn')).toHaveTextContent("Add post")
    await openFormDialog();
    expect(screen.getByTestId('dialog-title')).toHaveTextContent('Create Post')
    expect(screen.getByTestId('dialog-btn-cancel')).toHaveTextContent(/cancel/i)
    expect(screen.getByTestId('dialog-btn-submit')).toHaveTextContent(/create/i)
    expect(screen.getByTestId('dialog-btn-submit')).toHaveTextContent(/create/i)
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/type your post here/i)).toBeInTheDocument()
  })
  it("should success", async () => {
    renderWithAllProviders(ui);
    await openFormDialog();
    expect(screen.getByText(/^create$/i)).toBeDisabled();
    await fillPostForm(NEW_POST);
    expect(screen.getByText(/^create$/i)).toBeEnabled();
    await submitForm();
    await screen.findByText("Post created");
  });
  it("should show server errors", async () => {
    renderWithAllProviders(ui);
    await openFormDialog();
    expect(screen.getByText(/^create$/i)).toBeDisabled();
    await fillPostForm({ ...NEW_POST, title: "test_bad_request" });
    expect(screen.getByText(/^create$/i)).toBeEnabled();
    await submitForm();
    await screen.findByText("Failed create Post");
    expect(screen.getByText(/^create$/i)).toBeDisabled();
    expect(
      screen.getByText("This title has already been taken")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Content field has validation problems")
    ).toBeInTheDocument();
  });
});
