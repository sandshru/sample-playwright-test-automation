import { BasePage } from "./basePage";
import { Page } from "@playwright/test";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateTo() {
    await this.page.goto("/customer/account/login/");
  }

  async getTitle() {
    return this.page.title();
  }
}