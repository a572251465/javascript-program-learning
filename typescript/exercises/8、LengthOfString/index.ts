// 计算字符串字面量类型的长度
type LengthOfString<T, S extends any[] = []> = T extends `${infer L}${infer R}` ? LengthOfString<R, [...S, L]> : S["length"]

type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0

export default {}
