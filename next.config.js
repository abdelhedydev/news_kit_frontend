// env configuration
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

const withCSS = require('@zeit/next-css')

/* eslint-disable */
module.exports = withCSS({
  cssModules: true,
  webpack: (config) => {
    config.node = { 
      fs: 'empty' 
    }
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]
    return config
  },
})
