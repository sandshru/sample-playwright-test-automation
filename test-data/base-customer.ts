import { BaseCustomer } from "../interfaces/customer-data"

export const baseCustomer: BaseCustomer = {
    "customer": {
        "email": "jdoe@example.com",
        "firstname": "Jane",
        "lastname": "Doe",
        "addresses": [{
        "defaultShipping": true,
        "defaultBilling": true,
        "firstname": "Jane",
        "lastname": "Doe",
        "region": {
        "regionCode": "NY",
        "region": "New York",
        "regionId":43
        },
        "postcode": "10755",
        "street": ["123 Oak Ave"],
        "city": "Purchase",
        "telephone": "512-555-1111",
        "countryId": "US"
        }]
    },
    "password": "Password1"
}