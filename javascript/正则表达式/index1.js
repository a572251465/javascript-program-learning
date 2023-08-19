console.log("2022-01-03".replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$1/$3"))

const regx = /\d{4}([-.:])\d{2}\1\d{2}/
const str = "2022-01-03";
const str1 = "2022-01.03";
console.log(regx.test(str))
console.log(regx.test(str1))