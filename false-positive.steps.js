const FalsePositiveSteps = ({ then }) => {
    then(/^The value (.*) is equal to (.*)$/, (value, expectedValue) => {
       expect(value).toBe(expectedValue);
    });
}

module.exports = {
    FalsePositiveSteps
}