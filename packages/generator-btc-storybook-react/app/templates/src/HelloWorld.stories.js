import { HelloWorld } from './'
import React from 'react'

export default {
  component: HelloWorld,
  title: 'Example/HelloWorld'
}

const Template = args => <HelloWorld {...args} />

export const Preview = Template.bind({})
Preview.args = {}
