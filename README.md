<h1 align="center">GetRandom.js</h1>

<p align="center">
    <a href="https://www.travis-ci.org/isLishude/random.js"><img src="https://www.travis-ci.org/isLishude/random.js.svg?branch=master" alt="ci"></a>
    <a href="https://www.npmjs.com/package/random-numorstr"><img src="https://img.shields.io/npm/v/random-numorstr.svg" alt="Version"></a>
    <a href="https://codecov.io/gh/isLishude/random.js"><img src="https://codecov.io/gh/isLishude/random.js/branch/master/graph/badge.svg" /></a>
    <a href="https://github.com/isLishude/random.js/issues"><img src="https://img.shields.io/github/issues/islishude/random.js.svg" alt="issues"></a>
    <br/>
</p>


<p align="center">Get a random string or number of given range for Nodejs and browser</p>

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
// v1.3.0 only supports node.js
// after v1.3.0 supports ES6 browser(using ArrayBuffer and window.crypto)
// for better compatibility in favor of getStr()
Random.getSafer()
```

## license
MIT