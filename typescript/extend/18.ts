type A = { length: number }
type B = { length1: number }
type Sum = { length: number }

type Compare<T, U> = [T] extends [U] ? '子集' : 'no 子集'
type res = Compare<A | B, Sum>

type isNever<T> = T extends never ? true : false
type res1 = isNever<never>


type t1 = never | boolean
type t2 = never & boolean
type t3 = unknown | boolean
type t4 = unknown & boolean

type b = Exclude<t4, t4>

type t5 = boolean & {}

type t6 = [string, number];
type t7 = t6[number];
type t8 = Record<string, string>

export default {}
