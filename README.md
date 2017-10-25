## random-numorstr
a simple lib using ES6+ to get random number or string

If you using Nodejs,you should using webpack to complie code.

## Usage

```js
// ES6
import {getNum, getStr} from 'random-numorstr'
import * as Random from 'random-numorstr'
// Node
var Random = require('random-numorstr')

// get random number of given range
Random.getNum(2,100)
// get random string,default length is 6
Random.getStr(6)
```

## license
MIT