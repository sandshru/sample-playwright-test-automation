import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly emailError: Locator;
  readonly passwordInput: Locator;
  readonly passwordError: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly errorMessageLocator: Locator;

  constructor(page: Page) {
    super(page);

    this.errorMessageLocator = page.locator(".message-error")
    this.emailInput = page.getByRole("textbox", { name: "Email*" });
    this.emailError = page.locator('#email-error')
    this.passwordInput = page.getByRole("textbox", {
      name: "Password* Password",
    });
    this.passwordError = page.locator('#password-error')
    this.loginButton = page.locator("#send2").first();
    this.forgotPasswordLink = page.getByRole("link", {
      name: "Forgot Your Password?",
    });
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
