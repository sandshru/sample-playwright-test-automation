import { Locator } from "playwright-core";
import { BaseProductPage } from "./baseProductPage";
import { getBreadcrumbsLocators } from "../locators";

export class SearchResultPage extends BaseProductPage {
  protected breadcrumbsLocators: {
    homeLink: Locator;
    search: Locator;
  };
  readonly searchBreadcrumb: Locator;
  readonly displayModeGridButton: Locator;
  readonly displayModeListButton: Locator;
  readonly noticeMessageLocator: Locator;

  constructor(page) {
    super(page);

    this.breadcrumbsLocators = getBreadcrumbsLocators(page);
    this.searchBreadcrumb = this.breadcrumbsLocators.search;
    this.displayModeGridButton = page.locator(".mode-grid");
    this.displayModeListButton = page.locator(".mode-list");
    this.noticeMessageLocator = page.locator(".notice");
  }

  getSearchResultsHeadingLocator(searchTerm: string): Locator {
    return this.page
      .getByRole("heading", { name: `Search results for: \'${searchTerm}\'` })
      .locator("span");
  }

  async getSearchResultsTitle() {
    return this.page.title();
  }

  async getProductTitles(count: number) {
    let titlesArray: string[] = [];
    count = count >= 12 ? 12 : count;
    for (let i = 0; i < count; i++) {
      titlesArray.push(
        await this.productTileLocators.productTitle(i).innerText()
      );
    }
    return titlesArray;
  }

  async getSearchResultsCount() {
    const itemCountText = await this.itemCountLocator.textContent();
    if (!itemCountText) {
      throw new Error("Item count text is empty");
    }
    console.log(`${itemCountText} items found by UI search`);
    return Number(itemCountText);
  }
}
