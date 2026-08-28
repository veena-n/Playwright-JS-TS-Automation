Inside that directory, you can run several commands:

# command to install playwright 
-> npm init playwright@latest

# Runs the end-to-end tests.
-> npx playwright test
   
# Starts the interactive UI mode.
-> npx playwright test --ui
    
# Runs the tests only on Desktop Chrome.
-> npx playwright test --project=chromium
-> npx playwright test First_element_with_different_methods.spec.ts

# command to execute execute specific test
->  npx playwright test -g "Get by title method" --trace=on

# Runs the tests in a specific file.
-> npx playwright test example
    

# Runs the tests in debug mode.
-> npx playwright test --debug
    

#  Auto generate tests with Codegen.
-> npx playwright codegen
   

# We suggest that you begin by typing:
-> npx playwright test

# command to show report after test execution.
-> npx playwright show-report

# command to execute test cases in headed mode.
-> npx playwright test --headed
# - It will launch browser and test againts all project browsers in config file.

# How to enable trace and video in reporting.
-> open config file and do this changes in use section.

use: {
    trace: 'on',
    video: 'on',
  },

# Use common baseURL in test cases level from config file.

use: {
    baseURL: "https://playwright.dev/",
  },

-> This baseURL is default available for page.goto method, 
   we just need to set value as / in page.goto("/") method.

# command to execute test cases in debug mode.
-> npx playwright test -g "Get by title method" --trace=on --debug --project=chromium --headed

# Command to execute last failed test cases:
-> npx playwright test First_element_with_different_methods.spec.ts --headed --project=chromium --last-failed


# Execute test from command line and initiate the debugger.
-> npx playwright test --grep "Perform Drag and Drop Operation" --debug

# Timeout setting 
-> test timeout
   -> if we test level timeout, then it will overwright confic level timeout.
   -
-> Navigation timeout: time to load the URL. 
   -> timeout on test level will override the config navigationTimeout.
-> Action timeout : time to perform any specific action on webelement.
   -> timeout on test level will override the actionTimeout timeout.


# Command to execute test case with specific tag.
-> npx playwright test testAnnotation.spec.ts --grep="@smoke" --project=chromium

# Exclude smoke test cases and execute everything else.
-> npx playwright test testAnnotation.spec.ts --grep-invert="@smoke" --project=chromium

# code execution with OR condition.
-> npx playwright test testAnnotation.spec.ts --grep="@smoke|@sanity" --project=chromium

# code execution with AND condition.
-> npx playwright test testAnnotation.spec.ts --grep="(?=.*@smoke)(?=.*@sanity)" --project=chromium


# Refernece : https://playwright.dev/docs/test-annotations

# Playwrigt Architecure Docs 
-> Client Layer : In this layer where you srite and manage your test scripts, using laguages
   ->Java, Python, C#, JavaScript & typeScript

-> Playwright Core Layer : Powered native by Node.js process, this is server-sde framework act as central brain.
-> Browser Layer : This layer contains the target browser situation.


# dependency required to read value from .env file.
-> npm install dotenv

# content to .env file.

OPENHRM_URL = https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
USERNAME = "Admin"
PASSWORD = "admin123"

SAUCE_LAB_URL = https://www.saucedemo.com/
USERNAME2 = standard_user
PASSWORD2 = secret_sauce


-> create a .env file and try to read value using this syntax
        -> await page.goto(process.env.SAUCE_LAB_URL!);
        -> await pageManager.sauceLabPage.Login(process.env.USERNAME2!, process.env.PASSWORD2!)