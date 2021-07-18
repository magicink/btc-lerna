const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
    this.option('name', { type: String })
  }

  async writing() {
    this.fs.copy(this.templatePath(), this.destinationPath())

    const devDependencies = [
      '@testing-library/react',
      '@testing-library/react-hooks',
      'react',
      'react-dom'
    ]

    await this.addDevDependencies(devDependencies)

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    )
  }

  initializing() {
    this.composeWith({
      Generator: require('generator-btc-babel'),
      path: require.resolve('generator-btc-babel')
    })
    this.composeWith({
      Generator: require('generator-btc-prettier'),
      path: require.resolve('generator-btc-prettier')
    })
    this.composeWith({
      Generator: require('generator-btc-jest'),
      path: require.resolve('generator-btc-jest')
    }, {
      'skip-template': true
    })
    this.composeWith({
      Generator: require('generator-btc-rollup'),
      path: require.resolve('generator-btc-rollup')
    })
  }
}
