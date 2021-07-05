const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts, features) {
    super(args, opts, features)
  }

  async writing() {
    this.fs.copy(this.templatePath(), this.destinationPath())

    const devDependencies = [
      '@testing-library/jest-dom',
      'babel-jest',
      'identity-obj-proxy',
      'jest'
    ]

    await this.addDevDependencies(devDependencies)

    const projectSettings = {
      jest: {
        moduleNameMapper: {
          '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
          '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`
        },
        setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
        transform: {
          '^.+\\.jsx?$': 'babel-jest'
        }
      },
      scripts: {
        test: 'jest'
      }
    }

    this.fs.extendJSON(this.destinationPath('package.json'), projectSettings)
  }

  initializing() {
    this.composeWith({
      Generator: require('generator-btc-babel/app'),
      path: require.resolve('generator-btc-babel/app')
    })
  }

  end () {
    this.spawnCommand('npm', ['test'])
  }
}
