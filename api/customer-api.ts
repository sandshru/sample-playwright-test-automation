import { apiClient } from './apiClient';
import { BaseCustomer, CustomerResponse } from '../interfaces/customer-data';

const BASE_BEARER_TOKEN = process.env.API_BASE_BEARER_TOKEN || '';

// --- 1. Create customer (public endpoint) ---
export async function createCustomer(payload: BaseCustomer): Promise<CustomerResponse> {
  const authClient = authenticatedClient(BASE_BEARER_TOKEN);
  const response = await authClient.post('/customers', payload);
  return response.data;
}

// --- 2. Generate auth token for a customer ---
export async function generateCustomerToken(email: string, password: string): Promise<string> {
  const response = await apiClient.post('/integration/customer/token', {
    username: email,
    password: password,
  });
  return response.data; // token is usually just a string
}

// --- Helper: Create an authenticated Axios client ---
function authenticatedClient(token: string) {
  return apiClient.create({
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function getCustomerIDByToken(token: string): Promise<number> {
    const authClient = authenticatedClient(token);
    const response = await authClient.get('/customers/me');
    return response.data.id;
}

// --- 3. Get customer by ID (requires token) ---
export async function getCustomer(token: string): Promise<CustomerResponse> {
  const authClient = authenticatedClient(token);
  const response = await authClient.get(`/customers/me`);
  return response.data;
}

// --- 4. Delete customer by ID (requires token) ---
export async function deleteCustomer(customerId: number, token: string): Promise<boolean> {
  const authClient = authenticatedClient(token);
  const response = await authClient.delete(`/customers/${customerId}`);
  return response.status === 200 || response.status === 204;
}
