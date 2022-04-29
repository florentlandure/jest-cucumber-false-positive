const FalsePositiveSteps = ({ given, then }) => {
    let storedValue;

    given(/^A value (.*)$/, (value) => {
        storedValue = value;
    });

    then(/^The value is equal to (.*)$/, (expectedValue) => {
       expect(storedValue).toEqual(expectedValue);
    });
}

module.exports = {
    FalsePositiveSteps
}