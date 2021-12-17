const jestConfig = require('./jest.config')
test('jestConfig', () => {
  expect(Object.prototype.hasOwnProperty.call(jestConfig, 'moduleNameMapper')).toBe(true)
  expect(Object.prototype.hasOwnProperty.call(jestConfig, 'transform')).toBe(true)
})