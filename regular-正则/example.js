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