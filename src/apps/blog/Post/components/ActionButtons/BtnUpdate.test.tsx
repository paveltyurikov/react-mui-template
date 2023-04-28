import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { INCORRECT_DATA } from "~/tests/blog/Post";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import PostApi from "../../api";
import BtnUpdatePost from "./BtnUpdate";


const EXISTING_POST = {
  id: "test-uuid",
  title: "ExistingPostTitle",
  content: "ExistingPostContent",
};

const CORRECT_DATA = {
  title: "PostTitle",
  content: "PostContent",
};

describe("BtnUpdatePost", () => {
  it("should render correctly", async () => {
    renderWithAllProviders(BtnUpdatePost, {
      children: "Update Post",
      post: EXISTING_POST,
    });

    const button = await screen.getByTestId("Post-update-btn");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Update Post");
    // open dialog
    await act(() => userEvent.click(button));

    const dialogTitle = await screen.getByTestId("dialog-title");
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    const dialogBtnCancel = await screen.getByTestId("btn-dialog-cancel");

    expect(dialogTitle.textContent).toBe("Update Post");
    expect(dialogBtnSubmit.textContent).toBe("Update");
    expect(dialogBtnSubmit).toBeDisabled();
    expect(dialogBtnCancel.textContent).toBe("Cancel");
    expect(dialogBtnCancel).toBeEnabled();
  });
  it("should handle submit success", async () => {
    const updatePost = vi.spyOn(PostApi, "update");
    renderWithAllProviders(BtnUpdatePost, {
      children: "Update Post",
      post: EXISTING_POST,
    });
    const button = await screen.getByTestId("Post-update-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeDisabled();
    const titleField = screen.getByLabelText("title");
    const contentField = screen.getByPlaceholderText("Type your post here...");
    await act(() => userEvent.clear(titleField));
    await act(() => userEvent.clear(contentField));
    await act(() => userEvent.type(titleField, CORRECT_DATA.title));
    await act(() => userEvent.type(contentField, CORRECT_DATA.content));
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.getByTestId("update-post-success-notify");
    expect(notify.textContent).toBe("Post updated");
    expect(updatePost).toHaveBeenCalledTimes(1);
    expect(updatePost).toHaveBeenCalledWith(EXISTING_POST.id, {
      id: EXISTING_POST.id,
      ...CORRECT_DATA,
    });
  });
  it("should handle submit error", async () => {
    const updatePost = vi.spyOn(PostApi, "update");
    renderWithAllProviders(BtnUpdatePost, {
      children: "Update Post",
      post: EXISTING_POST,
    });
    const button = await screen.getByTestId("Post-update-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeDisabled();
    const titleField = screen.getByLabelText("title");
    const contentField = screen.getByPlaceholderText("Type your post here...");
    await act(() => userEvent.clear(titleField));
    await act(() => userEvent.clear(contentField));
    await act(() => userEvent.type(titleField, INCORRECT_DATA.title));
    await act(() => userEvent.type(contentField, INCORRECT_DATA.content));
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.getByTestId("update-post-error-notify");
    expect(notify.textContent).toBe("Failed update Post");
    expect(updatePost).toHaveBeenCalledTimes(1);
    expect(updatePost).toHaveBeenCalledWith(EXISTING_POST.id, {
      id: EXISTING_POST.id,
      ...INCORRECT_DATA,
    });
  });
});
