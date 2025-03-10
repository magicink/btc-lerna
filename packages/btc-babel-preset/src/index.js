/**
 * @type {Array<string>}
 * Array of Babel plugins to be used
 */
const plugins = [
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-transform-runtime'
]

/**
 * @type {Array<Array<string|Object>>}
 * Array of Babel presets to be used
 */
const presets = [
  [
    '@babel/preset-env',
    {
      forceAllTransforms: true,
      modules: false
    }
  ],
  ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  [
    '@babel/preset-react',
    {
      development: process.env.NODE_ENV !== 'production'
    }
  ]
]

/**
 * Export a function that returns the Babel configuration
 * @returns {{plugins: Array<string>, presets: Array<Array<string|Object>>}}
 */
module.exports = () => {
  return { plugins, presets }
}
