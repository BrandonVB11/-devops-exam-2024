// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });

    test("should return false as the gamertag does not have 8 characters", () => {
        const result = isValid("aaaaaa#");
        expect(result).toBe(false);
    });
    
    test("should return false as the gamertag does not have a special character", () => {
        const result = isValid("aaaaaa11");
        expect(result).toBe(false);
    });
    
});

