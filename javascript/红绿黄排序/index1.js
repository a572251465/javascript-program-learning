const strList = '红蓝蓝黄红黄蓝红红黄红'
const sortObj = {
  黄: 0,
  红: 1,
  蓝: 2
}

const res = strList.split('').sort((a, b) => sortObj[a] - sortObj[b]).join('')
console.log(res)