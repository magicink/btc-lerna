const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  async writing() {
    this.fs.copyTpl(
      this.templatePath('prettierignore'),
      this.destinationPath('.prettierignore')
    )
    await this.addDevDependencies(['@brandontom/prettier'])
    const packageSettings = {
      prettier: '@brandontom/prettier'
    }
    this.fs.extendJSON(this.destinationPath('package.json'), packageSettings)
  }
  end() {
    this.spawnCommandSync('npm', ['run', 'format'])
  }
}
