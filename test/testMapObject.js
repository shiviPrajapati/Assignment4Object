const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const callMappedObject = require("../mapObject.js");

let mappedObject = [];
function getMappedObject( testObjectValue, cb) {
  mappedObject = callMappedObject( testObjectValue, cb);
  showMappedObject();
}

function showMappedObject() {
  console.log( mappedObject);
}

cb = (x, i) => "map:"+x;
getMappedObject(testObject, cb);

