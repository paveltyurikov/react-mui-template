import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { NON_EXISTING_POST_ID } from "~/tests/blog/post";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import PostApi from "../../api";
import BtnDeletePost from "./BtnDelete";


const EXISTING_POST = {
  id: "test-uuid",
  title: "ExistingPostTitle",
  content: "ExistingPostContent",
};

describe("BtnDeletePost", () => {
  it("should render correctly", async () => {
    renderWithAllProviders(BtnDeletePost, {
      children: "Delete Post",
      post: EXISTING_POST,
    });

    const button = await screen.getByTestId("Post-delete-btn");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Delete Post");
    // open dialog
    await act(() => userEvent.click(button));

    const dialogTitle = await screen.getByTestId("dialog-title");
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    const dialogBtnCancel = await screen.getByTestId("dialog-btn-cancel");

    expect(dialogTitle.textContent).toBe("Delete Post?");
    expect(dialogBtnSubmit.textContent).toBe("Delete");
    expect(dialogBtnCancel.textContent).toBe("Cancel");
    expect(dialogBtnSubmit).toBeEnabled();
    expect(dialogBtnCancel).toBeEnabled();
  });
  it("should handle submit success", async () => {
    const updatePost = vi.spyOn(PostApi, "delete");
    renderWithAllProviders(BtnDeletePost, {
      children: "Delete Post",
      post: EXISTING_POST,
    });
    const button = await screen.getByTestId("Post-delete-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.getByTestId("delete-post-success-notify");
    expect(notify.textContent).toBe("Post deleted");
    expect(updatePost).toHaveBeenCalledTimes(1);
    expect(updatePost).toHaveBeenCalledWith(EXISTING_POST.id);
  });
  it("should handle submit error", async () => {
    const updatePost = vi.spyOn(PostApi, "delete");
    renderWithAllProviders(BtnDeletePost, {
      children: "Delete Post",
      post: { ...EXISTING_POST, id: NON_EXISTING_POST_ID },
    });
    const button = await screen.getByTestId("Post-delete-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.getByTestId("delete-post-error-notify");
    expect(notify.textContent).toBe("Failed delete Post");
    expect(updatePost).toHaveBeenCalledTimes(1);
    expect(updatePost).toHaveBeenCalledWith(NON_EXISTING_POST_ID);
  });
});
