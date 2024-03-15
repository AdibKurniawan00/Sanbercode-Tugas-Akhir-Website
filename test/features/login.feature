@all
Feature: Kasir Aja login


    Scenario: login successfull with valid credential
        Given I open kasiraja website
        When I login with valid credentials
        Then I should be on the dashboard page

    # Scenario: login failed with invalid credential
    #     Given I open kasiraja website
    #     When I login with invalid credentials
    #     Then I should see error message