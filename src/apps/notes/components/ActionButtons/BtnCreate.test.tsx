import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import NotesApi from "~/client/notes";
import { INCORRECT_DATA } from "~/tests/notes/note";
import renderWithAllProviders from "~/tests/renderWithAllProviders";
import BtnCreateNote from "./BtnCreate";

const CORRECT_DATA = {
  title: "NoteTitle",
  content: "NoteContent",
};

describe("BtnCreateNote", () => {
  it("should render correctly", async () => {
    renderWithAllProviders(BtnCreateNote, { children: "Create Note" });

    const button = screen.getByTestId("Note-create-btn");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Create Note");
    // open dialog
    await act(() => userEvent.click(button));

    const dialogTitle = screen.getByTestId("dialog-title");
    const dialogBtnSubmit = screen.getByTestId("dialog-btn-submit");
    const dialogBtnCancel = screen.getByTestId("dialog-btn-cancel");

    expect(dialogTitle.textContent).toBe("Create Note");
    expect(dialogBtnSubmit.textContent).toBe("Create");
    expect(dialogBtnSubmit).toBeDisabled();
    expect(dialogBtnCancel.textContent).toBe("Cancel");
    expect(dialogBtnCancel).toBeEnabled();
  });
  it("should handle submit success", async () => {
    const createNote = vi.spyOn(NotesApi, "create");
    renderWithAllProviders(BtnCreateNote, { children: "Create Note" });
    const button = screen.getByTestId("Note-create-btn");
    await act(() => userEvent.click(button));
    const dialogBtnSubmit = screen.getByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeDisabled();
    const titleField = screen.getByLabelText(/title/i);
    const contentField = screen.getByPlaceholderText("Type your note here...");
    await act(() => userEvent.type(titleField, CORRECT_DATA.title));
    await act(() => userEvent.type(contentField, CORRECT_DATA.content));
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.findByTestId("create-note-success-notify");
    expect(notify.textContent).toBe("Note created");
    expect(createNote).toHaveBeenCalledTimes(1);
    expect(createNote).toHaveBeenCalledWith(CORRECT_DATA);
  });
  it("should handle submit error", async () => {
    const createNote = vi.spyOn(NotesApi, "create");
    renderWithAllProviders(BtnCreateNote, { children: "Create Note" });
    const button = screen.getByTestId("Note-create-btn");
    act(() => userEvent.click(button));
    const dialogBtnSubmit = await screen.findByTestId("dialog-btn-submit");
    expect(dialogBtnSubmit).toBeDisabled();
    const titleField = screen.getByLabelText(/title/i);
    const contentField = screen.getByPlaceholderText("Type your note here...");
    await act(() => userEvent.type(titleField, INCORRECT_DATA.title));
    await act(() => userEvent.type(contentField, INCORRECT_DATA.content));
    expect(dialogBtnSubmit).toBeEnabled();
    await act(() => userEvent.click(dialogBtnSubmit));
    const notify = await screen.findByTestId("create-note-error-notify");
    expect(notify.textContent).toBe("Failed to create Note");
    expect(createNote).toHaveBeenCalledTimes(1);
    expect(createNote).toHaveBeenCalledWith(INCORRECT_DATA);
  });
});
