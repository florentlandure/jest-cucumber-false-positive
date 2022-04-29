Feature: False positive

  Scenario Outline: This scenario should fail
    Then The value <value> is equal to 1

    Examples:

      | value |
      | 1     |
      | 2     |

  Scenario Outline: This scenario fails as intended
    Then The value <value> is equal to 1

    Examples:

      | value |
      | 2     |
      | 1     |