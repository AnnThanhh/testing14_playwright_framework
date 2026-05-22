import { LoginPage } from "./../pages/LoginPage";
import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.ts";

test("Login test", async ({ page }) => {
  const account = "testing142"; // account name
  const password = "testing142"; // password

  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  // Navigate to the login page (demo1.cybersoft.edu.vn)
  await page.goto("https://demo1.cybersoft.edu.vn/");
  // Click "Đăng nhập" button
  homePage.getNavbarComponent().navigateToLogin();

  // nhập tài khoản và mật khẩu
  await loginPage.enterAccount(account);
  await loginPage.enterPassword(password);

  // Click "Đăng nhập" button
  await loginPage.clickLogin();
  //Verify "đăng nhập thành công"

  const lblLoginSuccess = page.getByRole("heading", {
    name: "Đăng nhập thành công",
  });

  //assert
  await expect(lblLoginSuccess).toBeVisible();
});
