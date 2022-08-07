const info = Object.freeze({
  name: 'lihh',
  age: 20,
  school: {}
})

// 原始属性
console.log(info) // { name: 'lihh', age: 20, school: {} }

// 修改属性
info.age += 1
console.log(info) // 修改失败 { name: 'lihh', age: 20, school: {} }

// 删除属性
delete info.name
console.log(info) // 删除失败 { name: 'lihh', age: 20, school: {} }

// 添加属性
info.address = {}
console.log(info) // 添加失败 { name: 'lihh', age: 20, school: {} }

// 更加深层次添加属性
info.school.name = '大学'
console.log(info) // { name: 'lihh', age: 20, school: {name: '大学'} }
