interface Person {
  name: string
  age: number
  address: {
    code: 200
  }
}

// 获取name类型
type NameType = Person['name']
// 获取所有的key
type AllKeys = keyof Person
// 获取code的 常量类型
type code = Person['address']['code']
// 获取所有的value的类型
type AllValues = Person[keyof Person]