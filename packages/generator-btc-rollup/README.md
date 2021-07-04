# `generator-btc-rollup`

> A custom RollupJS configuration.

## Usage

```
// app/index.js

module.exports = class extends Generator {
  initializing() {
    this.composeWith({
      Generator: require('generator-btc-jest/app'),
      path: require.resolve('generator-btc-jest/app')
    })
  }
}
```
