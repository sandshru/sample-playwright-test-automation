export interface CustomerAddress {
    defaultShipping: boolean;
    defaultBilling: boolean;
    firstname: string;
    lastname: string;
    region: {
        regionCode: string;
        region: string;
        regionId: number;
    };
    postcode: string;
    street: string[];
    city: string;
    telephone: string;
    countryId: string;
}

export interface BaseCustomer {
    customer: {
        email: string;
        firstname: string;
        lastname: string;
        addresses: CustomerAddress[];
    };
    password: string;
}

export interface CustomerResponse {
    id: number;
    group_id: number;
    default_billing: string;
    default_shipping: string;
    created_at: string;
    updated_at: string;
    created_in: string;
    email: string;
    firstname: string;
    lastname: string;
    store_id: number;
    website_id: number;
    addresses: Array<{
        id: number;
        customer_id: number;
        region: {
            region_code: string;
            region: string;
            region_id: number;
        };
        region_id: number;
        country_id: string;
        street: string[];
        telephone: string;
        postcode: string;
        city: string;
        firstname: string;
        lastname: string;
        default_shipping: boolean;
        default_billing: boolean;
    }>;
    disable_auto_group_change: number;
    extension_attributes: {
        is_subscribed: boolean;
    };
}
