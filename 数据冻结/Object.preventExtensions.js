const obj = Object.preventExtensions({
  name: 'lihh',
  age: 20,
  school: {}
})
console.log(obj) // { name: 'lihh', age: 20, school: {} }

// ---- 删除操作 ----
delete obj.name

console.log(obj) // {age: 20, school: {}}

// ---- 修改操作 ----
obj.age += 1

console.log(obj) // {age: 21, school: {}}

// ---- 添加操作 ----
obj.address = 'shandong'
console.log(obj) // ❌  {age: 21, school: {}}  添加失败

// --- 添加更深层的属性 -----
obj.school.name = '大学'
console.log(obj) // {age: 21, school: {name: '大学'}}
