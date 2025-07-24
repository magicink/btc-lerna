import type { PluginItem, TransformOptions } from '@babel/core'

/**
 * Array of Babel plugins to be used
 */
const plugins: PluginItem[] = [
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-transform-runtime'
]

/**
 * Array of Babel presets to be used
 */
const presets: PluginItem[] = [
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
 * Returns the Babel configuration
 */
export default function babelPreset(): Pick<
  TransformOptions,
  'plugins' | 'presets'
> {
  return { plugins, presets }
}
