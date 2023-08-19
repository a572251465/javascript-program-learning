interface Person {
  name: string
  age: number
  phone: string
  address: {
    info: string
    code: number
  }
}

type Computed<T> = {
  [P in keyof T]: T[P]
}
type Join<T extends keyof any, U> = {
  [P in T]: U
}
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}
type DeepReadOnly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadOnly<T[P]> : T[P]
}
type DeepNoReadOnly<T> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepNoReadOnly<T[P]> : T[P]
}
type PartialOptional<T, U extends keyof T> = Partial<Pick<T, U>> & Omit<T, U>

type PickByValue<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}
type PickByValue1<T, U> = Join<
  {
    [P in keyof T]: T[P] extends U ? P : never
  }[keyof T],
  U
>

type t1 = DeepPartial<Person>
type t2 = DeepRequired<t1>
type t3 = DeepReadOnly<Person>
type t4 = DeepNoReadOnly<t3>
type t5 = Computed<PartialOptional<Person, 'name'>>
type t6 = PickByValue<Person, string>
type t7 = PickByValue1<Person, number>

export default {}
