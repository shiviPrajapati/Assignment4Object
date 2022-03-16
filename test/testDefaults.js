const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
const testObject1 = {name: 'shivi'};
const callDefault = require("../defaults.js");

let defaultObject;
function getDefaults(testObjectValues, defaultValues){
    defaultObject = callDefault(testObjectValues, defaultValues);
    printDefaults();
}

function printDefaults(){
    console.log(defaultObject);
}

getDefaults(testObject, { name: 'noName', age: 0, location: 'notFixed' });
getDefaults(testObject1, { name: 'noName', age: 0, location: 'notFixed' });