import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;

  constructor(page: Page) {
    super(page);

    this.emailInput = page.getByRole('textbox', { name: 'Email*' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password* Password' });
    this.loginButton = page.locator('#send2');
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' });
  }

  async navigateTo() {
    await this.page.goto("/customer/account/login/");
  }

  async getTitle() {
    return this.page.title();
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}