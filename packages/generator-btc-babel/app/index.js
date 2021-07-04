const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
    this.project = { ...this.options }
  }

  async writing() {
    const devDependencies = [
      '@babel/cli',
      '@babel/core',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-block-scoping',
      '@babel/plugin-transform-destructuring',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-transform-parameters',
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-regenerator',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-template-literals',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/runtime'
    ]

    const babelPlugins = devDependencies.filter(p =>
      /^@babel\/plugin.*/.exec(p)
    )

    await this.addDevDependencies(devDependencies)

    const babelSettings = {
      plugins: babelPlugins,
      presets: [
        [
          '@babel/preset-env',
          {
            forceAllTransforms: true,
            modules: false
          }
        ],
        '@babel/preset-react'
      ]
    }

    this.fs.extendJSON(this.destinationPath('.babelrc.json'), babelSettings)

    const projectSettings = {
      name: this.project.name
    }

    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)
  }
}
