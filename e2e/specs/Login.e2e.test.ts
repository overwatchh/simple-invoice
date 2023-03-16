describe("Login", () => {
  beforeAll(async () => {
    await page.goto("https://simple-invoice-93279.web.app/login");
  });

  it('Should show "Required" error messages', async () => {
    //click login button
    await expect(page).toClick("button", { text: "Login" });
    // Required message is displayed
    await expect(page).toMatchTextContent("Required");
  });
  it("Should login failed", async () => {
    //Login with correct credentials
    await expect(page).toFillForm('form[name="loginForm"]', {
      userName: "username",
      password: "password",
    });
    await expect(page).toClick("button", { text: "Login" });
    //Login is rejected
    await expect(page).toMatchTextContent("Rejected");
  });
  it("Should login successfully", async () => {
    //Login with correct credentials
    await expect(page).toFillForm('form[name="loginForm"]', {
      userName: "dung+octopus4@101digital.io",
      password: "Abc@123456",
    });
    await expect(page).toClick("button", { text: "Login" });
    //Logged in successfully text is displayed
    await expect(page).toMatchTextContent("Logged in successfully");
  });
});
