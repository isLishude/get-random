## getRandom [![Build Status](https://www.travis-ci.org/isLishude/get-random.svg?branch=master)](https://www.travis-ci.org/isLishude/get-random)
a simple lib to get random number or string 

## Usage

```js
// ES6
import {getNum, getStr} from 'random-numorstr'
import * as Random from 'random-numorstr'
// Node
var Random = require('random-numorstr')

// get random number of given range
Random.getNum(2,100)
// if param is not number type always return 0
Random.getNum("string","string")
// get random string,default length is 6
Random.getStr(6)

```

## license
MIT