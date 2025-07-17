import { Page, Locator } from "@playwright/test";
import { 
    getHeaderLocators, 
    getNavBarLocators, 
    getCookieConsentDialogLocators,
    getAdPopupLocators 
} from "../locators";

export class BasePage {
  protected page: Page;

  readonly header: Locator;
  readonly headerLinks: Locator;
  readonly signInLink: Locator;
  readonly createAccountLink: Locator;

  readonly navBar: Locator;
  readonly whatsNewLink: Locator;
  readonly womensLink: Locator;
  readonly mensLink: Locator;
  readonly gearLink: Locator;
  readonly trainingLink: Locator;
  readonly saleLink: Locator;

  readonly cookieConsentDialog: Locator;
  readonly consentButton: Locator;
  readonly manageOptionsButton: Locator;

  readonly adPopup: Locator;
  readonly closeAdPopupButton: Locator;

  constructor(page: Page) {
    this.page = page;

    const headerLocators = getHeaderLocators(page);
    this.header = headerLocators.header;
    this.headerLinks = headerLocators.headerLinks;
    this.signInLink = headerLocators.signInLink;
    this.createAccountLink = headerLocators.createAccountLink;

    const navBarLocators = getNavBarLocators(page);
    this.navBar = navBarLocators.navBar;
    this.whatsNewLink = navBarLocators.whatsNewLink;
    this.womensLink = navBarLocators.womensLink;
    this.mensLink = navBarLocators.mensLink;
    this.gearLink = navBarLocators.gearLink;
    this.trainingLink = navBarLocators.trainingLink;
    this.saleLink = navBarLocators.saleLink;

    const cookieConsentLocators = getCookieConsentDialogLocators(page);
    this.cookieConsentDialog = cookieConsentLocators.cookieConsentDialog;
    this.consentButton = cookieConsentLocators.consentButton;
    this.manageOptionsButton = cookieConsentLocators.manageOptionsButton;

    const adPopupLocators = getAdPopupLocators(page);
    this.adPopup = adPopupLocators.adPopup;
    this.closeAdPopupButton = adPopupLocators.closeButton;
  }

  async acceptCookieConsent() {
    if (await this.cookieConsentDialog.isVisible()) {
        await this.consentButton.click();
    }
  }

  async selectSignIn() {
    await this.signInLink.click();
  }

  async selectCreateAccount() {
    await this.createAccountLink.click();
  }

  
}
