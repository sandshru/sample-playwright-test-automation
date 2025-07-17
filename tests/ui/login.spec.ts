import { test } from '../../fixtures/loginRegistrationFixture';
import { generateUniqueCustomer } from '../../utils/faker-utils';
import {
    createCustomer, 
    generateCustomerToken,
    getCustomerIDByToken,
    getCustomer,
 } from '../../api/customer-api';
import { expect } from '@playwright/test';

test.describe('Login and Registration Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateTo();
  });

  test('should register and verify that the user is logged in', async ({
    accountPage,
    homePage, 
    registrationPage
    }) => {
    const uniqueCustomer = generateUniqueCustomer();
    console.log(`Generated Customer Data: ${JSON.stringify(uniqueCustomer)}`);
    await homePage.consentButton.click();
    await homePage.createAccountLink.click();
    const title = await registrationPage.getTitle();
    console.log(`Registration Page Title: ${title}`);
    await registrationPage.fillRegistrationForm(
        uniqueCustomer.customer.firstname,
        uniqueCustomer.customer.lastname,
        uniqueCustomer.customer.email,
        uniqueCustomer.password,
    );
    await registrationPage.createAccountButton.click();
    const token = await generateCustomerToken(uniqueCustomer.customer.email, uniqueCustomer.password);
    console.log(`Generated Token: ${token}`);
    const customerId = await getCustomerIDByToken(token);
    console.log(`Customer ID: ${customerId}`);
    const customerData = await getCustomer(token);
    expect(customerData.email).toBe(uniqueCustomer.customer.email);
    await accountPage.contactInformationVisible(
        uniqueCustomer.customer.firstname,
        uniqueCustomer.customer.lastname,
        uniqueCustomer.customer.email
    );
    await accountPage.expectSuccessfulRegistrationNotification();
  });

  test('should login with valid credentials', async ({ loginPage }) => {
    const uniqueCustomer = generateUniqueCustomer();
    console.log(`Generated Customer Data: ${JSON.stringify(uniqueCustomer)}`);
    const response = await createCustomer(uniqueCustomer);
    expect(response.email).toBe(uniqueCustomer.customer.email);
    console.log(`Customer created with ID: ${response.id}`);
    await loginPage.navigateTo();
    const title = await loginPage.getTitle();
    console.log(`Login Page Title: ${title}`);
    await loginPage.login(uniqueCustomer.customer.email, uniqueCustomer.password);
    await loginPage.expectLoggedIn(uniqueCustomer.customer.firstname, uniqueCustomer.customer.lastname);
  });
}); 