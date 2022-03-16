const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const callInvert = require("../invert.js");

let invertedObject = {};
function getInvertObject( testObjectValues){
    invertedObject = callInvert(testObjectValues);
    showInvertObject();
}

function showInvertObject(){
    console.log(invertedObject);
}

getInvertObject(testObject);