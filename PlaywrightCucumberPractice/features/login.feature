Feature: Sauce Demo login
  As a registered Sauce Demo user
  I want to log in securely
  So that I can access the inventory page

  @smoke
  Scenario: Login with valid credentials
    Given I am on the Sauce Demo login page
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should see the Sauce Demo inventory page

  Scenario: Login with an invalid password
    Given I am on the Sauce Demo login page
    When I log in with username "standard_user" and password "invalid_password"
    Then I should see the login error "Epic sadface: Username and password do not match any user in this service"