Feature: Sign up to Primary Bid

    Sign up to Primary Bid

    Scenario: Sign up to Primary Bid
        Given I am on Primary Bid home page
        Then I should be able to sign up to Primary Bid
        And I should see the user details page

    Scenario: Email error validation
        Given I am on sign up page 
        And I enter emaill address in wromg format
        Then I should get error message
        