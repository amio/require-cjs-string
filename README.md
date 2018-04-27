# require-cjs-string [![npm-version][npm-badge]][npm-link]

[![Greenkeeper badge](https://badges.greenkeeper.io/amio/require-cjs-string.svg)](https://greenkeeper.io/)

Load commonjs module from string in Node & Browser.

## Install

```bash
npm install require-cjs-string
```

## Usage

```javascript
const requireCJSString = require('require-cjs-string')

requireCJSString('module.exports = 1')  // => 1
```

## License

MIT @ Amio

[amio-link]: https://github.com/amio
[npm-badge]: https://img.shields.io/npm/v/require-cjs-string.svg?style=flat-square
[npm-link]: http://www.npmjs.com/package/require-cjs-string
