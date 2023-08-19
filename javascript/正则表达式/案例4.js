const regx =  /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/

const r = "F:\\study\\javascript\\regex\\regular"
const r1 = "F:\\study\\javascript\\regex\\"
const r2 = "F:\\study\\javascript"
const r3 = "F:\\"

console.log(regx.test(r3))
console.log(regx.test(r2))
console.log(regx.test(r1))
console.log(regx.test(r))