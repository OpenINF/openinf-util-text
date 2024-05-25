# supports-ansi

[![npm version](https://img.shields.io/npm/v/supports-ansi.svg)](https://www.npmjs.com/package/supports-ansi)

> Detect whether a terminal supports [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code)

## Installation

```sh
npm install --save supports-ansi
```

## Usage

```js
const supportsAnsi = require('supports-ansi');

// on ANSI/VT100 compatible terminal
console.log(supportsAnsi);
// => true

// on CMD/PowerShell (before Windows 10 v.1607)
console.log(supportsAnsi);
// => false
```

## Note

Cygwin is not supported.

## License

MIT
