const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testPathIgnorePatterns: [
        ...defaults.testPathIgnorePatterns,
        '/.fttemplates/',
    ],
};

module.exports = config;
