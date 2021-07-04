const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }

  async writing() {
    this.fs.copy(this.templatePath(), this.destinationPath())

    const devDependencies = [
      '@rollup/plugin-babel',
      '@rollup/plugin-commonjs',
      '@rollup/plugin-node-resolve',
      'rollup',
      'rollup-plugin-sass',
      'rollup-plugin-terser'
    ]

    await this.addDevDependencies(devDependencies)
  }

  initializing () {
    this.composeWith({
      Generator: require('generator-btc-babel/app'),
      path: require.resolve('generator-btc-babel/app')
    })
  }
}
