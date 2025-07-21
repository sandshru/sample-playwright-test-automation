import { test } from "../../fixtures/searchFixture";
import { searchProductGQL } from "../../api/search-data-api";
import { expect } from "@playwright/test";

test.describe("Search Tests", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateTo();
    const consentVisibility = await homePage.consentButton.isVisible();
    if (consentVisibility) {
      await homePage.consentButton.click();
    }
  });

  const testData = ["Shoes", "Sweat", "Rain coat", "Joggers", "shorts"];

  for (const testItem of testData) {
    test(`should search for a ${testItem} and verify results`, async ({
      homePage,
      searchResultPage,
    }) => {
      const searchTerm = testItem;
      const searchAPIResults = (await searchProductGQL(testItem)).data.products;
      await homePage.searchForProduct(searchTerm);
      console.log(`Submitted search for ${searchTerm}`);
      const resultsTitle = await searchResultPage.getSearchResultsTitle();
      expect(resultsTitle).toContain(searchTerm);
      if (searchAPIResults.total_count) {
        const resultsCount = await searchResultPage.getSearchResultsCount();
        expect(resultsCount).toBe(searchAPIResults.total_count);
        const resultsProductNames = await searchResultPage.getProductTitles(
          searchAPIResults.total_count
        );
        const searchAPIResultNames = searchAPIResults.items.map(
          (item) => item.name
        );
        for (const product of resultsProductNames) {
          expect(searchAPIResultNames.includes(product)).toBeTruthy();
        }
      } else {
        await expect(searchResultPage.noticeMessageLocator).toContainText(
          "Your search returned no results."
        );
      }
    });
  }
});
