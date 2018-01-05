<h1 align="center">GetRandom.js</h1>

<p align="center">
    <a href="https://www.travis-ci.org/isLishude/get-random"><img src="https://www.travis-ci.org/isLishude/get-random.svg?branch=master" alt="ci"></a>
    <a href="https://app.fossa.io/projects/git%2Bgithub.com%2FisLishude%2Fget-random?ref=badge_shield"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2FisLishude%2Fget-random.svg?type=shield" alt="license"></a>
    <a href="https://www.npmjs.com/package/random-numorstr"><img src="https://img.shields.io/npm/v/random-numorstr.svg" alt="Version"></a>
    <a href="https://codecov.io/gh/isLishude/get-random"><img src="https://codecov.io/gh/isLishude/get-random/branch/master/graph/badge.svg" /></a>
    <a href="https://github.com/isLishude/get-random/issues"><img src="https://img.shields.io/github/issues/islishude/get-random.svg" alt="issues"></a>
    <br/>
</p>


<p align="center">a Nodejs lib to get random number or string</p>

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
// after v1.3.0 supports ES6 browser(using TypedArray and window.crypto)
// for better compatibility in favor of getStr()
Random.getSafer()
```

## license
MIT

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FisLishude%2Fget-random.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FisLishude%2Fget-random?ref=badge_large)