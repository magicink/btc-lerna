const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    this.option('target', { type: String })
  }
  async writing() {
    switch (this.options.target) {
      case 'unity':
        this.fs.copy(
          this.templatePath('unity.gitignore'),
          this.destinationPath('.gitignore')
        )
        break
      default:
        this.fs.copy(
          this.templatePath('default.gitignore'),
          this.destinationPath('.gitignore')
        )
    }
  }
}
