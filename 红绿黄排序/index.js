// 在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。
// 使得排序后数组中球的顺序为:黄、红、蓝。

const strList = '红蓝蓝黄红黄蓝红红黄红'
const sortObj = {
  黄: 0,
  红: 1,
  蓝: 2
}

const list = strList
  .split('')
  .sort((a, b) => sortObj[a] - sortObj[b])
  .join('')
