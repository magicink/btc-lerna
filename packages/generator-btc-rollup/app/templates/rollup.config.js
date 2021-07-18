const autoprefixer = require('autoprefixer')
const { babel } = require('@rollup/plugin-babel')
const babelConfig = require('./.babelrc.json')
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const path = require('path')
const postcss = require('postcss')
const sass = require('rollup-plugin-sass')
const { terser } = require('rollup-plugin-terser')

const external = [/@babel\/runtime/, 'react', 'react-dom']

module.exports = [
  {
    external,
    input: path.resolve(__dirname, 'src/index.js'),
    output: {
      dir: path.resolve(__dirname, 'dist'),
      exports: 'named',
      format: 'cjs'
    },
    plugins: [
      babel({
        babelHelpers: 'runtime',
        babelrc: false,
        plugins: babelConfig.plugins.filter(
          p => p !== '@babel/plugin-transform-modules-commonjs'
        ),
        presets: babelConfig.presets
      }),
      nodeResolve(),
      commonjs(),
      sass({
        insert: true,
        processor: css =>
          postcss([autoprefixer])
            .process(css, { from: undefined })
            .then(result => result.css)
      }),
      terser()
    ]
  }
]
