# `@brandontom/jest`

> Reusable and extendable Jest configurations.

## Installation

```
npm i @brandontom/jest
```

### Usage

To use the default configurations create a `jest.config.ts` file in the root of your project.

```
// jest.config.ts
module.exports = require('@brandontom/jest')
```

### Overriding the default configuration

To override the default configuration, create a `jest.config.ts` file in the root of your project.

```
// jest.config.ts
module.exports = Object.assign({}, require('@brandontom/jest'), {
  // Override default options here
})
```
