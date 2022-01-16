const path = require('path')
const { DllPlugin } = require('webpack')
const pathResolve = (url) => path.resolve(__dirname, url)
module.exports = {
  mode: 'development',
  entry: {
    utils: ['isarray', 'is-promise']
  },
  output: {
    path: pathResolve('../dist'),
    filename: 'utils.dll.js',
    library: '_dll_utils'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_utils',
      path: path.join(__dirname, '../dist', 'utils.manifest.json')
    })
  ]
}
