## getRandom [![Build Status](https://www.travis-ci.org/isLishude/get-random.svg?branch=master)](https://www.travis-ci.org/isLishude/get-random)
a simple lib to get random number or string 

## Usage

```js
// ES6
import { getNum, getStr, getSafer } from 'random-numorstr'
import * as Random from 'random-numorstr'
// Node
var Random = require('random-numorstr')

// get random number of given range
// this is equal with getNum(100, 2)
Random.getNum(2, 100)

// if param is not number type always return 0
Random.getNum("string", "string")

// if param out of safe range always return 0
Random.getNum(0, 2 ** 53)

// get random string,default length is 6
Random.getStr(6)

// get safer random string, default length is 16
// before and include v1.3.0 only supports node.js
Random.getSafer()
```

## license
MIT