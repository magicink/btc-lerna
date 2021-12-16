const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  async writing() {
    this.fs.copyTpl(
      this.templatePath('prettierignore'),
      this.destinationPath('.prettierignore')
    )
    await this.addDevDependencies(['@brandontom/prettier'])
    const packageSettings = {
      prettier: '@brandontom/prettier',
      scripts: {
        format:
          'npx sort-package-json && prettier --write "**/*.{js,jsx,json,md,html,scss,css}"'
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), packageSettings)
  }
}
