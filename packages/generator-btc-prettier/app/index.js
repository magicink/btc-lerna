const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }

  async writing() {
    const projectSettings = {
      optionalDependencies: {
        prettier: require('file:../btc-prettier')
      },
      prettier: 'btc-prettier',
      scripts: {
        format:
          'npx sort-package-json && prettier --write "**/*.{js,jsx,json,md,css,scss,html,php}"'
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)

    this.fs.copyTpl(
      this.templatePath('.prettierignore'),
      this.destinationPath('.prettierignore')
    )
  }

  end() {
    this.spawnCommand('npm', ['run', 'format'])
  }
}
