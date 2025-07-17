import {test as base} from '@playwright/test';
import {AccountPage} from '../pages/accountPage';
import {HomePage} from '../pages/homePage';
import {LoginPage} from '../pages/loginPage';
import {RegistrationPage} from '../pages/registrationPage';

export const test = base.extend<{
  accountPage: AccountPage;
  homePage: HomePage;
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
}>({
  accountPage: async ({page}, use) => {
    await use(new AccountPage(page));
  },
  homePage: async ({page}, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page));
  },
  registrationPage: async ({page}, use) => {
    await use(new RegistrationPage(page));
  },
});