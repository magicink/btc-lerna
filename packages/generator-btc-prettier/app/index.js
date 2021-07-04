const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }

  async writing() {
    const devDependencies = [
      'prettier'
    ]
    await this.addDevDependencies(devDependencies)

    const projectSettings = {
      prettier: {
        "arrowParens": "avoid",
        "bracketSpacing": true,
        "jsxSingleQuote": true,
        "semi": false,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "none"
      },
      scripts: {
        format: 'prettier --write "**/*.{js,jsx,json,md}"'
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)

    this.fs.copyTpl(
      this.templatePath('.prettierignore'),
      this.destinationPath('.prettierignore')
    )
  }
}
