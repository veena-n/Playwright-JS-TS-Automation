# Allure Report Integration

This project publishes both the standard Playwright HTML report and an Allure report. Test result files are written to `allure-results`; the generated static report is written to `allure-report`.

## 1. Install prerequisites

Install the following once:

- Node.js and npm
- Java 8 or newer, required by the Allure command-line tool

Verify the installations from PowerShell:

```powershell
node --version
npm --version
java -version
```

## 2. Install project dependencies

From the repository root, install the project dependencies and Playwright browsers:

```powershell
npm install
npx playwright install
```

The project uses `allure-playwright` to create Allure result files and `allure-commandline` to build and open the report.

## 3. Run tests

Run the complete suite:

```powershell
npm test
```

For a quicker local run, use Chromium only:

```powershell
npm run test:chromium
```

After the run, confirm that the `allure-results` directory contains result files.

## 4. Generate the report

Generate a fresh static Allure report:

```powershell
npm run allure:generate
```

This command removes the previous generated report and creates a new one in `allure-report`.

## 5. Open the report

Start the local Allure report server:

```powershell
npm run allure:open
```

Or run generation and opening together:

```powershell
npm run allure:report
```

The command prints the local URL to the terminal. Open that URL in a browser.

## 6. Open the Playwright report

The existing Playwright report remains available with:

```powershell
npx playwright show-report playwright-report
```

## CI guidance

Archive `allure-results` as a test artifact after the test command. Generate `allure-report` from those results in a report job, or publish the generated directory as a static artifact. Do not commit either generated directory to source control.

## Troubleshooting

- If `allure` is not recognized, run `npm install` from the repository root and use the npm scripts above.
- If Allure reports a Java error, verify `java -version` and ensure Java is available on `PATH`.
- If the report is empty, run tests first and check that `allure-results` was created in the repository root.