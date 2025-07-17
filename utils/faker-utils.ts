import {faker} from '@faker-js/faker';
import { baseCustomer } from '../test-data/base-customer';


function getBaseCustomerData() {
    return baseCustomer;
}

export function generateUniqueCustomer() {
    const baseCustomer = getBaseCustomerData();
    return {
        ...baseCustomer,
        customer: {
            ...baseCustomer.customer,
            email: faker.internet.email(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            addresses: [{
                ...baseCustomer.customer.addresses[0],
                firstname: faker.person.firstName(),
                lastname: faker.person.lastName(),
                city: faker.location.city(),
                postcode: faker.location.zipCode(),
                street: [faker.location.streetAddress()],
                region: {
                    regionCode: faker.location.state({abbreviated: true}),
                    region: faker.location.state(),
                    regionId: faker.number.int({ min: 1, max: 100 })
                },
                countryId: 'US', // Assuming US for simplicity
                telephone: faker.phone.number(),
            }],
        },
        password: faker.helpers.fromRegExp('[0-9]{3}[a-z]{3}[A-Z]{3}') // At least one digit, one lowercase, and one uppercase letter
    };
}