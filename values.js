function values( testObject) {
    const values = [];
    for ( let valueProperty in testObject ) {
        (typeof testObject[valueProperty] === "function") ? null : values.push(testObject[valueProperty])
    }
    return values;
}
module.exports = values;