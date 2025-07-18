import { Page, Locator, expect } from "@playwright/test";
import { 
    getHeaderLocators, 
    getCookieConsentDialogLocators,
    getAdPopupLocators 
} from "../locators";

export class BasePage {
  protected page: Page;

  readonly logoLink: Locator;
  readonly searchBox: Locator;
  readonly searchIconSubmitButton: Locator;

  readonly header: Locator;
  readonly headerLinks: Locator;
  readonly headerGreeting: Locator;
  readonly signInLink: Locator;
  readonly createAccountLink: Locator;

  readonly navBar: Locator;
  readonly whatsNewLink: Locator;
  readonly womensLink: Locator;
  readonly womensTopsLink: Locator;
  readonly womensTopsJacketsLink: Locator;
  readonly womensTopsHoodiesAndSweatshirtsLink: Locator;
  readonly womensTopsTeesLink: Locator;
  readonly womensTopsBrasAndTanksLink: Locator;
  readonly womensBottomsLink: Locator;
  readonly womensBottomsPantsLink: Locator;
  readonly womensBottomsShortsLink: Locator;
  readonly mensLink: Locator;
  readonly mensTopsLink: Locator;
  readonly mensTopsJacketsLink: Locator;
  readonly mensTopsHoodiesAndSweatshirtsLink: Locator;
  readonly mensTopsTeesLink: Locator;
  readonly mensTopsBrasAndTanksLink: Locator;
  readonly mensBottomsLink: Locator;
  readonly mensBottomsPantsLink: Locator;
  readonly mensBottomsShortsLink: Locator;
  readonly gearLink: Locator;
  readonly gearBagsLink: Locator;
  readonly gearFitnessEquipmentLink: Locator;
  readonly gearWatchesLink: Locator;
  readonly trainingLink: Locator;
  readonly trainingVideoDownloadLink: Locator;
  readonly saleLink: Locator;

  readonly cookieConsentDialog: Locator;
  readonly consentButton: Locator;
  readonly manageOptionsButton: Locator;

  readonly adPopup: Locator;
  readonly closeAdPopupButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logoLink = page.getByRole('link', { name: 'store logo' })
    this.searchBox = page.getByRole('combobox', { name: ' Search' })
    this.searchIconSubmitButton = page.getByLabel('Search');

    const headerLocators = getHeaderLocators(page);
    this.header = headerLocators.header;
    this.headerLinks = headerLocators.headerLinks;
    this.headerGreeting = headerLocators.headerGreeting;
    this.signInLink = headerLocators.signInLink;
    this.createAccountLink = headerLocators.createAccountLink;

    this.navBar = page.locator('#ui-id-2');
    this.whatsNewLink = page.locator('#ui-id-3');
    this.womensLink = page.locator('#ui-id-4');
    this.womensTopsLink = page.locator('#ui-id-9');
    this.womensTopsJacketsLink = page.locator('#ui-id-11');
    this.womensTopsHoodiesAndSweatshirtsLink = page.locator('#ui-id-12');
    this.womensTopsTeesLink = page.locator('#ui-id-13');
    this.womensTopsBrasAndTanksLink = page.locator('#ui-id-14');
    this.womensBottomsLink = page.locator('#ui-id-10');
    this.womensBottomsPantsLink = page.locator('#ui-id-15');
    this.womensBottomsShortsLink = page.locator('#ui-id-16');
    this.mensLink = page.locator('#ui-id-5');
    this.mensTopsLink = page.locator('#ui-id-17');
    this.mensTopsJacketsLink = page.locator('#ui-id-19');
    this.mensTopsHoodiesAndSweatshirtsLink = page.locator('#ui-id-20');
    this.mensTopsTeesLink = page.locator('#ui-id-21');
    this.mensTopsBrasAndTanksLink = page.locator('#ui-id-22');
    this.mensBottomsLink = page.locator('#ui-id-18');
    this.mensBottomsPantsLink = page.locator('#ui-id-23');
    this.mensBottomsShortsLink = page.locator('#ui-id-24');
    this.gearLink = page.locator('#ui-id-6');
    this.gearBagsLink = page.locator('#ui-id-25');
    this.gearFitnessEquipmentLink = page.locator('#ui-id-26');
    this.gearWatchesLink = page.locator('#ui-id-27');
    this.trainingLink = page.locator('#ui-id-7');
    this.trainingVideoDownloadLink = page.locator('#ui-id-28');
    this.saleLink = page.locator('#ui-id-8');

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

  async searchForProduct(query: string) {
    await this.searchBox.fill(query);
    await this.searchIconSubmitButton.click();
  }

  async expectLoggedIn(firstname: string, lastname: string) {
    await this.page.waitForLoadState()
    expect(await this.headerGreeting.innerText()).toContain(`Welcome, ${firstname} ${lastname}!`);
  }
}
