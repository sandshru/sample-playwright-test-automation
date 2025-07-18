import {test, expect} from '@playwright/test';
import { generateUniqueCustomer } from '../../utils/faker-utils';
import { 
  getCustomerState, 
  setCustomerState,
} from '../../utils/customer-state';
import { 
  createCustomer, 
  getCustomerIDByToken,
  generateCustomerToken,
  deleteCustomer
} from '../../api/customer-api';

test.describe('Customer API Tests', () => {
  test.describe.configure({ mode: 'serial' }); // Ensure tests run in serial to avoid conflicts with customer creation/deletion

  test('Create Customer API Test', async () => {
    const baseCustomer = await generateUniqueCustomer();
    console.log(`Generated Customer: ${JSON.stringify(baseCustomer)}`);
    setCustomerState(baseCustomer);
    const response = await createCustomer(baseCustomer);
    expect(response.email).toBe(baseCustomer.customer.email);
    console.log(`Customer created with ID: ${response.id}`);
  });

  // Requires Admin user token
  test('Delete Customer API Test', async () => {
    const baseCustomer = getCustomerState();
    const token = await generateCustomerToken(baseCustomer.customer.email, baseCustomer.password);
    const customerId = await getCustomerIDByToken(token);
    
    const response = await deleteCustomer(customerId, token);
    console.log(`Response status: ${response}`);

    expect(response).toBeTruthy();
    console.log(`Customer with ID ${customerId} deleted successfully.`);
  });
})
