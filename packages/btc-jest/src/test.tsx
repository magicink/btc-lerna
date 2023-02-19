import { render, screen } from '@testing-library/react'
const React = require('react')
const TestComponent = () => <div data-testid={'test'}>Test</div>
describe('React JSX', function () {
  it('should render', function () {
    render(<TestComponent />)
    expect(screen.getByTestId('test')).toBeInTheDocument()
  })
})
