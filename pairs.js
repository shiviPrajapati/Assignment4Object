function pairs(obj) {
    let finalList = [];
    for(let element in obj){
        finalList.push([element, obj[ element]]);
    }
    return finalList;
  }

  module.exports = pairs;