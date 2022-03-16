function invert(obj) {
    let inverted = {};
    for ( let element in obj) {
        inverted[obj[element]] = element ;
    };
    return inverted;
}

module.exports = invert;