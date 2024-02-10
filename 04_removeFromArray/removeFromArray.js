const removeFromArray = function(array, ...args) {
    const argsToRemove = args;
    let newArray = array.filter((element) => !argsToRemove.includes(element));
    return newArray;
};  

// Do not edit below this line
module.exports = removeFromArray;
