const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
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
      Generator: require('generator-btc-babel/app'),
      path: require.resolve('generator-btc-babel/app')
    })
    this.composeWith({
      Generator: require('generator-btc-prettier/app'),
      path: require.resolve('generator-btc-prettier/app')
    })
    this.composeWith({
      Generator: require('generator-btc-jest/app'),
      path: require.resolve('generator-btc-jest/app')
    })
    this.composeWith({
      Generator: require('generator-btc-rollup/app'),
      path: require.resolve('generator-btc-rollup/app')
    })
  }
}
