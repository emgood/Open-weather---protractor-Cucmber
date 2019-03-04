Feature: Testing openweathermap website, using GUI

  @OutlineScenario
  Scenario Outline: This test checks wether the temperature in a city is at least zero celsius degrees
    Given I am on "openweathermap" home page
    When I type "<city>" name, in the search box
    When I click on the search button
    When I choose the relevant city from the list, verfiy it by known unique city "<ID>"
    Then I expect city temperature will be at least zero celsius degrees

    Examples:
      | city                | ID      |
      | Moscow              | 524901  |
      | Abuja               | 2352778 |
      | Accra               | 2306104 |
      | Addis Ababa         | 344979  |
      | Alofi               | 4036284 |
      | Amman               | 250441  |
      | Amsterdam           | 2759794 |
      | Andorra la Vella    | 3041563 |
      