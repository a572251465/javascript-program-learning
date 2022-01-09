const str = 'a22c a222c a2222c'
// 匹配连续出现的数字[0-9]范围内的，至少出现2次，最多三次
console.log(str.match(/a\d{2,3}c/gi))

const str1 = 'a1b a2b a3b a4b'
// 匹配字符组中1，2，3任意数值
console.log(str1.match(/a[123]b/gi))

const str2 = 'a1234b a23456b'
// [1-4]+ 匹配1-4中任意值，至少出现一次
console.log(str2.match(/a[1-4]+b/gi))

const str3 = 'a1b a2b a3b a4b'
// 在字符组中前面添加^ 表示筛选内容取反
console.log(str3.match(/a[^1-3]b/gi))

const str4 = 'sdf7897sdf()'
// 表示匹配任意字符
console.log(str4.match(/[\d\D]+/gi))
console.log(str4.match(/.+/gi))

const str5 = 'a22c a222c a2222c'
// 量词后面添加? 表示惰性匹配 会尽可能的少匹配
console.log(str5.match(/a\d{2,4}?/gi))
const str6 = 'a12dgs344'
console.log(str6.match(/.+?/gi))

const str7 = '#ffbbad #Fc01DF #FFF #ffE'
console.log(str7.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/gi))

const str8 = '23:59 02:07'
console.log(str8.match(/([01][0-9]|[2][0-3]):[0-5][0-9]/gi))

const str9 = '2022-01-23 2222-12-31'
console.log(str9.match(/(2[0-9]{3})-([0][1-9]|[1][0-2])-([0][1-9]|[1-2][0-9]|[3][0-1])/gi))

const str10 = 'F:\\study\\javascript\\regex\\regular expression.pdf'
var regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/
console.log(str10.match(/[A-Z]:(\\[\d\D]+){0,}/gi))

const str11 = 'hello'
console.log(str11.replace(/(?=l)/gi, '#'))
const str12 = '123456789'
console.log(str12.replace(/(?!^)(?=(\d{3})+$)/gi, ','))

const str13 = 1800
console.log(String(str13.toFixed(2)).replace(/^/g, '$ '))

const str14 = '2017-06-12'
const reg1 = /\d{4}-\d{2}-\d{2}/
const reg2 = /(\d{4})-(\d{2})-(\d{2})/
console.log(str14.match(reg1))
console.log(str14.match(reg2))

console.log(str14.replace(reg2, '$2/$3/$1'))

const str15 = 'ababa abbb ababab'
console.log(str15.match(/(ab)+/g))
console.log(str15.match(/(?:ab)+/g))

const str16 = '  123 4556  '
console.log(str16.replace(/^\s+|\s+$/gi, ''))
console.log(str16.replace(/^\s+(.*?)\s+$/, '$1'))

const str17 = 'my name is epeli'
const str18 = str17.replace(/(?:^|\s)[a-z]/g, function(c) {
  return c.toUpperCase()
})
console.log(str18)

const str19 = '-moz-transform'
const str20 = str19.replace(/[-_\s]+(.)?/g, function(match, c) {
  return c ? c.toUpperCase() : ''
})
console.log(str20)

// 贪婪匹配
const str21 = '12345'
console.log(str21.match(/(\d{1,3})(\d{1,3})/))
// 惰性匹配
console.log(str21.match(/(\d{1,3}?)(\d{1,3})/))
console.log(str21.match(/^\d{1,3}?\d{1,3}/))