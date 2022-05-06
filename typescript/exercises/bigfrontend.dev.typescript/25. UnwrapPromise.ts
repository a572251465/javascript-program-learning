// your code here
type UnwrapPromise<T> = T extends Promise<infer P> ? P : never

type A = UnwrapPromise<Promise<string>> // string
type B = UnwrapPromise<Promise<null>> // null
type C = UnwrapPromise<null> // Error

export default {}
