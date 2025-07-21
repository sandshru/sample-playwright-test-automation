export interface SearchResponse {
  items: Array<{
    id: number;
    custom_attributes: Array<{
      attribute_code: string;
      value: string;
    }>;
  }>;
  aggregations: {
    buckets: Array<{
      name: string;
      values: Array<{
        value: string;
        metrics: string[];
      }>;
    }>;
    bucket_names: string[];
  };
  search_criteria: {
    request_name: string;
    filter_groups: Array<{
      filters: Array<{
        field: string;
        value: string;
        condition_type: string;
      }>;
    }>;
  };
  total_count: number;
}

export interface GQLProductSearchResponse {
  data: ProductsData;
}

interface ProductsData {
  products: Products;
}

interface Products {
  total_count: number;
  items: GQLItem[];
}

interface GQLItem {
  sku: string;
  name: string;
  description: {
    html: string;
  };
  configurable_options: ConfigurableOption[];
}

interface ConfigurableOption {
  label: string;
  values: Array<{
    label: string;
  }>;
}
