# `generator-btc-babel`

> Generates a Babel configuration file and dependencies.

## Usage

```
// app/index.js

module.exports = class extends Generator {
  initializing() {
    this.composeWith({
      Generator: require('generator-btc-babel'),
      path: require.resolve('generator-btc-babel')
    })
  }
}
```
