const Generator = require('yeoman-generator')
const prettier = require('btc-prettier')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }

  async writing() {
    const devDependencies = ['prettier']
    await this.addDevDependencies(devDependencies)

    const projectSettings = {
      prettier,
      scripts: {
        format: 'npx sort-package-json && prettier --write "**/*.{js,jsx,json,md}"'
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)

    this.fs.copyTpl(
      this.templatePath('.prettierignore'),
      this.destinationPath('.prettierignore')
    )
  }

  end () {
    this.spawnCommand('npm', ['run', 'format'])
  }
}
