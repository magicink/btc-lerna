# `generator-btc-babel`

> Generates a Babel configuration file and dependencies.

## Usage

```
// app/index.js

module.exports = class extends Generator {
  initializing() {
    this.composeWith({
      Generator: require('generator-btc-babel/app'),
      path: require.resolve('generator-btc-babel/app')
    })
  }
}
```
