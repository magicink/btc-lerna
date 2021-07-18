const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }

  async writing() {
    this.fs.copy(this.templatePath(), this.destinationPath())

    const devDependencies = [
      'autoprefixer@9',
      'postcss',
      '@rollup/plugin-babel',
      '@rollup/plugin-commonjs',
      '@rollup/plugin-node-resolve',
      'rollup',
      'rollup-plugin-sass',
      'rollup-plugin-terser',
      'sass'
    ]

    await this.addDevDependencies(devDependencies)

    const projectSettings = {
      scripts: {
        build: 'rollup -c ./rollup.config.js'
      }
    }

    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)
  }

  initializing() {
    this.composeWith({
      Generator: require('generator-btc-babel'),
      path: require.resolve('generator-btc-babel')
    })
  }

  end() {
    this.spawnCommand('npm', ['run', 'build'])
  }
}
