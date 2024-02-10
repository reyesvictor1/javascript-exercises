const repeatString = function(word, times) {

    if (times < 0) return "ERROR";

    let outputStr = "";
    for (let idx = 0; idx < times; idx++) {
        outputStr += word;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
