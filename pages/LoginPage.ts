import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage.ts";

export class LoginPage extends CommonPage {
  //thuộc tính
  private txtAccount: Locator;
  private txtPassword: Locator;
  private btnLogin: Locator;

  constructor(page: Page) {
    super(page);
    this.txtAccount = page.getByRole("textbox", { name: "Tài Khoản" });
    this.txtPassword = page.getByRole("textbox", { name: "Mật Khẩu" });
    this.btnLogin = page.getByRole("button", { name: "Đăng nhập" });
  }

  //phương thức: các hành động riêng cho trang LoginPage
  async enterAccount(account: string) {
    await this.txtAccount.fill(account);
  }
  async enterPassword(password: string) {
    await this.txtPassword.fill(password);
  }
  async clickLogin() {
    await this.btnLogin.click();
  }

  async login(account: string, password: string) {
    await this.enterAccount(account);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
