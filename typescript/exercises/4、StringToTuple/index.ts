// 字符串转换为元组类型
type StringToTuple<T, S extends any[] = []> = T extends `${infer L}${infer R}` ? StringToTuple<R, [...S, L]> : S

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []

export default {}
