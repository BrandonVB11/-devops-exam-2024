const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid('validTag123!');
        expect(result).toBeDefined();
    });

    test("should return false as the gamertag does not have 8 characters", () => {
        const result = isValid('aaaaaa#');
        expect(result).toBe(false);
    });

    test("should return false as the gamertag does not have a special character", () => {
        const result = isValid('aaaaaa11');
        expect(result).toBe(false);
    });

    test("should return false as the gamertag does not have a number", () => {
        const result = isValid('aaaaaaa#');
        expect(result).toBe(false);
    });

    test("should return true for a valid gamertag", () => {
        const result = isValid('ValidTag123!');
        expect(result).toBe(true);
    });

    test("should return false for an undefined gamertag", () => {
        const result = isValid();
        expect(result).toBe(false);
    });

    test("should return false for a gamertag with only special characters", () => {
        const result = isValid('!@#$%^&*');
        expect(result).toBe(false);
    });

    test("should return false for a gamertag with only numbers", () => {
        const result = isValid('12345678');
        expect(result).toBe(false);
    });
    
    test("should return false for a gamertag with exactly 8 characters but no special character or number", () => {
        const result = isValid('abcdefgh');
        expect(result).toBe(false);
    });
});
