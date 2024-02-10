const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let total = 0;
  nums.forEach((num) => total += num);
  return total;
};

const multiply = function(nums) {
  let total = 1;
  nums.forEach((num) => total = total * num);
  return total;
};

const power = function(a, b) {
	return (Math.pow(a, b));
};

const factorial = function(a) {

	if (a <= 1) return 1;

  let total = a * factorial(a - 1);

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
