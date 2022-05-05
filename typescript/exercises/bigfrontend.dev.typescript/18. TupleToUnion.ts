type TupleToUnion<T extends any[]> = T[number]

type Foo = [string, number, boolean]

type Bar = TupleToUnion<Foo> // string | number | boolean

export default {}
