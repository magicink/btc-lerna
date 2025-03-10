import { act, renderHook } from '@testing-library/react-hooks'
import jestConfig from '../jest.config'
import React from 'react'

const useMockHook = () => {
  const [value, setValue] = React.useState(0)
  const increment = () => setValue(value + 1)
  return { value, increment }
}
test('jestConfig', () => {
  expect(
    Object.prototype.hasOwnProperty.call(jestConfig, 'moduleNameMapper')
  ).toBe(true)
  expect(
    Object.prototype.hasOwnProperty.call(jestConfig, 'setupFilesAfterEnv')
  ).toBe(true)
})
test('useMockHook', () => {
  const { result } = renderHook(() => useMockHook())
  expect(result.current.value).toBe(0)
  act(() => {
    result.current.increment()
  })
  expect(result.current.value).toBe(1)
})
