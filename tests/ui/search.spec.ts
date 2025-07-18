import { test } from '../../fixtures/loginRegistrationFixture';



test.describe('Search Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateTo();
  });

  const testData = [
    'Trainers',
    'Sweat',
    'Rain coat',
    'Joggers',
    'shorts',
  ];

  for(const testItem of testData) {
    test(`should search for a ${testItem} and verify results`, async ({ 
    homePage 
    }) => {
    const searchTerm = testItem;
    await homePage.searchForProduct(searchTerm);
    const resultsTitle = await homePage.getSearchResultsTitle();
    expect(resultsTitle).toContain(searchTerm);
    const resultsCount = await homePage.getSearchResultsCount();
    // expect results count from UI matches expected value from API
    expect(resultsCount).toBeGreaterThan(0);
  });
  }
});