// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });
});

describe('gamertag length', () => {
    test('should return true if the gamertag length is at least 8 characters', () => {
        const result = isValid('12345678');
        expect(result).toBeTruthy();
    });

    test('should return false if the gamertag length is less than 8 characters', () => {
        const result = isValid('1234567');
        expect(result).toBeFalsy();
    });
    }
);
