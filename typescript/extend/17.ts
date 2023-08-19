// never 字面量
// 基本数据类型  包装数据类型
// any unknown

type res1 = never extends '123' ? 'yes' : 'no' // yes
type res2 = '123' extends never ? 'yes' : 'no' // no

type res3 = '123' extends string ? 'yes' : 'no' // yes
type res4 = string extends '123' ? 'yes' : 'no' // no

type res5 = '123' extends String ? 'yes' : 'no' // yes
type res6 = String extends '123' ? 'yes' : 'no' // no

type res7 = '123' extends any ? 'yes' : 'no' // yes
type res8 = '123' extends unknown ? 'yes' : 'no' // yes
type res9 = unknown extends '123' ? 'yes' : 'no' // no
type res11 = any extends boolean ? true : false

type a = Omit<res7, res1>

type res10 = any extends '123' ? 'yes' : 'no'
type res12 = boolean extends boolean | number ? 'yes' : 'no'

export default {}
