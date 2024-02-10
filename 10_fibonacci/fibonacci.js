const fibonacci = function(a) {
    let fibo = [0, 1, 1];

    // convert to int
    a = parseInt(a);

    if (a < 0) return "OOPS"; // negative positions
    if (a == 0) return 0; // position 0
    if (a <= 2) return 1;

    // populate the fibonacci array
    for (let i = 3; i <= a; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo[a];
};

// Do not edit below this line
module.exports = fibonacci;
