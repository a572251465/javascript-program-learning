// 找出E类型在元组类型T中的下标

type FindIndex<T, P> = any

type isAny<T> = 0 extends (1 & T) ? true : false

type a = 1 & unknown
type b = false & unknown
type c = any & unknown
type d = never & unknown

export default {}
