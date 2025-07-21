import { apiClient } from "./apiClient";
import { gqlClient } from "./gqlClient";
import {
  SearchResponse,
  GQLProductSearchResponse,
} from "../interfaces/search-data";

export const searchProduct = async (query: string) => {
  const response = await apiClient.get<SearchResponse>(`/search`, {
    params: {
      "searchCriteria[requestName]": "quick_search_container",
      "searchCriteria[filterGroups][0][filters][0][field]": "search_term",
      "searchCriteria[filterGroups][0][filters][0][value]": query,
    },
  });
  return response.data;
};

export const searchProductGQL = async (searchTerm: string) => {
  const response = await gqlClient.post<GQLProductSearchResponse>("", {
    query: `
      query SearchProducts($search: String!) {
        products(search: $search) {
          total_count
          items {
            sku
            name
            description { html }
            ... on ConfigurableProduct {
              configurable_options {
                label
                values {
                  label
                }
              }
            }
          }
        }
      }
    `,
    variables: { search: searchTerm },
  });

  return response.data;
};
