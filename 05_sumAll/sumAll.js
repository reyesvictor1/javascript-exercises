const sumAll = function(numA, numB) {
    
    // check if any number is negative
    if (numA < 0 || numB < 0) return "ERROR";

    // check for correct data type
    if (typeof numA != "number") return "ERROR";
    if (typeof numB != "number") return "ERROR";

    // check which number is greater
    if (numA > numB) {
        let temp = numA;
        numA = numB;
        numB = temp;
    }

    let total = 0;
    for (let i = numA; i <= numB; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
