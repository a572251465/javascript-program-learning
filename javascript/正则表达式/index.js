const regx = /hello/;
console.log(regx.test("hello1"))

const regx1 = /ab{2,5}c/g
const str1 = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log(str1.match(regx1))

const r2 = /a[123]b/g
const str2 = "a0b a1b a2b a3b a4b";
console.log(str2.match(r2))

console.log("hello".replace(/^|$/g, "#")) // #hello#

const s2 = "123456789"
console.log(s2.replace(/(?!^)(?=(\d{3})+$)/g, ",")) // 123,456,789