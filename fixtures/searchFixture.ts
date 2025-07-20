import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SearchResultPage } from '../pages/searchResultPage';

export const test = base.extend<{
  homePage: HomePage;
  searchResultPage: SearchResultPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  searchResultPage: async ({ page }, use) => {
    await use(new SearchResultPage(page));
  },
});