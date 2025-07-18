import { BasePage } from "./basePage";
import { Page, Locator, expect } from "@playwright/test";

export class AccountPage extends BasePage {
    readonly accountNotificationLocator: Locator;

    constructor(page: Page ){
        super(page);

        this.accountNotificationLocator = page.getByRole('alert').locator('div').first()
    }

    async navigateTo() {
        await this.page.goto("/customer/account");
    }

    async getTitle() {
        return this.page.title();
    }

    async contactInformationVisible(firstname: string, lastname: string, email: string) {
        const contactInfoString = firstname + ' ' + lastname + ' ' + email;
        await this.page.getByText(contactInfoString).waitFor({ state: 'visible' });
    }

    async expectSuccessfulRegistrationNotification() {
        await this.accountNotificationLocator.waitFor({ state: 'visible' });
        const notificationText = await this.accountNotificationLocator.textContent();
        if (!notificationText) {
            throw new Error('Account notification text is empty');
        }
        console.log(`Account Notification: ${notificationText}`);
        expect(notificationText).toContain('Thank you for registering with Main Website Store.');
    }
    

}