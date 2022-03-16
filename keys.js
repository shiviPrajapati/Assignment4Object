function keys( testObject) {
    const keysValue = [];
    for ( let keyProperty in testObject ) {
        let keyAsString = keyProperty.toString();
        keysValue.push(keyAsString)
    }
    return keysValue;
}

module.exports= keys;