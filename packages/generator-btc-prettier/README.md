# `generator-btc-prettier`

> Generates a Prettier configuration.

## Usage

```
// app/index.js

module.exports = class extends Generator {
  initializing() {
    this.composeWith({
      Generator: require('generator-btc-prettier'),
      path: require.resolve('generator-btc-prettier')
    })
  }
}
```
