const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }
  async writing() {
    await this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'))
    const projectSettings = {}
    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)
    await this.addDependencies([])
    await this.addDevDependencies([])
  }
  initializing() {
  }
}
