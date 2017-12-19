const { getStr, getNum } = require("./dist/index");

console.assert(getStr().length === 6);

const num = getNum(2, 10);
console.assert(num >= 2 && num < 10);

const num2 = getNum(10, 2);
console.assert(num2 >= 2 && num2 < 10);

console.log("test successful!");