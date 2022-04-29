Feature: False positive

  Scenario Outline: This scenario should fail
    Given A value <value>
    Then The value is equal to 1

    Examples:
      | value |
      | 1     |
      | 2     |

  Scenario Outline: This scenario fails as intended
    Given A value <value>
    Then The value is equal to 1

    Examples:
      | value |
      | 2     |
      | 1     |