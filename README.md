<h1 align="center">random.ts</h1>

<p align="center">
    <a href="https://www.travis-ci.org/isLishude/random.ts"><img src="https://www.travis-ci.org/isLishude/random.ts.svg?branch=master" alt="ci"></a>
    <a href="https://www.npmjs.com/package/random.ts"><img src="https://img.shields.io/npm/v/random.ts.svg" alt="Version"></a>
    <a href="https://codecov.io/gh/isLishude/random.ts"><img src="https://codecov.io/gh/isLishude/random.ts/branch/master/graph/badge.svg" /></a>
    <a href="https://github.com/isLishude/random.ts/issues"><img src="https://img.shields.io/github/issues/islishude/random.ts.svg" alt="issues"></a>
    <br/>
</p>


<p align="center">Get a random for Nodejs and browser by TypeScript</p>

## Usage

```js
// ES6
import * as Random from 'random.ts'
// Node
var Random = require('random.ts')

// get random number of given range
// this is equal with getNum(100, 2)
Random.number(2, 100)

// if param is not number type always return 0
Random.number("string", "string")

// if param out of safe range always return 0
Random.number(0, 2 ** 53)

// get random string,default length is 6
Random.string(6)

// get uuid string, default length is 21
Random.uuid(12)
```

## license
MIT