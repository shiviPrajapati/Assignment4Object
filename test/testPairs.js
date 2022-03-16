const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const callPairs = require("../pairs.js");

function getPairs( testObjectValues){
    pairedArray = callPairs( testObjectValues);
    showPairs();
}

function showPairs(){
    console.log(pairedArray);
}

getPairs(testObject);