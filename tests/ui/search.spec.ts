import { test } from "../../fixtures/searchFixture";
import { searchProducts } from "../../api/search-data-api";
import { expect } from "@playwright/test";

test.describe("Search Tests", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateTo();
    await homePage.consentButton.click();
  });

  const testData = ["Shoes", "Sweat", "Rain coat", "Joggers", "shorts"];

  for (const testItem of testData) {
    test(`should search for a ${testItem} and verify results`, async ({
      homePage,
      searchResultPage,
    }) => {
      const searchTerm = testItem;
      const searchAPIResults = await searchProducts(testItem);
      await homePage.searchForProduct(searchTerm);
      const resultsTitle = await searchResultPage.getSearchResultsTitle();
      expect(resultsTitle).toContain(searchTerm);
      if (searchAPIResults.total_count) {
        const resultsCount = await searchResultPage.getSearchResultsCount();
        expect(resultsCount).toBe(searchAPIResults.total_count);
      } else {
        await expect(searchResultPage.noticeMessageLocator).toContainText(
          "Your search returned no results."
        );
      }
    });
  }
});
