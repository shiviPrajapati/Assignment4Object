const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const callValues= require("../values.js");

let values = [];
function getValues(testObjectValues){
    values = callValues(testObjectValues);
    printValues();
}

function printValues(){
    console.log(values);
}

getValues(testObject);