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
    return true;
};

// Export de la fonction isValid
exports.isValid = isValid;
