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
  development: {
    presets
  },
  production: {
    plugins: [
      ['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]
    ],
    presets
  }
}
const preset = _ => ({env})
export default preset
