// 复制字符T为字符串类型，长度为C

type RepeatString<T extends string, K, A extends any[]= [], S extends string = ''> = K extends A["length"] ? S : RepeatString<T, K, [...A, T], `${S}${T}`>

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''

export default {}
