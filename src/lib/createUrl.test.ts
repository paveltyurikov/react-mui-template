import createUrl from "./createUrl";

describe("createUrl", () => {
  test("should return urls", () => {
    expect(createUrl(["api/", "to", " / companies", "///contacts///"])).toBe(
      "/api/to/companies/contacts/",
    );
  });
});
