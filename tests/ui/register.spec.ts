import { test, expect } from "../../fixtures/page-fixture.ts";

test("Register test", async ({ page, homePage, registerPage }) => {
  const account = crypto.randomUUID(); // random account name
  const password = "testing143"; // password
  const fullName = "testing playwright"; // full name

  // const homePage = new HomePage(page);
  // const registerPage = new RegisterPage(page);
  // Navigate to the login page (demo1.cybersoft.edu.vn)
  await page.goto("https://demo1.cybersoft.edu.vn/");

  //click "Đăng ký" button
  homePage.getNavbarComponent().navigateToRegister();

  // nhập "tài khoản"
  await registerPage.enterAccount(account);

  // nhập "mật khẩu"
  await registerPage.enterPassword(password);

  // nhập "nhập lại mật khẩu"
  await registerPage.enterConfirmPassword(password);

  //nhập "họ tên"
  await registerPage.enterFullName(fullName);

  // nhập "email"
  await registerPage.enterEmail(`${account}@gmail.com`);

  //click "Đăng ký" button
  await registerPage.clickRegister();

  const lblRegis = page.getByRole("heading", {
    name: "Đăng ký thành công",
  });
  await expect(lblRegis).toBeVisible();
});
