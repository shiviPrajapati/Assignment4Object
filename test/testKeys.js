const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const callKey= require("../keys.js");

let keyValues = [];
function getKey( testObjectValue){
    keyValues = callKey(testObjectValue);
    showKeys();
}

function showKeys(){
    console.log(keyValues);

}

getKey(testObject);