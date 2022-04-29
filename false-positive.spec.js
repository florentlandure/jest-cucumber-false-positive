const {autoBindSteps, loadFeatures} = require("jest-cucumber");
const {FalsePositiveSteps} = require("./false-positive.steps");

const features = loadFeatures('./false-positive.feature');

autoBindSteps(features, [FalsePositiveSteps]);