const str = '4567890000789'
const reg = /(?!^)(?=(\d{3})+$)/gi
console.log(str.replace(reg, ','))