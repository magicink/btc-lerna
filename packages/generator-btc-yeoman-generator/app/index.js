const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }
  async writing () {
    await this.fs.copy(this.templatePath(), this.destinationPath())
    const dependencies = ['yeoman-generator']
    await this.addDependencies(dependencies)
  }
}