Feature: Sign up to Primary Bid

    Sign up to Primary Bid

    Scenario: Email error validation
        Given I am on sign up page 
        And I enter email address in wromg format
        Then I should get error message 'The email you have entered is not valid'
        
    Scenario: Email error validation
        Given I am on sign up page
        When I enter passwords that dont match 
        Then I should get the error 'Passwords do not match'   

    Scenario: Sign up to Primary Bid
        Given I am on Primary Bid home page
        Then I should be able to sign up to Primary Bid
        And I should see the user details page with message 'Welcome to PrimaryBid'
        And I should see user details verification message 'Before you can get involved in upcoming share offers we need to verify your ID.'
        

    
        