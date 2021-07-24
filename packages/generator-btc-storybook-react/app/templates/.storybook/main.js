const babelConfig = require('../.babelrc.json')
module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport'
  ],
  stories: ['../src/**/*.stories.@(js|jsx)'],
  webpackFinal: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelConfig
              }
            }
          ]
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  }
}
