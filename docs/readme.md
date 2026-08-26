Inside that directory, you can run several commands:

# command to install playwright 
-> npm init playwright@latest

# Runs the end-to-end tests.
-> npx playwright test
   
# Starts the interactive UI mode.
-> npx playwright test --ui
    
# Runs the tests only on Desktop Chrome.
-> npx playwright test --project=chromium
   

# Runs the tests in a specific file.
-> npx playwright test example
    

# Runs the tests in debug mode.
-> npx playwright test --debug
    

#  Auto generate tests with Codegen.
-> npx playwright codegen
   

# We suggest that you begin by typing:
-> npx playwright test


# command to show report after test execution
-> npx playwright show-report


# command to execute the test in headed mode
-> npx playwright test --headed