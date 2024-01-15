// validations.js
const isValid = (gamerTag) => {
    if (typeof gamerTag !== 'string') {
        return false;
    }
    if (gamerTag.length < 8) {
        return false;
    }
    return true;
};

// Export de la fonction isValid
exports.isValid = isValid;
