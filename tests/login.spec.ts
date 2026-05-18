import test from "@playwright/test";

test("Login test", async ({ page }) => {
  // Navigate to the login page (demo1.cybersoft.edu.vn)
  await page.goto("https://demo1.cybersoft.edu.vn/");
  // Click "Đăng nhập" button
  await page.getByRole("link", { name: "Đăng Nhập" }).click();
  // nhập tài khoản và mật khẩu
  await page.getByRole("textbox", { name: "Tài Khoản" }).click();
  await page.getByRole("textbox", { name: "Tài Khoản" }).fill("testing142");
  await page.getByRole("textbox", { name: "Mật Khẩu" }).click();
  await page.getByRole("textbox", { name: "Mật Khẩu" }).fill("testing142");
  // Click "Đăng nhập" button
  await page.getByRole("button", { name: "Đăng nhập" }).click();
  //Verify "đăng nhập thành công"
});
