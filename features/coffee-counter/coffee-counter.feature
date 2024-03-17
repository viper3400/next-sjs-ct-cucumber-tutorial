Feature: Coffee Counter

  In order control the ammount of coffee I drink
  I want to count the cups of coffee I drink each day

  Background:
    Given Tess has opened the coffee counter app

  Scenario Outline: Interact with coffee counter within specified range    

    Then Tess should see the initial coffee count displayed as "0"
    Then they should see that the "Increase" button is enabled
    Then they should see that the "Decrease" button is disabled

    When Tess increases the count to <increment_count>
    Then they clicks the "Decrease" button <decrement_count> times

    Then they should see the count value displayed as <expected_count>
    Then they should see that the button to increase should be <increase_button_state>
    Then they should see that the button to decrease should be <decrease_button_state>

    Examples:
      | increment_count | decrement_count | expected_count | increase_button_state | decrease_button_state |
      | 1               | 0               | 1              | enabled               | enabled               |
      | 5               | 2               | 3              | enabled               | enabled               |
      | 6               | 6               | 0              | enabled               | disabled              |
      | 10              | 5               | 5              | enabled               | enabled               |
      | 11              | 8               | 2              | enabled               | enabled               |
      | 10              | 0               | 10             | disabled              | enabled               |
