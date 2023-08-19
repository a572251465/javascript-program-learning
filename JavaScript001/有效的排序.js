const colors = ['黄', '红', '绿', '黄', '黄', '黄', '绿']

const sortCompare = {
  黄: 1,
  红: 2,
  绿: 3
}

colors.sort((a, b) => sortCompare[a] - sortCompare[b])
console.log(colors);
