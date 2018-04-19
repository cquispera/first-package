function isNullOrEmpty (input, allowEmptyValues) {
    if (allowEmptyValues){
        return (input === undefined || input === null || input === '');
    }else {
        return (input === undefined || input === null || input === '' || input.trim().length === 0);
    }
    
}

module.exports = isNullOrEmpty;