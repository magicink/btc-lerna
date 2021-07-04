/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { HelloWorld } from './index'
import React from 'react'

describe('sample', () => {
  it('works', () => {
    render(<HelloWorld />)
    expect(screen.getByTestId('hello-world')).toBeInTheDocument()
  })
})
