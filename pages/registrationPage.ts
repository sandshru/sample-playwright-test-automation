import { BasePage } from "./basePage";
import { Page } from "@playwright/test";

export class RegistrationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateTo() {
    await this.page.goto("/customer/account/create/");
  }

  async getTitle() {
    return this.page.title();
  }
}