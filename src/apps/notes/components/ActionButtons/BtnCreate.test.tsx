import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { INCORRECT_DATA } from "~/tests/blog/post";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import PostApi from '../../api'
import BtnCreatePost from "./BtnCreate";


const CORRECT_DATA = {
  title: "PostTitle",
  content: "PostContent",
};

describe("BtnCreatePost", () => {
  it("should render correctly", async () => {
    renderWithAllProviders(BtnCreatePost, { children: "Create Post" });

    const button = screen.getByTestId("Post-create-btn");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Create Post");
    // open dialog
    await act(() => userEvent.click(button));

    const dialogTitle = screen.getByTestId("dialog-title");
    const dialogBtnSubmit = screen.getByTestId("dialog-btn-submit");
    const dialogBtnCancel = screen.getByTestId("dialog-btn-cancel");

    expect(dialogTitle.textContent).toBe("Create Post");
    expect(dialogBtnSubmit.textContent).toBe("Create");
    expect(dialogBtnSubmit).toBeDisabled();
    expect(dialogBtnCancel.textContent).toBe("Cancel");
    expect(dialogBtnCancel).toBeEnabled();
  });
  it("should handle submit success", async () => {
    const createPost = vi.spyOn(PostApi, "create");
    renderWithAllProviders(BtnCreatePost, { children: "Create Post" });
    const button = screen.getByTestId("Post-create-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit =  screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeDisabled();
    const titleField = screen.getByLabelText("title");
    const contentField = screen.getByPlaceholderText("Type your post here...");
    await act(() => userEvent.type(titleField, CORRECT_DATA.title));
    await act(() => userEvent.type(contentField, CORRECT_DATA.content));
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.findByTestId("create-post-success-notify");
    expect(notify.textContent).toBe("Post created");
    expect(createPost).toHaveBeenCalledTimes(1)
    expect(createPost).toHaveBeenCalledWith(CORRECT_DATA)
  });
  it("should handle submit error", async () => {
    const createPost = vi.spyOn(PostApi, "create");
    renderWithAllProviders(BtnCreatePost, { children: "Create Post" });
    const button = screen.getByTestId("Post-create-btn");
    act(() => userEvent.click(button));
    const dialogBtnSubmit = screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeDisabled();
    const titleField = screen.getByLabelText("title");
    const contentField = screen.getByPlaceholderText("Type your post here...");
    await act(() => userEvent.type(titleField, INCORRECT_DATA.title));
    await act(() => userEvent.type(contentField, INCORRECT_DATA.content));
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.findByTestId("create-post-error-notify");
    expect(notify.textContent).toBe("Failed create Post");
    expect(createPost).toHaveBeenCalledTimes(1)
    expect(createPost).toHaveBeenCalledWith(INCORRECT_DATA)
  });
});
