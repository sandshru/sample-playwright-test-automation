
# Magento Demo Test Automation Framework

## Setup

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Install Playwright Browsers:**

    ```bash
    npx playwright install --with-deps
    ```

## Running Tests

*   **Run all tests:**

    ```bash
    npm test
    ```

*   **View the HTML report:**

    After running the tests, an HTML report is generated in the `playwright-report/` directory. Open `playwright-report/index.html` in your browser to view the report.

## Example Tests

The `tests-examples/demo-todo-app.spec.ts` file contains example tests for a demo ToDo application. These tests demonstrate various Playwright features, including:

*   Navigating to a page
*   Creating new ToDo items
*   Marking items as complete
*   Filtering items
*   Editing items
*   Deleting items

## Configuration

The `playwright.config.ts` file configures Playwright. Key settings include:

*   `testDir`: Specifies the directory containing the tests.
*   `fullyParallel`: Enables parallel test execution.
*   `forbidOnly`:  Fails the build if `test.only` is left in the code.
*   `retries`: Configures the number of test retries on CI.
*   `reporter`: Specifies the test reporter (HTML in this case).
*   `use`: Defines shared settings for all projects, such as trace collection.
*   `projects`: Configures projects for different browsers (Chromium, Firefox, WebKit).

## GitHub Actions

The `.github/workflows/playwright.yml` file defines a GitHub Actions workflow that automatically runs the tests on push and pull request events. The workflow:

1.  Checks out the code.
2.  Sets up Node.js.
3.  Installs dependencies.
4.  Installs Playwright browsers.
5.  Runs the Playwright tests.
6.  Uploads the Playwright report as an artifact.