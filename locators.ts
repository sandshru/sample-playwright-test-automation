import { Page, Locator } from '@playwright/test';

export const getCookieConsentDialogLocators = (page: Page) => ({
  cookieConsentDialog: page.getByRole('dialog', { name: 'Software Testing Board asks' }),
  consentButton: page.getByRole('button', { name: 'Consent' }),
  manageOptionsButton: page.getByRole('button', { name: 'Manage options' })
})

export const getHeaderLocators = (page: Page) => {
    const header = page.locator('div.panel.header');
    return {
        header,
        headerLinks: header.locator('ul.header.links'),
        signInLink: page.getByRole('link', { name: 'Sign In' }),
        createAccountLink: page.getByRole('link', { name: 'Create an Account' }),
    };
}

export const getNavBarLocators = (page: Page) => ({
    navBar: page.locator('#ui-id-2'),
    whatsNewLink: page.locator('#ui-id-3'),
    womensLink: page.locator('#ui-id-4'),
    mensLink: page.locator('#ui-id-5'),
    gearLink: page.locator('#ui-id-6'),
    trainingLink: page.locator('#ui-id-7'),
    saleLink: page.locator('#ui-id-8'),
})