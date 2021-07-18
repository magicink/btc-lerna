import './styles.scss'
import React from 'react'

export const HelloWorld = () => {
  return (
    <div className={'hello-world'} data-testid={'hello-world'}>
      Hello, World!
    </div>
  )
}
