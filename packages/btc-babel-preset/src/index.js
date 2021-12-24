const plugins = [
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-transform-runtime'
]
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
  ]
]
module.exports = () => {
  return { plugins, presets }
}
