import {faker} from '@faker-js/faker';
import { baseCustomer } from '../test-data/base-customer';
import { getCountryByCode } from '../api/country-data-api';


function getBaseCustomerData() {
    return baseCustomer;
}

export async function generateUniqueCustomer() {
    const baseCustomer = getBaseCustomerData();
    let usCountryRegionData = await getCountryByCode('US')
    const randomRegion = usCountryRegionData.available_regions[Math.floor(Math.random() * usCountryRegionData.available_regions.length)];
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
                    regionCode: randomRegion.code,
                    region: randomRegion.name,
                    regionId: Number(randomRegion.id)
                },
                countryId: 'US', // Assuming US for simplicity
                telephone: faker.phone.number(),
            }],
        },
        password: faker.helpers.fromRegExp('[0-9]{3}[a-z]{3}[A-Z]{3}') // At least one digit, one lowercase, and one uppercase letter
    };
}