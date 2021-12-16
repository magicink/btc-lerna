const presets = [
  [
    '@babel/preset-env',
    {
      forceAllTransforms: true,
      modules: false
    }
  ],
  [
    '@babel/preset-react',
    {
      development: process.env.NODE_ENV !== 'production'
    }
  ],
  ['@babel/preset-flow']
]
const env = {
  production: {
    plugins: [
      ['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]
    ]
  }
}
const preset = _ => {
  return {
    env,
    presets
  }
}
export default preset
