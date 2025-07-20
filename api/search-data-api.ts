import { apiClient } from "./apiClient";
import { SearchResponse } from "../interfaces/search-data";

export const searchProducts = async (query: string) => {
  const response = await apiClient.get<SearchResponse>(`/search`, {
    params: {
      "searchCriteria[requestName]": "quick_search_container",
      "searchCriteria[filterGroups][0][filters][0][field]": "search_term",
      "searchCriteria[filterGroups][0][filters][0][value]": query,
    },
  });
  return response.data;
};
