import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import NotesApi from "~/client/notes";
import { NON_EXISTING_POST_ID } from "~/tests/notes/note";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import BtnDeleteNote from "./BtnDelete";

const EXISTING_POST = {
  id: "test-uuid",
  title: "ExistingNoteTitle",
  content: "ExistingNoteContent",
};

describe("BtnDeleteNote", () => {
  it("should render correctly", async () => {
    renderWithAllProviders(BtnDeleteNote, {
      children: "Delete Note",
      note: EXISTING_POST,
    });

    const button = await screen.getByTestId("Note-delete-btn");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Delete Note");
    // open dialog
    await act(() => userEvent.click(button));

    const dialogTitle = await screen.getByTestId("dialog-title");
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    const dialogBtnCancel = await screen.getByTestId("dialog-btn-cancel");

    expect(dialogTitle.textContent).toBe("Delete Note?");
    expect(dialogBtnSubmit.textContent).toBe("Delete");
    expect(dialogBtnCancel.textContent).toBe("Cancel");
    expect(dialogBtnSubmit).toBeEnabled();
    expect(dialogBtnCancel).toBeEnabled();
  });
  it("should handle submit success", async () => {
    const updateNote = vi.spyOn(NotesApi, "delete");
    renderWithAllProviders(BtnDeleteNote, {
      children: "Delete Note",
      note: EXISTING_POST,
    });
    const button = await screen.getByTestId("Note-delete-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.getByTestId("delete-note-success-notify");
    expect(notify.textContent).toBe("Note deleted");
    expect(updateNote).toHaveBeenCalledTimes(1);
    expect(updateNote).toHaveBeenCalledWith(EXISTING_POST.id);
  });
  it("should handle submit error", async () => {
    const updateNote = vi.spyOn(NotesApi, "delete");
    renderWithAllProviders(BtnDeleteNote, {
      children: "Delete Note",
      note: { ...EXISTING_POST, id: NON_EXISTING_POST_ID },
    });
    const button = await screen.getByTestId("Note-delete-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.getByTestId("delete-note-error-notify");
    expect(notify.textContent).toBe("Failed to delete Note");
    expect(updateNote).toHaveBeenCalledTimes(1);
    expect(updateNote).toHaveBeenCalledWith(NON_EXISTING_POST_ID);
  });
});
