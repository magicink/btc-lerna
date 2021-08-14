const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }
  async writing() {
    await this.fs.copy(this.templatePath(), this.destinationPath())
    const projectSettings = {
      scripts: {
        build: 'webpack',
        prebuild: 'npx rimraf dist'
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)
    await this.addDependencies([])
    await this.addDevDependencies(['webpack', 'webpack-cli', 'babel-loader'])
  }
  initializing() {
    this.composeWith({
      Generator: require('generator-btc-prettier'),
      path: require.resolve('generator-btc-prettier')
    })
    this.composeWith({
      Generator: require('generator-btc-babel'),
      path: require.resolve('generator-btc-babel')
    })
    this.composeWith({
      Generator: require('generator-btc-gitignore'),
      path: require.resolve('generator-btc-gitignore')
    })
  }
  end() {
    this.spawnCommand('npm', ['run', 'build'])
  }
}
