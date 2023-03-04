import formatDate from "./formatDate";


describe("formatDate", () => {
  test("should return correct strings", () => {
    expect(formatDate("2000-12-31")).toBe("31.12.2000");
    expect(formatDate("2000-12-31T10:28:36.715Z", "YYYY/MM/DD")).toBe("2000/12/31");
    expect(formatDate("2000-13-20", "YYYY/MM/DD", "bad date")).toBe("bad date");
  });
});
