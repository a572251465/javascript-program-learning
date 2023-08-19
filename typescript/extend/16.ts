type BasicType = { length: string }
type Info = {
  name: string
  age: number
  length: string
}

type judge<T, U> = T extends U ? 'success' : 'fail'
type res = judge<Info, BasicType>

// never 字面量
// 基本数据类型  包装数据类型
// any unknown



export default {}
