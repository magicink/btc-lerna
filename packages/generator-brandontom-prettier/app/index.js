const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  async writing() {
    this.fs.copyTpl(
      this.templatePath('prettierignore'),
      this.destinationPath('.prettierignore')
    )
    const packageSettings = {
      prettier: '@brandontom/prettier',
      optionalDependencies: {
        '@brandontom/prettier': require('@brandontom/prettier/package.json')
          .version
      },
      scripts: {
        format:
          'npx sort-package-json && prettier --write "**/*.{js,jsx,json,md,html,scss,css}"'
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), packageSettings)
  }
}
