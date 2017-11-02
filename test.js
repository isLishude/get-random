const { getStr, getNum } = require("./src/index");

console.assert(getStr().length === 6);

const num = getNum(2, 10);

console.assert(num >= 2 && num < 10);
