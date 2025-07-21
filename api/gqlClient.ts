import axios from "axios";
import { AxiosInstance } from "axios";

const GQL_URL = process.env.GQL_URL || "";

export const gqlClient: AxiosInstance = axios.create({
  baseURL: GQL_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // optional: timeout: 5000
});

// Optional interceptor for logging/debugging
// gqlClient.interceptors.request.use(request => {
//   console.log('Starting Request', JSON.stringify(request, null, 2));
//   return request;
// });

gqlClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);
