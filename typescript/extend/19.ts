interface Person {
  name: string
  age: number
  address: {
    name: string
    info: string
  }
}
function getInfo(userInfo: { username: string; password: string }) {
  return {
    username: 'lihh',
    age: 20,
    sex: true
  }
}
class User {
  constructor(public name: string, public age: number) {}
}

type Extract<T, U> = T extends U ? T : never
type Exclude<T, U> = T extends U ? never : T
type AllUnion<T extends any[]> = T extends Array<infer B> ? B : never
type AllUnion1<T extends any[]> = T[number]
type FunctionParams<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never
type FunctionReturn<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never
type ConstructorParams<T extends new (...args: any) => any> = T extends new (
  ...args: infer P
) => any
  ? P
  : never
type Record<T extends keyof any, K> = {
  [P in T]: K
}
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type DeepOnlyRead<T extends Record<any, any>> = {
  readonly [P in keyof T]: T[P] extends Record<any, any>
    ? DeepOnlyRead<T[P]>
    : T[P]
}
type NotNull<T> = T & {}
type isNever<T> = [T] extends [never] ? true : false

type t1 = Extract<keyof Person, 'name' | 'age'>
type t2 = Exclude<keyof Person, 'name'>
type t3 = [string, boolean, number]
type t4 = AllUnion<t3>
type t4_1 = AllUnion1<t3>
type t5 = t3[number]
type IFn = typeof getInfo
type t6 = AllUnion<FunctionParams<typeof getInfo>>
type t7 = AllUnion<Parameters<typeof getInfo>>
type t8 = ReturnType<IFn>
type t9 = FunctionReturn<IFn>
type t10 = AllUnion<ConstructorParameters<typeof User>>
type t11 = AllUnion<ConstructorParams<typeof User>>
type t12 = Record<'name' | 'age', string>
type t13 = Pick<Person, 'name' | 'age'>
type t14 = Omit<Person, 'name' | 'age'>
type t15 = DeepOnlyRead<Person>
type t16 = isNever<never>
type t17 = isNever<string>
type t18 = isNever<boolean>
type t19 = isNever<any>
type t20 = isNever<unknown>
type t21 = [any] extends [never] ? true : false;

let test: t15 = {
  name: '',
  age: 20,
  address: {
    name: '',
    info: ''
  }
}

export default {}
