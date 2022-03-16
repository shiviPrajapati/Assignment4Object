function defaults(obj, defaultProps){
    let objectWithDefaults = {};
    for(let element in defaultProps){
        if(element in obj ){
            objectWithDefaults[ element] = obj[element] ;;
        }
        else{
            objectWithDefaults[ element] = defaultProps[element];
        }
    }

    return objectWithDefaults;
}

module.exports = defaults;