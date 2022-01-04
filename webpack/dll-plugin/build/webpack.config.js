const path = require('path')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pathResolve = (url) => path.resolve(__dirname, url)

module.exports = {
  mode: 'development',
  devtool: false,
  entry: pathResolve('../src/index.js'),
  output: {
    path: pathResolve('../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new DllReferencePlugin({
      manifest: require('../dist/utils.manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: pathResolve('../public/index.html')
    })
  ]
}
