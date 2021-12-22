require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

console.log(process.env.BUILD_TARGET)

const config = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      options: {
        url: process.env.WPGRAPHQL
      },
      resolve: 'gatsby-source-wordpress'
    }
  ]
}

export default config
