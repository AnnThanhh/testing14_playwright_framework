import test from "@playwright/test";

test("Register test", async ({ page }) => {
  // Navigate to the login page (demo1.cybersoft.edu.vn)
  await page.goto("https://demo1.cybersoft.edu.vn/");
  //click "Đăng ký" button
  await page.getByRole("link", { name: "Đăng Ký" }).click();
  // nhập "tài khoản"
  await page.getByRole("textbox", { name: "Tài Khoản" }).click();
  await page.getByRole("textbox", { name: "Tài Khoản" }).fill("testing143");
  await page.getByRole("textbox", { name: "Tài Khoản" }).press("Tab");
  // nhập "mật khẩu"
  await page
    .getByRole("textbox", { name: "Mật Khẩu", exact: true })
    .fill("testing143");
  await page
    .getByRole("textbox", { name: "Mật Khẩu", exact: true })
    .press("Tab");
  // nhập "nhập lại mật khẩu"
  await page.getByRole("button").first().press("Tab");
  await page
    .getByRole("textbox", { name: "Nhập lại mật khẩu" })
    .fill("testing143");
  await page.getByRole("textbox", { name: "Nhập lại mật khẩu" }).press("Tab");
  await page.getByRole("button").nth(1).press("Tab");
  //nhập "họ tên"
  await page
    .getByRole("textbox", { name: "Họ Tên" })
    .fill("testing playwright");
  await page.getByRole("textbox", { name: "Họ Tên" }).press("Tab");
  // nhập "email"
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("testingplaywright@gmail.com");

  //click "Đăng ký" button
  await page.getByRole("button", { name: "Đăng ký" }).click();
});
