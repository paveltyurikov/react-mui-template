import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import NotesApi from "~/client/notes";
import { INCORRECT_DATA } from "~/tests/notes/note";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import BtnUpdateNote from "./BtnUpdate";

const EXISTING_POST = {
  id: "test-uuid",
  title: "ExistingNoteTitle",
  content: "ExistingNoteContent",
};

const CORRECT_DATA = {
  title: "NoteTitle",
  content: "NoteContent",
};

describe("BtnUpdateNote", () => {
  it("should render correctly", async () => {
    renderWithAllProviders(BtnUpdateNote, {
      children: "Update Note",
      note: EXISTING_POST,
    });

    const button = await screen.getByTestId("Note-update-btn");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Update Note");
    // open dialog
    await act(() => userEvent.click(button));

    const dialogTitle = await screen.getByTestId("dialog-title");
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    const dialogBtnCancel = await screen.getByTestId("dialog-btn-cancel");

    expect(dialogTitle.textContent).toBe("Update Note");
    expect(dialogBtnSubmit.textContent).toBe("Update");
    expect(dialogBtnSubmit).toBeDisabled();
    expect(dialogBtnCancel.textContent).toBe("Cancel");
    expect(dialogBtnCancel).toBeEnabled();
  });
  it("should handle submit success", async () => {
    const updateNote = vi.spyOn(NotesApi, "update");
    renderWithAllProviders(BtnUpdateNote, {
      children: "Update Note",
      note: EXISTING_POST,
    });
    const button = await screen.getByTestId("Note-update-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeDisabled();
    const titleField = screen.getByLabelText(/title/i);
    const contentField = screen.getByPlaceholderText("Type your note here...");
    await act(() => userEvent.clear(titleField));
    await act(() => userEvent.clear(contentField));
    await act(() => userEvent.type(titleField, CORRECT_DATA.title));
    await act(() => userEvent.type(contentField, CORRECT_DATA.content));
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.getByTestId("update-note-success-notify");
    expect(notify.textContent).toBe("Note updated");
    expect(updateNote).toHaveBeenCalledTimes(1);
    expect(updateNote).toHaveBeenCalledWith(EXISTING_POST.id, {
      id: EXISTING_POST.id,
      ...CORRECT_DATA,
    });
  });
  it("should handle submit error", async () => {
    const updateNote = vi.spyOn(NotesApi, "update");
    renderWithAllProviders(BtnUpdateNote, {
      children: "Update Note",
      note: EXISTING_POST,
    });
    const button = await screen.getByTestId("Note-update-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeDisabled();
    const titleField = screen.getByLabelText(/title/i);
    const contentField = screen.getByPlaceholderText("Type your note here...");
    await act(() => userEvent.clear(titleField));
    await act(() => userEvent.clear(contentField));
    await act(() => userEvent.type(titleField, INCORRECT_DATA.title));
    await act(() => userEvent.type(contentField, INCORRECT_DATA.content));
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.getByTestId("update-note-error-notify");
    expect(notify.textContent).toBe("Failed to update Note");
    expect(updateNote).toHaveBeenCalledTimes(1);
    expect(updateNote).toHaveBeenCalledWith(EXISTING_POST.id, {
      id: EXISTING_POST.id,
      ...INCORRECT_DATA,
    });
  });
});
