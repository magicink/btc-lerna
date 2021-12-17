const plugins = ['@babel/plugin-transform-runtime']
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
    plugins,
    presets
  },
  production: {
    plugins: [
      [
        'babel-plugin-react-remove-properties',
        { properties: ['data-testid'] }
      ].concat(plugins)
    ],
    presets
  }
}
const preset = _ => ({ env })
export default preset
