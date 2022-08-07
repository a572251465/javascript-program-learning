const info = Object.seal({
  name: 'lihh',
  age: 20,
  school: {}
})

// 修改之前
console.log(info) // { name: 'lihh', age: 20, school: {} }

// 属性删除
delete info.name
console.log(info) // × 删除失败 { name: 'lihh', age: 20, school: {} }

// 属性修改
info.age += 1
console.log(info) // { name: 'lihh', age: 21, school: {} }

// 属性添加
info.address = "shanxi"
console.log(info) // 添加失败 { name: 'lihh', age: 20, school: {} }

// 深层属性添加
info.school.name = '大学'
console.log(info) // { name: 'lihh', age: 20, school: {name: '大学'} }
