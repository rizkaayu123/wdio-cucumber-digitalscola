Feature: Login Website SauceDemo

  Scenario Outline: User Login sucessfuly
    Given user is on sauce-demo page
    When user input username with "standard_user"
    And user input password with "secret_sauce"
    And User Clik Button
    Then user sholud redirect to homepage

    
