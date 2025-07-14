import { test } from '../../fixtures/loginRegistrationFixture';

test.describe('Login and Registration Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateTo();
  });

  test('should register and verify that user is able to log in', async ({ 
    loginPage,
    registrationPage
    }) => {
    await registrationPage.navigateTo();
    const title = await registrationPage.getTitle();
    console.log(`Registration Page Title: ${title}`);
    // Add assertions as needed
  });

  test('should login with valid credentials', async ({ loginPage }) => {
    await loginPage.navigateTo();
    const title = await loginPage.getTitle();
    console.log(`Login Page Title: ${title}`);
    // Add assertions as needed
  });
}); 