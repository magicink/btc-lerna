const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }
  async writing() {
    const projectSettings = {
      private: true
    }
    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)
    await this.fs.copy(this.templatePath(), this.destinationPath())
    const dependencies = ['yeoman-generator']
    await this.addDependencies(dependencies)
  }
}
