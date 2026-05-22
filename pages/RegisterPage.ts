import { Page, Locator } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";

export class RegisterPage extends CommonPage {
  //thuộc tính
  private txtAccount: Locator;
  private txtPassword: Locator;
  private txtConfirmPassword: Locator;
  private txtFullName: Locator;
  private txtEmail: Locator;
  private btnRegister: Locator;

  constructor(page: Page) {
    super(page);
    this.txtAccount = page.getByRole("textbox", { name: "Tài Khoản" });
    this.txtPassword = page.getByRole("textbox", {
      name: "Mật Khẩu",
      exact: true,
    });
    this.txtConfirmPassword = page.getByRole("textbox", {
      name: "Nhập lại mật khẩu",
    });
    this.txtFullName = page.getByRole("textbox", { name: "Họ Tên" });
    this.txtEmail = page.getByRole("textbox", { name: "Email" });
    this.btnRegister = page.getByRole("button", { name: "Đăng ký" });
  }

  //phương thức: các hành động riêng cho trang RegisterPage
  async enterAccount(account: string) {
    await this.txtAccount.fill(account);
  }
  async enterPassword(password: string) {
    await this.txtPassword.fill(password);
  }
  async enterConfirmPassword(password: string) {
    await this.txtConfirmPassword.fill(password);
  }
  async enterFullName(fullName: string) {
    await this.txtFullName.fill(fullName);
  }
  async enterEmail(email: string) {
    await this.txtEmail.fill(email);
  }
  async clickRegister() {
    await this.btnRegister.click();
  }

  async register(account: string, password: string, fullName: string, email: string) {
    await this.enterAccount(account);
    await this.enterPassword(password);
    await this.enterConfirmPassword(password);
    await this.enterFullName(fullName);
    await this.enterEmail(email);
    await this.clickRegister();
  }
}
