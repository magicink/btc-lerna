const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }

  async writing() {
    const devDependencies = [
      '../btc-core'
    ]

    const babelPlugins = devDependencies.filter(p =>
      /^@babel\/plugin.*/.exec(p)
    )

    await this.addDevDependencies(devDependencies)

    const babelSettings = {
      plugins: babelPlugins,
      presets: [
        '@babel/preset-flow',
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
  }
}
