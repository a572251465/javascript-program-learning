// 横杠命名转化为驼峰命名
type FirstUppercase<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T
type CamelCase<T extends string = '', S extends string = ''> = T extends `${infer L}-${infer R}` ? CamelCase<R, `${FirstUppercase<S>}${FirstUppercase<L>}`> : `${S}${FirstUppercase<T>}`
type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>                // OpenFlag

export default CamelCase
