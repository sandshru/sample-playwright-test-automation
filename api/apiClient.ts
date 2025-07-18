import axios from 'axios';
import { AxiosInstance } from 'axios';

const BASE_URL = process.env.API_BASE_URL || 'https://your-adobe-commerce-instance/rest/V1';

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // optional: timeout: 5000
});

// Optional interceptor for logging/debugging
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);
