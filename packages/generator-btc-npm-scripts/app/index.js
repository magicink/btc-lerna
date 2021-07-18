const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
    this.option('script', { type: String })
  }
  async writing() {
    const projectSettings = {}
    switch (this.options['script']) {
      case 'update:babel':
        projectSettings['scripts'] = {
          'update:babel': 'npx npm-check-updates /^@babel.*/ -u && npm i'
        }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)
    await this.addDependencies([])
    await this.addDevDependencies([])
  }
  initializing() {
    this.composeWith({
      Generator: require('generator-btc-prettier'),
      path: require.resolve('generator-btc-prettier')
    })
  }
  end() {
    this.spawnCommand('npm', ['run', this.options['script']])
  }
}
