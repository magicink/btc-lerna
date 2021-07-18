const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
    this.option('name', { type: String })
  }

  async writing() {
    this.fs.copy(this.templatePath(), this.destinationPath())
    this.fs.copy(
      this.templatePath('.storybook'),
      this.destinationPath('.storybook')
    )

    const devDependencies = [
      '@storybook/cli',
      '@storybook/react',
      '@storybook/addon-a11y',
      '@storybook/addon-actions',
      '@storybook/addon-controls',
      '@storybook/addon-docs',
      '@storybook/addon-links',
      '@storybook/addon-storysource',
      '@storybook/addon-viewport',
      'babel-loader',
      'css-loader',
      'sass-loader@10',
      'style-loader@2'
    ]

    await this.addDevDependencies(devDependencies)

    const projectSettings = {
      scripts: {
        'start:storybook': 'start-storybook -c .storybook'
      },
      version: '1.0.0'
    }
    if (this.options.name) {
      projectSettings.name = this.options.name
    }
    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)
  }

  initializing() {
    this.composeWith({
      Generator: require('generator-btc-react'),
      path: require.resolve('generator-btc-react')
    })
  }
}
