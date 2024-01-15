// validations.js
const isValid = (gamerTag) => {
    if (typeof gamerTag !== 'string') {
        return false;
    }
    if (gamerTag.length < 8) {
        return false;
    }
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    if (!specialCharacters.some(char => gamerTag.includes(char))) {
        return false;
    }
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!numbers.some(number => gamerTag.includes(number))) {
        return false;
    }
    return true;
};

// Export de la fonction isValid
exports.isValid = isValid;
