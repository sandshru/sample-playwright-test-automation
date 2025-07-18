import { BasePage } from "./basePage";
import { Page, Locator } from "@playwright/test";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateTo() {
    await this.page.goto("/");
  }

  async getTitle() {
    return this.page.title();
  }
}
