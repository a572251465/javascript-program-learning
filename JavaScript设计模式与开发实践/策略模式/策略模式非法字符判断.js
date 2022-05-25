// 1. 需要验证的用户信息
const user = {
  username: '11',
  password: ''
}

// 定制判断策略
const strategies = {
  isEmpty(value, errMsg) {
    if (!value) return errMsg
    return ''
  },
  isLength(value, len, errMsg) {
    if (value.length < len) return errMsg
    return ''
  }
}

// 3. 添加到列表
const set = new Set()
set.add([user.username, 'isEmpty', '用户名称不能为空'])
set.add([user.password, 'isLength:6', '密码不能低于6位数'])

// 4. 循环列表 来进行判断
for (const item of set) {
  const [value, aliasFun, errMsg] = item
  const fnName =
    aliasFun.indexOf(':') !== -1 ? aliasFun.split(':')[0] : aliasFun
  const otherParam =
    aliasFun.indexOf(':') !== -1 ? aliasFun.split(':').slice(1) : []

  const res = strategies[fnName](value, ...otherParam, errMsg)
  if (res) {
    console.log(res)
    break
  }
}
