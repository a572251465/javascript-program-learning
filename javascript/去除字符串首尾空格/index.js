const str = '  123456   '
// 方法1 通过parseInt 以及尾部替换空来实现
console.log(String(parseInt(str)).replace(/\s+$/gi, ''))

// 方法2 通过头部尾部同时替换空格来实现
console.log(str.replace(/^\s+|\s+$/gi, ''))

// 方法3：前面部分通过正则匹配空格来实现，后面部分通过查询非空格的位置来实现
function trim(s) {
  s = s.replace(/^\s+/gi, '')
  const ws = /\s/
  i = s.length

  while (ws.test(s.charAt(--i)));
  return s.slice(0, i + 1)
}
console.log(trim(str))

// 方法4 通过正则懒惰匹配来进行替换，；匹配括号中的
console.log(str.replace(/^\s*([\S\s]*?)\s*$/gi, '$1'))

// 方法5 使用了非捕获分组，将中间部分进行捕获
console.log(str.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/gi, '$1'))

// 方法6
console.log(str.replace(/^\s*([\d\D]*?)\s*$/, '$1'))
