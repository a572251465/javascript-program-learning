/**
 * @author lihh
 * @description 实现模板引擎 其实就是把无用的变量内容替换为字符串
 * @param {*} str 传递的字符串
 * @param {*} data 渲染的数据
 * @returns
 */
function tmpl(str, data) {
  // 1. 将<%=XXX%> 替换为${XXX}
  str = str.replace(/<%=(.*?)%>/gi, '${$1}')
  // 2. 用变量str进行拼接，用with限定作用域
  let string = 'let str = ``; \r\n with(data){'
  string += 'str += `'
  // 3. 以<%XXX%> 为界限进行分割，进行字符串的拼接
  string += str.replace(/<%(.+?)%>/gi, function () {
    return '`\r\n' + arguments[1] + '\r\n str += `'
  })
  string += '` \r\n } \r\n return str'
  // 4. new Function 来运行字符串
  const fn = new Function('data', string)
  return fn(data)
}

const innerHTML = document.querySelector('#user_tmpl').innerHTML
const users = [
  {
    url: 'http://www.baidu.com',
    name: '测试1'
  },
  {
    url: 'http://www.baidu.com',
    name: '测试2'
  }
]
const string = tmpl(innerHTML, { users })
document.querySelector('#name_list').innerHTML = string

let str = ``
with (data) {
  str += `
      `
  for (var i = 0; i < users.length; i++) {
    str += `
      <li>
        <a href="${users[i].url}"> ${users[i].name} </a>
      </li>
      `
  }
  str += `
    `
}
return str
