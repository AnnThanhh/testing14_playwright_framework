import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage.ts";
import { TimeOutConstants } from "../../constants/TimeOutConstants.ts";

export class NavbarComponent extends BasePage {
  private registerLink: Locator;
  private loginLink: Locator;

  constructor(page: Page) {
    super(page);
    this.registerLink = page.getByRole("link", { name: "Đăng Ký" });
    this.loginLink = page.getByRole("link", { name: "Đăng Nhập" });
  }

  //phương thức: các hành động trên thanh điều hướng
  async navigateToRegister(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.click(this.registerLink, timeOut);
  }

  async navigateToLogin(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    await this.click(this.loginLink, timeOut);
  }
}
