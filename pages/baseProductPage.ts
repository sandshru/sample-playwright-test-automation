import { BasePage } from "./basePage";
import { getBreadcrumbsLocators, getProductTileLocators } from "../locators";
import { Page, Locator, expect } from "@playwright/test";

export class BaseProductPage extends BasePage {
  protected breadcrumbsLocators: {
    homeLink: Locator;
  };
  readonly homeLinkBreadcrumb: Locator;
  readonly productTileLocators: {
    nthProductTile: (index: number) => Locator;
    productTitle: (index: number) => Locator;
    productPrice: (index: number) => Locator;
    addToCartButton: (index: number) => Locator;
    addToWishListButton: (index: number) => Locator;
    addToCompareButton: (index: number) => Locator;
  };
  readonly itemCountLocator: Locator;
  readonly compareItemsCounter: Locator;

  constructor(page: Page) {
    super(page);

    this.breadcrumbsLocators = getBreadcrumbsLocators(page);
    this.homeLinkBreadcrumb = this.breadcrumbsLocators.homeLink;

    this.compareItemsCounter = page.locator(".block-compare .counter");

    this.productTileLocators = getProductTileLocators(page);
    this.itemCountLocator = page.locator(".toolbar-number").last();
  }

  getCompareItem(index: number): Locator {
    return this.page
      .locator("#compare-items")
      .locator(".product-item")
      .nth(index);
  }

  getWishListItem(index: number): Locator {
    return this.page
      .locator("#wishlist-items")
      .locator(".product-item")
      .nth(index);
  }
}
