# require-cjs-string [![npm-version][npm-badge]][npm-link]

Dynamic eval commonjs/umd module from string in Node & Browser.

## Install

```bash
npm install require-cjs-string
```

## Usage

```javascript
const rcs = require('require-cjs-string')

rcs('module.exports = 1')  // => 1
```

More Examples:

```javascript
const rcs = require('require-cjs-string')

const { sqrt, square } = rcs(`
  exports.sqrt = Math.sqrt;
  exports.square = x => x * x;
`)
square(12)  // => 144
sqrt(36)    // => 6

const fn = rcs(`
  module.exports = (x, y) => {
    var z = x + y;
    return z * z * z;
  }
`)
fn(3, 4)    // => 343
```

## License

MIT @ Amio

[amio-link]: https://github.com/amio
[npm-badge]: https://img.shields.io/npm/v/require-cjs-string.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/require-cjs-string
