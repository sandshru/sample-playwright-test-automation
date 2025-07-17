import { Page, Locator } from '@playwright/test';

export const getCookieConsentDialogLocators = (page: Page) => ({
  cookieConsentDialog: page.getByRole('dialog', { name: 'Software Testing Board asks' }),
  consentButton: page.getByRole('button', { name: 'Consent' }),
  manageOptionsButton: page.getByRole('button', { name: 'Manage options' })
})

export const getAdPopupLocators = (page: Page) => ({
  adPopup: page.locator('iframe[name="aswift_3"]'),
  closeButton: page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' })
})

export const getHeaderLocators = (page: Page) => {
    const header = page.locator('div.panel.header');
    const headerLinks = header.locator('ul.header.links')
    return {
        header,
        headerLinks,
        headerGreeting: headerLinks.locator('span.logged-in'),
        signInLink: page.getByRole('link', { name: 'Sign In' }),
        createAccountLink: page.getByRole('link', { name: 'Create an Account' }),
    };
}

export const getBreadcrumbsLocators = (page: Page) => {
  const breadcrumbs = page.locator('.breadcrumbs');
  return {
    breadcrumbs,
    homeLink: breadcrumbs.locator('li.home'),
    search: breadcrumbs.locator('li.search'),
    whatsNew: breadcrumbs.locator('li.category38'),
    women: breadcrumbs.locator('li.category20'),
    womensTops: breadcrumbs.locator('li.catgegory21'),
    womensTopsJackets: breadcrumbs.locator('li.category23'),
    womensTopsHoodiesAndSweatshirts: breadcrumbs.locator('li.category24'),
    womensTopsTees: breadcrumbs.locator('li.category25'),
    womensTopsBrasAndTanks: breadcrumbs.locator('li.category26'),
    womensBottoms: breadcrumbs.locator('li.category22'),
    womensBottomsPants: breadcrumbs.locator('li.category27'),
    womensBottomsShorts: breadcrumbs.locator('li.category28'),
    men: breadcrumbs.locator('li.category11'),
    mensTops: breadcrumbs.locator('li.catgegory12'),
    mensTopsJackets: breadcrumbs.locator('li.category14'),
    mensTopsHoodiesAndSweatshirts: breadcrumbs.locator('li.category15'),
    mensTopsTees: breadcrumbs.locator('li.category16'),
    mensTopsBrasAndTanks: breadcrumbs.locator('li.category17'),
    mensBottoms: breadcrumbs.locator('li.category13'),
    mensBottomsPants: breadcrumbs.locator('li.category18'),
    mensBottomsShorts: breadcrumbs.locator('li.category19'),
    gear: breadcrumbs.locator('li.category3'),
    gearBags: breadcrumbs.locator('li.category4'),
    gearFitnessEquipment: breadcrumbs.locator('li.category5'),
    gearWatches: breadcrumbs.locator('li.category6'),
    training: breadcrumbs.locator('li.category9'),
    trainingVideoDownload: breadcrumbs.locator('li.category10'),
    sale: breadcrumbs.locator('li.category37')
  }
}

export const getProductTileLocators = (page: Page) => {
  const productTile = page.locator('li.product-item');
  return {
    nthProductTile: (index: number) => productTile.nth(index),
    productTitle: (index: number) => productTile.nth(index).locator('product-item-name'),
    productPrice: (index: number) => productTile.nth(index).locator('.price-wrapper'),
    addToCartButton: (index: number) => productTile.nth(index).locator('button.tocart'),
    addToWishListButton: (index: number) => productTile.nth(index).locator('a.towishlist'),
    addToCompareButton: (index: number) => productTile.nth(index).locator('a.tocompare'),
  }
}

// export const selectItemSize = ()