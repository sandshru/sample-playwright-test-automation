import { BaseCustomer } from "../interfaces/customer-data";

let customerState: BaseCustomer | null = null;

export const setCustomerState = (customer: BaseCustomer) => {
    customerState = customer;
};

export const getCustomerState = (): BaseCustomer => {
    if (!customerState) {
        throw new Error("No customer state found");
    }
    return customerState;
};

export const clearCustomerState = () => {
    customerState = null;
};