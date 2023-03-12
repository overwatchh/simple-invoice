import { load, getTitle } from "../pageObjects/index";

describe("React App", () => {
  it("should be titled 'React App'", async () => {
    await load();
    // await expect(page).toFillForm("form", {
    //   userName: "username@gmail.com",
    //   password: "password",
    // });
    expect(await getTitle()).toMatch("React App");
  });
});
