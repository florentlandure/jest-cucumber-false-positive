# jest-cucumber-false-positive

There is an issue when I use a Scenario Outline with jest-cucumber.
The scenario only fail when the first example fails. Otherwise we get a false positive.*

## Steps to reproduce

- Run `npm install`
- Run the tests: `npm test`

The first scenario should fail when the second example is run but it doesn't.

The second scenario fails as intended.
