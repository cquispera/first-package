function isNullOrEmpty (input) {
    return (input === undefined || input === null || input === '' || input.trim().length === 0);
}

module.exports = isNullOrEmpty;