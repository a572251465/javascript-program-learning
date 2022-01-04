const path = require('path')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')

const pathResolve = (url) => path.resolve(__dirname, url)

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: pathResolve('../src/index.js'),
  output: {
    path: pathResolve('../dist'),
    filename: 'bandle.js'
  },
  plugins: [new ModuleConcatenationPlugin()]
}
