const babel = require('@babel/core')

const app = `
<div className="name" a="1" style={{ color: 'red;' }}>
    <span>11111</span>
  </div>
`

const result = babel.transform(app, {
  plugins: [['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]]
})
console.log(result.code)
