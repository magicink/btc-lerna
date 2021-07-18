import { HelloWorld } from './'
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Component', module).add('HelloWorld', () => {
  return <HelloWorld />
})
