type tuple = [string, number, boolean]

type res1 = tuple[number] // string | number | boolean
type AllUnion<T extends any[]> = T extends Array<infer P> ? P : never
type res2 = AllUnion<tuple>


export default {}
