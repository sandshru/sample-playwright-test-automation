import { BasePage } from "./basePage";
import { Page, Locator } from "@playwright/test";

export class RegistrationPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name*' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name*' });
    this.emailInput = page.getByRole('textbox', { name: 'Email*' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password*', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password*' });
    this.createAccountButton = page.getByRole('button', { name: 'Create an Account' });
  }

  async navigateTo() {
    await this.page.goto("/customer/account/create/");
  }

  async getTitle() {
    return this.page.title();
  }
}