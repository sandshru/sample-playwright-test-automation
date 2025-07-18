import { BasePage } from './basePage';
import { 
    getBreadcrumbsLocators, 
    getProductTileLocators 
} from '../locators';
import { Page, Locator, expect } from '@playwright/test';

export class BaseProductPage extends BasePage {
    readonly homeLinkBreadcrumb: Locator;
    readonly productTileLocators: {
        nthProductTile: (index: number) => Locator;
        productTitle: (index: number) => Locator;
        productPrice: (index: number) => Locator;
        addToCartButton: (index: number) => Locator;
        addToWishListButton: (index: number) => Locator;
        addToCompareButton: (index: number) => Locator;
    };

    constructor(page: Page) {
        super(page);

        const breadcrumbsLocators = getBreadcrumbsLocators(page);
        this.homeLinkBreadcrumb = breadcrumbsLocators.homeLink;

        this.productTileLocators = getProductTileLocators(page);
    }
}