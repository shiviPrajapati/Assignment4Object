function mapObject( obj, cb) {
    const mapped = {};
    for ( let element in obj ){
        mapped[ element] = cb( obj[ element], element);
    }
    return mapped; 
}

module.exports = mapObject;