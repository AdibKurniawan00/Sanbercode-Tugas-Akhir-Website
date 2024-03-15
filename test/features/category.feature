@all @category
Feature: Category

    @all @positive
    Scenario: add category success
        Given I login use valid credentials
        When I go to add category page
        Then I add category
        Then I should see the category