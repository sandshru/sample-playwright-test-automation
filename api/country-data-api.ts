import { apiClient } from "./apiClient";
import { CountryIdResponse } from "../interfaces/country-data";

export const getCountryByCode = async (code: string) => {
  const response = await apiClient.get<CountryIdResponse>(`/directory/countries/${code}`);
  return response.data;
};
